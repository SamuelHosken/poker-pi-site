import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";

type Props = {
  num: string;
  label: string;
  title: React.ReactNode;
  className?: string;
};

export function SectionHeader({ num, label, title, className }: Props) {
  return (
    <Reveal>
      <header className={cn("mb-9 border-b border-line pb-4", className)}>
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[11px] tracking-[0.12em] text-gold">
            {num}
          </span>
          <span className="font-mono text-[11px] tracking-[0.12em] uppercase text-gray-mid">
            {label}
          </span>
        </div>
        <h2 className="mt-5 font-display text-[clamp(34px,9vw,56px)] font-light leading-none tracking-[-0.025em] text-white md:text-[clamp(56px,7vw,88px)]">
          {title}
        </h2>
      </header>
    </Reveal>
  );
}
