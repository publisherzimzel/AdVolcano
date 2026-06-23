export function parseEmailList(value?: string): string[] {
  if (!value?.trim()) return [];
  return value
    .split(",")
    .map((e) => e.trim())
    .filter(Boolean);
}

export function getEmailConfig() {
  const fromEmail =
    process.env.VERIFIED_SENDER_EMAIL?.trim() ||
    process.env.FROM_EMAIL?.trim() ||
    "noreply@advolcano.io";

  return {
    sendgridApiKey: process.env.SENDGRID_API_KEY?.trim(),
    fromEmail,
    adminEmail: process.env.ADMIN_EMAIL?.trim(),
    contactEmails: parseEmailList(process.env.CONTACT_NOTIFICATION_EMAILS),
    demoEmails: parseEmailList(process.env.DEMO_NOTIFICATION_EMAILS),
    maxEmailWorkers: Math.max(1, parseInt(process.env.MAX_EMAIL_WORKERS || "3", 10)),
  };
}

export function getRazorpayConfig() {
  return {
    keyId: process.env.RAZORPAY_KEY_ID?.trim(),
    keySecret: process.env.RAZORPAY_KEY_SECRET?.trim(),
  };
}

export function getFixerApiKey() {
  return process.env.FIXER_API_KEY?.trim();
}
