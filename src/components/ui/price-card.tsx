import type { Structure } from "@/content/event";
import { cn } from "@/lib/cn";

export function PriceCard({ structure }: { structure: Structure }) {
  return (
    <div
      className={cn(
        "relative border bg-ink-2 px-7 py-8 transition-colors duration-300",
        structure.featured
          ? "border-gold/70"
          : "border-line hover:border-gold/40",
      )}
    >
      <span
        aria-hidden
        className={cn(
          "absolute inset-x-0 top-0 h-px",
          structure.featured ? "bg-gold/70" : "bg-white/10",
        )}
      />

      {structure.featured ? (
        <span className="absolute -top-2.5 left-7 bg-gold px-2.5 py-1 font-mono text-[10px] font-semibold tracking-[0.14em] text-ink">
          MAIS POPULAR
        </span>
      ) : null}

      <div className="mb-5 font-mono text-[11px] tracking-[0.18em] uppercase text-gray-soft">
        {structure.name}
      </div>

      <div className="mb-1 flex items-baseline font-display font-light leading-none tracking-[-0.03em] text-white">
        <span className="mr-1.5 text-[18px] text-gray-mid">R$</span>
        <span className="text-[56px]">{structure.price}</span>
      </div>

      <div className="mb-7 font-mono text-[10px] tracking-[0.14em] uppercase text-gray-mid">
        {structure.unit}
      </div>

      <ul className="space-y-0">
        {structure.includes.map((item, i) => (
          <li
            key={i}
            className="grid grid-cols-[28px_1fr] items-center gap-3 border-b border-line/70 py-3 text-[14px] font-light text-paper last:border-b-0"
          >
            <span className="font-mono text-[10px] tracking-[0.05em] text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
