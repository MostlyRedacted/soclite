/**
 * Waitlist domain logic.
 *
 * The client calls `submitWaitlist()` which posts to `/api/waitlist`.
 * The API route (app/api/waitlist/route.ts) currently persists to a local
 * JSON file as a placeholder. To move to Supabase (or any backend) later,
 * only the storage adapter in that route needs to change — this contract
 * and the UI stay the same.
 */

export interface WaitlistPayload {
  email: string;
  /** Optional context we can capture without asking more of the visitor. */
  source?: string;
}

export interface WaitlistResult {
  ok: boolean;
  message: string;
  /** True when the address was already on the list — treated as success in the UI. */
  duplicate?: boolean;
}

// RFC 5322-ish pragmatic email check. Strict enough to catch typos,
// loose enough to accept real-world addresses.
const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function isValidEmail(email: string): boolean {
  const value = email.trim();
  return value.length <= 254 && EMAIL_RE.test(value);
}

export async function submitWaitlist(
  payload: WaitlistPayload,
): Promise<WaitlistResult> {
  const email = payload.email.trim().toLowerCase();

  if (!isValidEmail(email)) {
    return { ok: false, message: "Enter a valid work email address." };
  }

  try {
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: payload.source ?? "landing" }),
    });

    const data = (await res.json().catch(() => null)) as WaitlistResult | null;

    if (!res.ok || !data) {
      return {
        ok: false,
        message: data?.message ?? "Something went wrong. Please try again.",
      };
    }

    return data;
  } catch {
    return {
      ok: false,
      message: "Network error — check your connection and try again.",
    };
  }
}
