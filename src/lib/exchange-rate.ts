import { getFallbackExchangeRate, getFixerApiKey } from "@/lib/env";

export async function fetchUsdToInrRate(): Promise<{
  rate: number;
  updatedAt: string;
  source: "fixer" | "fallback";
}> {
  const fallback = getFallbackExchangeRate();
  const apiKey = getFixerApiKey();

  if (apiKey) {
    try {
      const res = await fetch(
        `https://data.fixer.io/api/latest?access_key=${apiKey}&base=USD&symbols=INR`,
        { next: { revalidate: 3600 } }
      );

      if (res.ok) {
        const data = await res.json();
        const rate = data.rates?.INR;
        if (data.success !== false && rate && typeof rate === "number") {
          return {
            rate: Math.round(rate * 100) / 100,
            updatedAt: data.date ? `${data.date}T00:00:00Z` : new Date().toISOString(),
            source: "fixer",
          };
        }
      }
    } catch {
      // fall through
    }
  }

  // Free fallback if no Fixer key
  try {
    const res = await fetch("https://api.frankfurter.app/latest?from=USD&to=INR", {
      next: { revalidate: 3600 },
    });
    if (res.ok) {
      const data = await res.json();
      const rate = data.rates?.INR;
      if (rate && typeof rate === "number") {
        return {
          rate: Math.round(rate * 100) / 100,
          updatedAt: new Date().toISOString(),
          source: "fallback",
        };
      }
    }
  } catch {
    // fall through
  }

  return {
    rate: fallback,
    updatedAt: new Date().toISOString(),
    source: "fallback",
  };
}
