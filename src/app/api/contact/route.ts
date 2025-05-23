import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

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
    } catch (emailError: any) {
      console.error("Nodemailer error:", emailError.message);
      console.error("Error details:", emailError);

      return NextResponse.json(
        { error: `Email service error: ${emailError.message}` },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("General error:", error.message);
    console.error("Error details:", error);

    return NextResponse.json(
      { error: `Failed to send email: ${error.message}` },
      { status: 500 }
    );
  }
}
