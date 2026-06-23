import { NextResponse } from "next/server";
import { sendContactNotification } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, role, spend, message, intent } = body;

    if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    const fullName = `${firstName.trim()} ${lastName.trim()}`;
    const inquiryIntent = intent === "demo" ? "demo" : "contact";

    await sendContactNotification({
      fullName,
      email: email.trim(),
      company: company?.trim(),
      role: role?.trim(),
      spend: spend?.trim(),
      message: message.trim(),
      intent: inquiryIntent,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Failed to send message." },
      { status: 500 }
    );
  }
}
