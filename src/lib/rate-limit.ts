// Simple in-memory rate limiter
// For production, consider using Redis or a database

interface RateLimitEntry {
  timestamp: number;
  count: number;
}

const rateLimit = new Map<string, RateLimitEntry>();

// Clean up old entries every 10 minutes
setInterval(() => {
  const now = Date.now();
  const tenMinutesAgo = now - 10 * 60 * 1000;

  for (const [key, entry] of rateLimit.entries()) {
    if (entry.timestamp < tenMinutesAgo) {
      rateLimit.delete(key);
    }
  }
}, 10 * 60 * 1000);

export function checkRateLimit(
  identifier: string,
  windowMs: number = 2 * 60 * 1000
): {
  allowed: boolean;
  timeUntilReset: number;
  message?: string;
} {
  const now = Date.now();
  const entry = rateLimit.get(identifier);

  if (!entry) {
    // First request from this identifier
    rateLimit.set(identifier, { timestamp: now, count: 1 });
    return { allowed: true, timeUntilReset: 0 };
  }

  const timeSinceLastRequest = now - entry.timestamp;

  if (timeSinceLastRequest >= windowMs) {
    // Window has passed, reset the counter
    rateLimit.set(identifier, { timestamp: now, count: 1 });
    return { allowed: true, timeUntilReset: 0 };
  }

  // Still within the rate limit window
  const timeUntilReset = windowMs - timeSinceLastRequest;
  const minutesLeft = Math.ceil(timeUntilReset / (60 * 1000));
  const secondsLeft = Math.ceil(timeUntilReset / 1000);

  return {
    allowed: false,
    timeUntilReset,
    message: `Please wait ${
      minutesLeft > 1 ? `${minutesLeft} minutes` : `${secondsLeft} seconds`
    } before sending another message.`,
  };
}

export function getClientIP(request: Request): string {
  // Try to get the real IP from various headers
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");
  const cfConnectingIP = request.headers.get("cf-connecting-ip");

  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  if (realIP) {
    return realIP;
  }

  if (cfConnectingIP) {
    return cfConnectingIP;
  }

  // Fallback to a default identifier
  return "unknown";
}
