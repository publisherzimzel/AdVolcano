import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { getFallbackExchangeRate, getRazorpayConfig } from "@/lib/env";
import { sendPaymentNotification } from "@/lib/email";
import { calculatePayment, PAYMENT_MIN_USD } from "@/lib/payment";

export async function POST(request: Request) {
  try {
    const { keyId, keySecret } = getRazorpayConfig();

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

    const rate = parseFloat(exchangeRate) || getFallbackExchangeRate();
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

    try {
      await sendPaymentNotification({
        name: name.trim(),
        email: email.trim(),
        amountUsd: amount,
        totalInr: breakdown.totalInr,
        orderId: order.id,
      });
    } catch (emailErr) {
      console.error("Payment notification email failed:", emailErr);
    }

    return NextResponse.json({
      orderId: order.id,
      amount: breakdown.totalPaise,
      currency: "INR",
      keyId,
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
