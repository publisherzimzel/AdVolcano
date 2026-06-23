import { getFixerApiKey } from "@/lib/env";

/** How long the server keeps a fetched rate before refreshing from the internet. */
export const EXCHANGE_RATE_REFRESH_MS = 5 * 60 * 1000;

type RateSource = "fixer" | "frankfurter" | "cache";

export type ExchangeRateResult = {
  rate: number;
  updatedAt: string;
  source: RateSource;
  stale?: boolean;
};

type RateCache = ExchangeRateResult & { fetchedAt: number };

const globalForRate = globalThis as typeof globalThis & {
  __usdInrRateCache?: RateCache;
};

function roundRate(rate: number) {
  return Math.round(rate * 100) / 100;
}

async function fetchFromFixer(apiKey: string): Promise<ExchangeRateResult | null> {
  try {
    const res = await fetch(
      `https://data.fixer.io/api/latest?access_key=${apiKey}&base=USD&symbols=INR`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;

    const data = await res.json();
    const rate = data.rates?.INR;
    if (data.success === false || typeof rate !== "number") return null;

    return {
      rate: roundRate(rate),
      updatedAt: data.date ? `${data.date}T00:00:00Z` : new Date().toISOString(),
      source: "fixer",
    };
  } catch {
    return null;
  }
}

async function fetchFromFrankfurter(): Promise<ExchangeRateResult | null> {
  try {
    const res = await fetch("https://api.frankfurter.app/latest?from=USD&to=INR", {
      cache: "no-store",
    });

    if (!res.ok) return null;

    const data = await res.json();
    const rate = data.rates?.INR;
    if (typeof rate !== "number") return null;

    return {
      rate: roundRate(rate),
      updatedAt: new Date().toISOString(),
      source: "frankfurter",
    };
  } catch {
    return null;
  }
}

async function fetchLiveRate(): Promise<ExchangeRateResult | null> {
  const apiKey = getFixerApiKey();
  if (apiKey) {
    const fixerRate = await fetchFromFixer(apiKey);
    if (fixerRate) return fixerRate;
  }

  return fetchFromFrankfurter();
}

export async function fetchUsdToInrRate(): Promise<ExchangeRateResult> {
  const cache = globalForRate.__usdInrRateCache;
  const now = Date.now();

  if (cache && now - cache.fetchedAt < EXCHANGE_RATE_REFRESH_MS) {
    return {
      rate: cache.rate,
      updatedAt: cache.updatedAt,
      source: cache.source,
    };
  }

  const live = await fetchLiveRate();
  if (live) {
    globalForRate.__usdInrRateCache = { ...live, fetchedAt: now };
    return live;
  }

  if (cache) {
    return {
      rate: cache.rate,
      updatedAt: cache.updatedAt,
      source: "cache",
      stale: true,
    };
  }

  throw new Error("Unable to fetch USD/INR exchange rate. Please try again shortly.");
}
