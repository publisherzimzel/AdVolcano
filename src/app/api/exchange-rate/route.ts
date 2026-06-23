import { NextResponse } from "next/server";

const FALLBACK_RATE = parseFloat(process.env.USD_INR_EXCHANGE_RATE || "94.70");

export async function GET() {
  try {
    const res = await fetch("https://api.frankfurter.app/latest?from=USD&to=INR", {
      next: { revalidate: 3600 },
    });

    if (res.ok) {
      const data = await res.json();
      const rate = data.rates?.INR;
      if (rate && typeof rate === "number") {
        return NextResponse.json({
          rate: Math.round(rate * 100) / 100,
          updatedAt: new Date().toISOString(),
          source: "live",
        });
      }
    }
  } catch {
    // fall through to fallback
  }

  return NextResponse.json({
    rate: FALLBACK_RATE,
    updatedAt: new Date().toISOString(),
    source: "fallback",
  });
}
