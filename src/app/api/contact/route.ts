import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.SENDGRID_API_KEY;
    const fromEmail = process.env.SENDGRID_FROM_EMAIL;
    const toEmail = process.env.SENDGRID_TO_EMAIL || "enterprise@advolcano.io";

    if (!apiKey || !fromEmail) {
      return NextResponse.json(
        { error: "Email service is not configured. Add SENDGRID_API_KEY and SENDGRID_FROM_EMAIL to .env" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { firstName, lastName, email, company, role, spend, message } = body;

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    sgMail.setApiKey(apiKey);

    const fullName = `${firstName.trim()} ${lastName.trim()}`;
    const html = `
      <h2>New contact inquiry — AdVolcano</h2>
      <p><strong>Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email.trim()}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      ${role ? `<p><strong>Role:</strong> ${role}</p>` : ""}
      ${spend ? `<p><strong>Monthly spend:</strong> ${spend}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message.trim().replace(/\n/g, "<br>")}</p>
    `;

    await sgMail.send({
      to: toEmail,
      from: fromEmail,
      replyTo: email.trim(),
      subject: `AdVolcano contact: ${fullName}${company ? ` — ${company}` : ""}`,
      text: `Name: ${fullName}\nEmail: ${email}\nCompany: ${company || "—"}\nRole: ${role || "—"}\nSpend: ${spend || "—"}\n\n${message}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SendGrid error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to send message." },
      { status: 500 }
    );
  }
}
