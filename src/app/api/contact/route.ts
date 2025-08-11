import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY!);

const schema = z.object({
  name: z.string().min(1),
  email: z.email(),
  message: z.string().min(1),
  token: z.string().min(1),
});

export async function POST(req: NextRequest) {
  if (req.method && req.method !== "POST") {
    return NextResponse.json(
      { error: "Method not allowed" },
      { status: 405, headers: { Allow: "POST" } }
    );
  }

  const body = await req.json();
  console.log("Received body:", body);

  // Validate body input
  const parseResult = schema.safeParse(body);
  if (!parseResult.success) {
    console.log("Validation errors:", parseResult.error.issues);
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }
  const { name, email, message, token } = parseResult.data;

  // Verify reCAPTCHA
  const params = new URLSearchParams();
  params.append("secret", process.env.RECAPTCHA_SECRET_KEY!);
  params.append("response", token);

  const recaptchaRes = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    }
  );

  const recaptchaData = await recaptchaRes.json();
  console.log("reCAPTCHA response:", recaptchaData);

  if (!recaptchaData.success) {
    return NextResponse.json(
      { error: "reCAPTCHA verification failed" },
      { status: 400 }
    );
  }

  // If all okay, send email here...
  try {
    await resend.emails.send({
      from: "Contact Form <info@donnellytechsolutions.co.uk>",
      to: "andrew.donnelly.1403@gmail.com",
      subject: `New Contact Message from ${name}`,
      text: `
        You have a new message from your website contact form:
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
