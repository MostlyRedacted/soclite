import { Logo } from "@/components/ui/logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "#how" },
      { label: "Features", href: "#features" },
      { label: "Console preview", href: "#preview" },
      { label: "Who it's for", href: "#audience" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "mailto:hello@soclite.ai" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-base/40">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-ink-muted">
              Security operations without the overhead. Understand your alerts,
              prioritize real threats, and respond faster.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.02] px-3 py-1.5 font-mono text-[11px] text-ink-faint">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-low" />
              All systems operational
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-[13.5px] text-ink-muted transition-colors hover:text-ink"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="text-[12.5px] text-ink-faint">
            © {new Date().getFullYear()} SocLite.ai. Your lightweight AI SOC.
          </p>
          <p className="font-mono text-[11px] text-ink-faint">
            Built for teams without a security team.
          </p>
        </div>
      </div>
    </footer>
  );
}
