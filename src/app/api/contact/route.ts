import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { checkRateLimit, getClientIP } from "@/lib/rate-limit";

// Configure your email service credentials with explicit SMTP settings
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    // Do not fail on invalid certs
    rejectUnauthorized: false,
  },
});

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request);
    console.log("Contact form request from IP:", clientIP);

    // Check rate limit (2 minutes)
    const rateLimitResult = checkRateLimit(
      `contact_${clientIP}`,
      2 * 60 * 1000
    );

    if (!rateLimitResult.allowed) {
      console.log("Rate limit exceeded for IP:", clientIP);
      return NextResponse.json(
        {
          error: "Rate limit exceeded",
          message: rateLimitResult.message,
          timeUntilReset: rateLimitResult.timeUntilReset,
        },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil(
              rateLimitResult.timeUntilReset / 1000
            ).toString(),
          },
        }
      );
    }

    // Log environment variables (masked for security)
    console.log("Email config check:");
    console.log("EMAIL_USER set:", !!process.env.EMAIL_USER);
    console.log("EMAIL_PASSWORD set:", !!process.env.EMAIL_PASSWORD);
    console.log("CONTACT_EMAIL set:", !!process.env.CONTACT_EMAIL);

    const body = await request.json();
    console.log("Received form data:", body);

    const { name, email, company, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log("Missing required fields:", {
        name,
        email,
        subject,
        message,
      });
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    // Create email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.EMAIL_USER, // Send to your defined contact email
      subject: `TeleMorph Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Sender IP: ${clientIP} | Submitted via TeleMorph contact form
        </p>
      `,
    };

    console.log("Attempting to send email to:", mailOptions.to);

    try {
      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent successfully:", info.response);

      return NextResponse.json(
        { message: "Email sent successfully" },
        { status: 200 }
      );
    } catch (emailError: unknown) {
      const errorMessage =
        emailError instanceof Error
          ? emailError.message
          : "Unknown email error";
      console.error("Nodemailer error:", errorMessage);
      console.error("Error details:", emailError);

      return NextResponse.json(
        { error: `Email service error: ${errorMessage}` },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error("General error:", errorMessage);
    console.error("Error details:", error);

    return NextResponse.json(
      { error: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    );
  }
}
