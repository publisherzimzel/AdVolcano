import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { calculatePayment, PAYMENT_MIN_USD } from "@/lib/payment";

export async function POST(request: Request) {
  try {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      return NextResponse.json(
        { error: "Razorpay is not configured. Add RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET to .env" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, amountUsd, exchangeRate } = body;

    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const amount = parseFloat(amountUsd);
    if (isNaN(amount) || amount < PAYMENT_MIN_USD) {
      return NextResponse.json(
        { error: `Minimum payment amount is $${PAYMENT_MIN_USD} USD.` },
        { status: 400 }
      );
    }

    const rate = parseFloat(exchangeRate) || parseFloat(process.env.USD_INR_EXCHANGE_RATE || "94.70");
    const breakdown = calculatePayment(amount, rate);

    if (breakdown.totalPaise < 100) {
      return NextResponse.json({ error: "Calculated amount is too low." }, { status: 400 });
    }

    const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });

    const order = await razorpay.orders.create({
      amount: breakdown.totalPaise,
      currency: "INR",
      receipt: `adv_${Date.now()}`,
      notes: {
        name: name.trim(),
        email: email.trim(),
        amount_usd: String(amount),
        platform_fee_usd: String(breakdown.platformFeeUsd),
        gst_usd: String(breakdown.gstUsd),
        exchange_rate: String(rate),
      },
    });

    return NextResponse.json({
      orderId: order.id,
      amount: breakdown.totalPaise,
      currency: "INR",
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || keyId,
      breakdown,
    });
  } catch (err) {
    console.error("Razorpay order error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to create payment order." },
      { status: 500 }
    );
  }
}
