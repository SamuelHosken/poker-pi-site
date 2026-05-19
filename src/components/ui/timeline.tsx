import { cn } from "@/lib/cn";
import type { TimelineItem } from "@/content/event";

type Props = {
  items: readonly TimelineItem[];
};

export function Timeline({ items }: Props) {
  return (
    <ol className="relative">
      {/* Vertical connector line behind the markers */}
      <span
        aria-hidden
        className="absolute left-[7px] top-3 bottom-3 w-px bg-line"
      />

      {items.map((item, i) => (
        <li
          key={i}
          className="relative grid grid-cols-[36px_64px_1fr] items-baseline gap-3 py-5 md:gap-4"
        >
          {/* Marker (filled gold for highlight, hollow otherwise) */}
          <span
            aria-hidden
            className={cn(
              "relative col-start-1 row-start-1 mt-2 inline-block h-[15px] w-[15px] rounded-full border",
              item.highlight
                ? "border-gold bg-gold"
                : "border-line bg-ink",
            )}
          />

          <span className="col-start-2 row-start-1 font-mono text-[13px] font-medium tracking-[0.05em] text-gold">
            {item.time}
          </span>

          <div className="col-start-3 row-start-1 font-display text-[18px] font-normal leading-[1.2] tracking-[-0.01em] text-white">
            {item.highlight ? (
              <em
                className="font-display not-italic italic font-normal text-gold"
                style={{ fontStyle: "italic" }}
              >
                {item.title}
              </em>
            ) : (
              item.title
            )}
            {item.subtitle ? (
              <span className="mt-1 block font-sans text-[13px] font-light text-gray-soft">
                {item.subtitle}
              </span>
            ) : null}
            {item.warn ? (
              <span className="mt-1 block font-mono text-[11px] tracking-[0.05em] text-red">
                {item.warn}
              </span>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
