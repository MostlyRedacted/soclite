import type { Severity } from "@/components/ui/severity-tag";

export interface Incident {
  id: string;
  title: string;
  source: string;
  severity: Severity;
  score: number; // priority score 0-100
  confidence: number; // AI confidence 0-100
  time: string;
  asset: string;
}

/** Curated, realistic-looking incidents for the triage console. */
export const incidents: Incident[] = [
  {
    id: "INC-4821",
    title: "Impossible travel sign-in for privileged account",
    source: "Microsoft Entra ID",
    severity: "critical",
    score: 96,
    confidence: 94,
    time: "2m ago",
    asset: "admin@acme.io",
  },
  {
    id: "INC-4819",
    title: "Outbound traffic to newly-registered domain",
    source: "Firewall / DNS",
    severity: "high",
    score: 81,
    confidence: 88,
    time: "14m ago",
    asset: "eng-laptop-07",
  },
  {
    id: "INC-4816",
    title: "OAuth app granted mailbox read scope",
    source: "Google Workspace",
    severity: "medium",
    score: 63,
    confidence: 79,
    time: "38m ago",
    asset: "finance-team",
  },
  {
    id: "INC-4810",
    title: "Repeated failed MFA challenges",
    source: "Okta",
    severity: "low",
    score: 34,
    confidence: 72,
    time: "1h ago",
    asset: "sales-vpn",
  },
];

/** The AI triage output shown for the selected incident. */
export const triageSummary = {
  incidentId: "INC-4821",
  headline:
    "A privileged admin signed in from two locations 1,900 km apart within 7 minutes — consistent with a stolen session or credential.",
  signals: [
    "Sign-in from Lisbon, PT at 09:02 UTC on a known device",
    "Sign-in from Frankfurt, DE at 09:09 UTC on an unrecognized device",
    "New inbox rule created to auto-forward finance mail",
  ],
  why: "Correlated across identity, device, and mail-flow events. The forwarding rule is a common post-compromise step, which raises this above a routine travel anomaly.",
  actions: [
    { label: "Revoke active sessions for admin@acme.io", primary: true },
    { label: "Require password reset + re-enroll MFA", primary: false },
    { label: "Remove the auto-forward inbox rule", primary: false },
  ],
};

/** Correlated event timeline for the selected incident. */
export const timeline = [
  { t: "09:02", label: "Sign-in · Lisbon, PT", tone: "low" as Severity },
  { t: "09:09", label: "Sign-in · Frankfurt, DE", tone: "high" as Severity },
  { t: "09:10", label: "New device registered", tone: "medium" as Severity },
  { t: "09:12", label: "Inbox forwarding rule created", tone: "critical" as Severity },
];

/** Rolling event feed lines for the live "signal stream". */
export const streamLines: { text: string; tone: Severity | "info" }[] = [
  { text: "auth.login  user=admin@acme.io  geo=PT  risk=high", tone: "high" },
  { text: "edr.process  host=eng-laptop-07  score=0.81", tone: "high" },
  { text: "dns.query  domain=cdn-update-check.co  age=2d", tone: "medium" },
  { text: "mail.rule  action=forward  target=external", tone: "critical" },
  { text: "iam.grant  app=DocSync  scope=mail.read", tone: "medium" },
  { text: "auth.mfa  result=fail  count=6  user=sales-vpn", tone: "low" },
  { text: "net.flow  bytes_out=48MB  dst=185.14.* ", tone: "high" },
  { text: "edr.quarantine  file=invoice.iso  verdict=blocked", tone: "low" },
];

/** Small metric tiles. */
export const metrics = [
  { label: "Alerts ingested", value: "12,480", delta: "today" },
  { label: "Auto-triaged", value: "97%", delta: "by AI" },
  { label: "Needs review", value: "6", delta: "prioritized" },
  { label: "Mean time to clarity", value: "38s", delta: "median" },
];
