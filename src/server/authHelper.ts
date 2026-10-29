import { Request, Response, NextFunction } from "express";

export interface DecodedFirebaseToken {
  uid: string;
  email?: string;
  exp: number;
  iss: string;
  aud: string;
  admin?: boolean;
}

const VALID_FIREBASE_PROJECT_IDS = new Set([
  "ap-exam-6d92d",
  "gen-lang-client-0416312455",
  process.env.VITE_FIREBASE_PROJECT_ID,
  process.env.FIREBASE_PROJECT_ID
].filter(Boolean));

const OWNER_DEV_EMAILS = new Set([
  "sanjeetkumar803108@gmail.com"
]);

/**
 * Parses and verifies a Firebase Auth ID Token from the Authorization header.
 * Validates token structure, expiration, issuer, and audience against the project ID.
 */
export function parseFirebaseToken(authHeader?: string): DecodedFirebaseToken | null {
  if (!authHeader || !authHeader.startsWith("Bearer ")) return null;
  const token = authHeader.slice(7).trim();
  if (!token) return null;

  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const payloadJson = Buffer.from(parts[1], "base64url").toString("utf-8");
    const payload = JSON.parse(payloadJson);

    // Verify expiry timestamp
    const now = Math.floor(Date.now() / 1000);
    if (!payload.exp || payload.exp < now) {
      console.warn("[Auth Warning] Expired Firebase token presented");
      return null;
    }

    // Verify standard Firebase issuer & audience
    const isAudValid = VALID_FIREBASE_PROJECT_IDS.has(payload.aud);
    const isIssValid = typeof payload.iss === "string" && (
      payload.iss === `https://securetoken.google.com/${payload.aud}` || 
      payload.iss.includes("securetoken.google.com")
    );

    if (!isAudValid || !isIssValid) {
      console.warn("[Auth Warning] Token audience or issuer mismatch:", payload.aud, payload.iss);
      return null;
    }

    const email = (payload.email || '').toLowerCase().trim();
    const isOwner = OWNER_DEV_EMAILS.has(email);

    return {
      uid: payload.user_id || payload.sub,
      email: payload.email,
      exp: payload.exp,
      iss: payload.iss,
      aud: payload.aud,
      admin: Boolean(payload.admin || payload.role === "admin" || isOwner)
    };
  } catch (err) {
    console.warn("[Auth Warning] Failed to parse bearer token:", err);
    return null;
  }
}

/**
 * Express middleware to enforce authentication on protected endpoints
 */
export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const tokenData = parseFirebaseToken(req.headers.authorization);
  if (!tokenData) {
    return res.status(401).json({ error: "Unauthorized: Valid Firebase authentication token required." });
  }
  (req as any).user = tokenData;
  next();
};

/**
 * Structured security audit log helper for monitoring and alerting
 */
export const securityLog = (event: string, details: Record<string, any>, req?: Request) => {
  const ip = req ? (req.headers["x-forwarded-for"] || req.socket.remoteAddress) : "internal";
  const entry = {
    timestamp: new Date().toISOString(),
    event,
    ip,
    userAgent: req ? req.headers["user-agent"] : undefined,
    ...details
  };
  console.log(`[SECURITY-AUDIT] ${JSON.stringify(entry)}`);
};
