import { NextResponse } from "next/server";
import { EXCHANGE_RATE_REFRESH_MS, fetchUsdToInrRate } from "@/lib/exchange-rate";

export async function GET() {
  try {
    const result = await fetchUsdToInrRate();
    return NextResponse.json(
      {
        rate: result.rate,
        updatedAt: result.updatedAt,
        source: result.source,
        stale: result.stale ?? false,
        refreshIntervalMs: EXCHANGE_RATE_REFRESH_MS,
      },
      {
        headers: {
          "Cache-Control": `public, max-age=${Math.floor(EXCHANGE_RATE_REFRESH_MS / 1000)}`,
        },
      }
    );
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to fetch exchange rate." },
      { status: 503 }
    );
  }
}
