import { NextResponse } from "next/server";
import { fetchUsdToInrRate } from "@/lib/exchange-rate";

export async function GET() {
  const result = await fetchUsdToInrRate();
  return NextResponse.json({
    rate: result.rate,
    updatedAt: result.updatedAt,
    source: result.source,
  });
}
