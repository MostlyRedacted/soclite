import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

/**
 * Waitlist capture endpoint.
 *
 * STORAGE ADAPTER
 * ---------------
 * This uses a local JSON file as a zero-config placeholder so the form
 * works end-to-end out of the box. Swap `saveEntry` / `hasEntry` for a
 * real backend when ready. Example (Supabase):
 *
 *   import { createClient } from "@supabase/supabase-js";
 *   const supabase = createClient(URL, SERVICE_ROLE_KEY);
 *   await supabase.from("waitlist").insert({ email, source });
 *
 * The request/response contract does not change.
 */

const DATA_DIR = path.join(process.cwd(), "data");
const STORE = path.join(DATA_DIR, "waitlist.json");

const EMAIL_RE =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

interface Entry {
  email: string;
  source: string;
  createdAt: string;
}

async function readAll(): Promise<Entry[]> {
  try {
    const raw = await fs.readFile(STORE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Entry[]) : [];
  } catch {
    return [];
  }
}

async function saveEntry(entry: Entry): Promise<void> {
  const all = await readAll();
  all.push(entry);
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(STORE, JSON.stringify(all, null, 2), "utf8");
}

async function hasEntry(email: string): Promise<boolean> {
  const all = await readAll();
  return all.some((e) => e.email === email);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const email = String((body as { email?: unknown })?.email ?? "")
    .trim()
    .toLowerCase();
  const source = String((body as { source?: unknown })?.source ?? "landing").slice(
    0,
    64,
  );

  if (!email || email.length > 254 || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { ok: false, message: "Enter a valid email address." },
      { status: 422 },
    );
  }

  try {
    if (await hasEntry(email)) {
      return NextResponse.json({
        ok: true,
        duplicate: true,
        message: "You're already on the list — we'll be in touch.",
      });
    }

    await saveEntry({ email, source, createdAt: new Date().toISOString() });

    return NextResponse.json({
      ok: true,
      message: "You're on the waitlist.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Could not save your request. Please try again." },
      { status: 500 },
    );
  }
}
