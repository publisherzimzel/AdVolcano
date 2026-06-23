"use client";

import { useCallback, useEffect, useState } from "react";
import Script from "next/script";
import {
  calculatePayment,
  formatInr,
  formatUsd,
  PAYMENT_MIN_USD,
  type PaymentBreakdown,
} from "@/lib/payment";

type RazorpayOptions = {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  prefill: { name: string; email: string };
  theme: { color: string };
  handler: (response: { razorpay_payment_id: string; razorpay_order_id: string }) => void;
  modal?: { ondismiss: () => void };
};

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => { open: () => void };
  }
}

export function PaymentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amountUsd, setAmountUsd] = useState("");
  const [exchangeRate, setExchangeRate] = useState(94.7);
  const [rateUpdatedAt, setRateUpdatedAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [scriptReady, setScriptReady] = useState(false);

  const fetchRate = useCallback(async () => {
    setRefreshing(true);
    try {
      const res = await fetch("/api/exchange-rate");
      const data = await res.json();
      setExchangeRate(data.rate);
      setRateUpdatedAt(data.updatedAt);
    } catch {
      setError("Could not refresh exchange rate.");
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchRate();
  }, [fetchRate]);

  const parsedAmount = parseFloat(amountUsd) || 0;
  const breakdown: PaymentBreakdown | null =
    parsedAmount >= PAYMENT_MIN_USD ? calculatePayment(parsedAmount, exchangeRate) : null;

  async function handlePayment(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!scriptReady || !window.Razorpay) {
      setError("Payment gateway is still loading. Please try again.");
      return;
    }

    if (!name.trim() || !email.trim()) {
      setError("Name and email are required.");
      return;
    }

    if (parsedAmount < PAYMENT_MIN_USD) {
      setError(`Minimum payment amount is $${PAYMENT_MIN_USD} USD.`);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, amountUsd: parsedAmount, exchangeRate }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create order.");

      const rzp = new window.Razorpay({
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: "AdVolcano",
        description: `Wallet top-up — $${parsedAmount} USD`,
        order_id: data.orderId,
        prefill: { name: name.trim(), email: email.trim() },
        theme: { color: "#0F2744" },
        handler: () => {
          setSuccess(
            "Payment successful. Your wallet will be credited within 24–48 hours after verification."
          );
          setLoading(false);
        },
        modal: {
          ondismiss: () => setLoading(false),
        },
      });

      rzp.open();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Payment failed.");
      setLoading(false);
    }
  }

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        onReady={() => setScriptReady(true)}
      />

      <form onSubmit={handlePayment} className="max-w-lg mx-auto space-y-5">
        <div className="premium-card p-5 bg-blue/5 border-blue/20">
          <div className="flex gap-3">
            <svg width="18" height="18" viewBox="0 0 18 18" className="text-blue shrink-0 mt-0.5">
              <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.2" fill="none" />
              <path d="M9 8v4M9 5.5h.01" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            <p className="text-[13px] text-neutral-700 leading-relaxed">
              <strong className="text-navy">Important:</strong> Use the same email and account name registered on AdVolcano.io. Payments reflect within 24–48 hours.
            </p>
          </div>
        </div>

        <div>
          <label htmlFor="pay-name" className="block text-[13px] font-medium text-neutral-700 mb-1.5">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="pay-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your AdVolcano account name"
            required
            className="w-full px-4 py-2.5 text-[14px] border border-neutral-300 rounded-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20"
          />
        </div>

        <div>
          <label htmlFor="pay-email" className="block text-[13px] font-medium text-neutral-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="pay-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your AdVolcano account email"
            required
            className="w-full px-4 py-2.5 text-[14px] border border-neutral-300 rounded-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20"
          />
        </div>

        <div>
          <label htmlFor="pay-amount" className="block text-[13px] font-medium text-neutral-700 mb-1.5">
            Amount (USD) <span className="text-red-500">*</span>
          </label>
          <input
            id="pay-amount"
            type="number"
            min={PAYMENT_MIN_USD}
            step="1"
            value={amountUsd}
            onChange={(e) => setAmountUsd(e.target.value)}
            placeholder={`Min ${PAYMENT_MIN_USD} USD`}
            required
            className="w-full px-4 py-2.5 text-[14px] border border-neutral-300 rounded-sm focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy/20"
          />
        </div>

        <div className="flex items-center justify-between gap-4 p-4 bg-surface border border-neutral-200 rounded-sm">
          <div>
            <p className="text-[13px] text-neutral-600">
              USD to INR: <span className="font-semibold text-navy">₹{exchangeRate.toFixed(2)}</span>
            </p>
            {rateUpdatedAt && (
              <p className="text-[11px] text-neutral-400 mt-0.5">
                Last updated: {new Date(rateUpdatedAt).toLocaleString()}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={fetchRate}
            disabled={refreshing}
            className="text-[12px] font-medium text-blue hover:text-blue-light flex items-center gap-1.5 disabled:opacity-50"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" className={refreshing ? "animate-spin" : ""}>
              <path d="M7 1v2M7 11v2M1 7h2M11 7h2M2.5 2.5l1.5 1.5M10 10l1.5 1.5M2.5 11.5l1.5-1.5M10 4l1.5-1.5" stroke="currentColor" strokeWidth="1.2" fill="none" />
            </svg>
            Refresh
          </button>
        </div>

        <div className="premium-card p-5 space-y-3">
          <h3 className="text-[13px] font-semibold text-navy uppercase tracking-wider">Payment Summary</h3>
          <div className="space-y-2 text-[13px]">
            <div className="flex justify-between text-neutral-600">
              <span>Amount</span>
              <span>
                {breakdown ? `${formatUsd(breakdown.amountUsd)} / ${formatInr(breakdown.amountInr)}` : "$0.00 / ₹0.00"}
              </span>
            </div>
            <div className="flex justify-between text-amber-700">
              <span>Platform Fee (3%)</span>
              <span>
                {breakdown ? `${formatUsd(breakdown.platformFeeUsd)} / ${formatInr(breakdown.platformFeeInr)}` : "$0.00 / ₹0.00"}
              </span>
            </div>
            <div className="flex justify-between text-amber-700">
              <span>GST (18%)</span>
              <span>
                {breakdown ? `${formatUsd(breakdown.gstUsd)} / ${formatInr(breakdown.gstInr)}` : "$0.00 / ₹0.00"}
              </span>
            </div>
            <div className="flex justify-between pt-3 border-t border-neutral-200 font-semibold text-navy text-[15px]">
              <span>Total</span>
              <span>{breakdown ? formatInr(breakdown.totalInr) : "₹0.00"}</span>
            </div>
          </div>
        </div>

        {error && (
          <p className="text-[13px] text-red-600 bg-red-50 border border-red-200 px-4 py-3 rounded-sm">{error}</p>
        )}
        {success && (
          <p className="text-[13px] text-success bg-green-50 border border-green-200 px-4 py-3 rounded-sm">{success}</p>
        )}

        <button
          type="submit"
          disabled={loading || !breakdown}
          className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Opening Razorpay…" : "Proceed to Payment"}
        </button>

        <p className="text-[11px] text-neutral-500 text-center leading-relaxed">
          By proceeding, you agree to our terms. Secure &amp; non-refundable. Razorpay checkout opens in INR with all applicable fees included.
        </p>
      </form>
    </>
  );
}
