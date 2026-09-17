import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";
import { cn } from "@/lib/cn";

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <div className={cn(align === "center" && "flex justify-center")}>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-pretty text-[16px] leading-relaxed text-ink-muted">
          {description}
        </p>
      )}
    </Reveal>
  );
}
