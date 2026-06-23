export const PAYMENT_MIN_USD = 100;
export const PLATFORM_FEE_RATE = 0.03;
export const GST_RATE = 0.18;

export type PaymentBreakdown = {
  amountUsd: number;
  platformFeeUsd: number;
  gstUsd: number;
  totalUsd: number;
  exchangeRate: number;
  amountInr: number;
  platformFeeInr: number;
  gstInr: number;
  totalInr: number;
  totalPaise: number;
};

export function calculatePayment(amountUsd: number, exchangeRate: number): PaymentBreakdown {
  const platformFeeUsd = amountUsd * PLATFORM_FEE_RATE;
  const subtotalUsd = amountUsd + platformFeeUsd;
  const gstUsd = subtotalUsd * GST_RATE;
  const totalUsd = subtotalUsd + gstUsd;

  const amountInr = amountUsd * exchangeRate;
  const platformFeeInr = platformFeeUsd * exchangeRate;
  const gstInr = gstUsd * exchangeRate;
  const totalInr = totalUsd * exchangeRate;
  const totalPaise = Math.round(totalInr * 100);

  return {
    amountUsd,
    platformFeeUsd,
    gstUsd,
    totalUsd,
    exchangeRate,
    amountInr,
    platformFeeInr,
    gstInr,
    totalInr,
    totalPaise,
  };
}

export function formatUsd(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}

export function formatInr(value: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(value);
}
