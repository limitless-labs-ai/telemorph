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

// Test transporter configuration
async function verifyTransporter() {
  try {
    await transporter.verify();
    console.log("SMTP connection verified successfully");
    return true;
  } catch (error) {
    console.error("SMTP connection failed:", error);
    return false;
  }
}

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request);
    console.log("Job application request from IP:", clientIP);

    // Check rate limit (2 minutes)
    const rateLimitResult = checkRateLimit(
      `careers_${clientIP}`,
      2 * 60 * 1000
    );

    if (!rateLimitResult.allowed) {
      console.log("Rate limit exceeded for job application from IP:", clientIP);
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
    console.log("Career application email config check:");
    console.log("EMAIL_USER set:", !!process.env.EMAIL_USER);
    console.log("EMAIL_PASSWORD set:", !!process.env.EMAIL_PASSWORD);
    console.log("CONTACT_EMAIL set:", !!process.env.CONTACT_EMAIL);
    console.log("CAREERS_EMAIL set:", !!process.env.CAREERS_EMAIL);

    // Verify SMTP connection first
    const isConnected = await verifyTransporter();
    if (!isConnected) {
      return NextResponse.json(
        { error: "Email service is not available" },
        { status: 500 }
      );
    }

    const formData = await request.formData();
    console.log("Received career application data");

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const jobTitle = formData.get("jobTitle") as string;
    const coverLetter = formData.get("coverLetter") as string;
    const resume = formData.get("resume") as File;

    console.log("Extracted form data:", {
      name,
      email,
      phone: !!phone,
      jobTitle,
      coverLetter: !!coverLetter,
      resume: resume ? resume.name : null,
    });

    // Validate required fields
    if (!name || !email || !jobTitle || !resume) {
      console.log("Missing required fields:", {
        name: !!name,
        email: !!email,
        jobTitle: !!jobTitle,
        resume: !!resume,
      });
      return NextResponse.json(
        { error: "Required fields are missing" },
        { status: 400 }
      );
    }

    // Validate file size (5MB limit)
    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File size too large. Maximum 5MB allowed." },
        { status: 400 }
      );
    }

    console.log("Converting resume to attachment...");

    // Convert resume to base64 for email attachment
    const resumeBuffer = await resume.arrayBuffer();
    const resumeBase64 = Buffer.from(resumeBuffer).toString("base64");

    console.log(`Resume converted: ${resume.name}, size: ${resume.size} bytes`);

    // Determine email recipient
    const emailRecipient =
      process.env.CAREERS_EMAIL ||
      process.env.CONTACT_EMAIL ||
      process.env.EMAIL_USER;
    console.log("Email recipient:", emailRecipient);

    // Create email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: emailRecipient,
      subject: `TeleMorph Job Application: ${jobTitle} - ${name}`,
      html: `
        <h2>New Job Application Received</h2>
        <p><strong>Position:</strong> ${jobTitle}</p>
        <p><strong>Applicant Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        ${
          coverLetter
            ? `
          <p><strong>Cover Letter:</strong></p>
          <div style="background: #f5f5f5; padding: 15px; border-left: 3px solid #0070f3; margin: 10px 0;">
            ${coverLetter.replace(/\n/g, "<br>")}
          </div>
        `
            : ""
        }
        <p><strong>Resume:</strong> See attachment (${resume.name})</p>
        <hr>
        <p style="color: #666; font-size: 12px;">
          Sender IP: ${clientIP} | This application was submitted through the TeleMorph careers page.
        </p>
      `,
      attachments: [
        {
          filename: resume.name,
          content: resumeBase64,
          encoding: "base64",
          contentType: resume.type,
        },
      ],
    };

    console.log(
      "Attempting to send career application email to:",
      mailOptions.to
    );

    try {
      // Send email
      const info = await transporter.sendMail(mailOptions);
      console.log("Career application email sent successfully:", info.response);
      console.log("Message ID:", info.messageId);

      return NextResponse.json(
        { message: "Application submitted successfully" },
        { status: 200 }
      );
    } catch (emailError: unknown) {
      const errorMessage =
        emailError instanceof Error
          ? emailError.message
          : "Unknown email error";

      // Type guard for errors with code property
      const hasCode = (err: unknown): err is Error & { code: string } => {
        return err instanceof Error && "code" in err;
      };

      const errorCode = hasCode(emailError) ? emailError.code : undefined;

      console.error("Nodemailer error:", errorMessage);
      console.error("Error code:", errorCode);
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
      { error: `Failed to submit application: ${errorMessage}` },
      { status: 500 }
    );
  }
}
