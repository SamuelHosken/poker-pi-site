import { cn } from "@/lib/cn";

type Props = {
  label: string;
  value: React.ReactNode;
  sub?: React.ReactNode;
  featured?: boolean;
  className?: string;
};

export function InfoCard({ label, value, sub, featured, className }: Props) {
  return (
    <div
      className={cn(
        "relative border p-6 transition-colors duration-300",
        featured
          ? "border-gold/70 bg-ink-2"
          : "border-line bg-ink-2 hover:border-gold/40",
        className,
      )}
    >
      {/* Top hairline — single accent line catches the eye without using gradient */}
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-0 top-0 h-px",
          featured ? "bg-gold/70" : "bg-white/10",
        )}
      />

      <div className="mb-2.5 font-mono text-[10px] tracking-[0.18em] uppercase text-gray-mid">
        {label}
      </div>
      <div className="mb-1.5 font-display text-[28px] font-normal leading-[1.05] tracking-[-0.02em] text-white">
        {value}
      </div>
      {sub ? (
        <div className="text-[13px] font-light leading-[1.55] text-gray-soft [&_strong]:font-medium [&_strong]:text-white">
          {sub}
        </div>
      ) : null}
    </div>
  );
}
