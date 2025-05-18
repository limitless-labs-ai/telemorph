import { NextResponse } from "next/server";

export async function GET() {
  // Check if the admin token is configured
  const isConfigured = !!process.env.ADMIN_DEV_TOKEN;

  // Return the configuration status without revealing the actual token
  return NextResponse.json({
    isConfigured,
  });
}
