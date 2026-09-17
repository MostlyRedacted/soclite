"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { IconArrowRight, IconCheck } from "@/components/ui/icons";
import { isValidEmail, submitWaitlist } from "@/lib/waitlist";

type Status = "idle" | "loading" | "success" | "error";

export function WaitlistForm({
  source = "landing",
  className,
}: {
  source?: string;
  className?: string;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState(false);

  const invalid = touched && email.length > 0 && !isValidEmail(email);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched(true);

    if (!isValidEmail(email)) {
      setStatus("error");
      setMessage("Enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    const result = await submitWaitlist({ email, source });

    if (result.ok) {
      setStatus("success");
      setMessage(result.message);
    } else {
      setStatus("error");
      setMessage(result.message);
    }
  }

  return (
    <div className={cn("w-full", className)}>
      <AnimatePresence mode="wait" initial={false}>
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-center gap-3 rounded-2xl border border-low/30 bg-low/[0.06] px-4 py-4"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-low/15 text-low">
              <IconCheck className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[15px] font-medium text-ink">
                You&apos;re on the list.
              </p>
              <p className="text-[13px] text-ink-muted">{message}</p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            noValidate
            className="flex flex-col gap-3 sm:flex-row"
          >
            <div className="relative flex-1">
              <input
                type="email"
                name="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@company.com"
                aria-label="Work email"
                aria-invalid={invalid || status === "error"}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                onBlur={() => setTouched(true)}
                disabled={status === "loading"}
                className={cn(
                  "h-12 w-full rounded-full border bg-white/[0.03] px-5 text-[15px] text-ink placeholder:text-ink-faint transition-colors focus:outline-none focus:ring-2 focus:ring-cyan/50",
                  invalid || status === "error"
                    ? "border-critical/50"
                    : "border-line focus:border-cyan/40",
                )}
              />
            </div>
            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              className="group shrink-0"
            >
              {status === "loading" ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#03121a]/40 border-t-[#03121a]" />
                  Joining…
                </>
              ) : (
                <>
                  Join the Waitlist
                  <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>

      <div className="mt-2.5 min-h-[20px] px-1">
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[13px] text-critical"
          >
            {message}
          </motion.p>
        )}
        {(invalid && status !== "error") && (
          <p className="text-[13px] text-critical/90">
            That doesn&apos;t look like a valid email.
          </p>
        )}
      </div>
    </div>
  );
}
