import sgMail from "@sendgrid/mail";
import { getEmailConfig } from "@/lib/env";

type SendEmailOptions = {
  to: string[];
  subject: string;
  html: string;
  text: string;
  replyTo?: string;
};

async function runWithConcurrency<T>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<void>
) {
  const queue = [...items];
  const workers = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (queue.length > 0) {
      const item = queue.shift();
      if (item !== undefined) await fn(item);
    }
  });
  await Promise.all(workers);
}

export async function sendNotificationEmails(options: SendEmailOptions) {
  const config = getEmailConfig();

  if (!config.sendgridApiKey) {
    throw new Error("SENDGRID_API_KEY is not configured.");
  }

  if (!config.fromEmail) {
    throw new Error("FROM_EMAIL or VERIFIED_SENDER_EMAIL is not configured.");
  }

  const recipients = [...new Set(options.to.filter(Boolean))];
  if (recipients.length === 0) {
    throw new Error("No notification recipients configured.");
  }

  sgMail.setApiKey(config.sendgridApiKey);

  const baseMessage = {
    from: config.fromEmail,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };

  await runWithConcurrency(recipients, config.maxEmailWorkers, async (to) => {
    await sgMail.send({ ...baseMessage, to });
  });
}

export async function sendContactNotification(data: {
  fullName: string;
  email: string;
  company?: string;
  role?: string;
  spend?: string;
  message: string;
  intent?: "contact" | "demo";
}) {
  const config = getEmailConfig();
  const isDemo = data.intent === "demo";
  const recipients = isDemo ? config.demoEmails : config.contactEmails;

  const fallback = config.adminEmail ? [config.adminEmail] : [];
  const to = recipients.length > 0 ? recipients : fallback;

  const label = isDemo ? "Demo request" : "Contact inquiry";
  const html = `
    <h2>New ${label} — AdVolcano</h2>
    <p><strong>Name:</strong> ${data.fullName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ""}
    ${data.role ? `<p><strong>Role:</strong> ${data.role}</p>` : ""}
    ${data.spend ? `<p><strong>Monthly spend:</strong> ${data.spend}</p>` : ""}
    <p><strong>Type:</strong> ${label}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, "<br>")}</p>
  `;

  await sendNotificationEmails({
    to,
    subject: `AdVolcano ${label.toLowerCase()}: ${data.fullName}${data.company ? ` — ${data.company}` : ""}`,
    text: `Name: ${data.fullName}\nEmail: ${data.email}\nCompany: ${data.company || "—"}\nRole: ${data.role || "—"}\nSpend: ${data.spend || "—"}\nType: ${label}\n\n${data.message}`,
    html,
    replyTo: data.email,
  });
}

export async function sendPaymentNotification(data: {
  name: string;
  email: string;
  amountUsd: number;
  totalInr: number;
  orderId: string;
}) {
  const config = getEmailConfig();
  const recipients = config.adminEmail ? [config.adminEmail] : config.contactEmails;

  const html = `
    <h2>New wallet payment order — AdVolcano</h2>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Amount:</strong> $${data.amountUsd.toFixed(2)} USD / ₹${data.totalInr.toFixed(2)} INR</p>
    <p><strong>Razorpay Order ID:</strong> ${data.orderId}</p>
  `;

  await sendNotificationEmails({
    to: recipients,
    subject: `AdVolcano payment order: ${data.name} — $${data.amountUsd.toFixed(2)}`,
    text: `Payment order created\nName: ${data.name}\nEmail: ${data.email}\nAmount: $${data.amountUsd} / ₹${data.totalInr}\nOrder: ${data.orderId}`,
    html,
    replyTo: data.email,
  });
}
