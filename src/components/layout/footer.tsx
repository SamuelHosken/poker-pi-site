import { ChipLogo } from "@/components/ui/chip-logo";
import { event } from "@/content/event";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink page-pad py-8 text-center">
      <div className="mb-3.5 inline-flex items-center gap-2.5 font-display text-[18px] font-normal text-white">
        POKERPI
        <ChipLogo size={22} />
      </div>
      <div className="mb-1.5 font-mono text-[10px] tracking-[0.15em] uppercase text-gray-mid">
        {event.venue.city} · {event.venue.state} · 2026
      </div>
      <div className="font-mono text-[10px] tracking-[0.1em] text-gray-mid">
        © {event.name} · Todos os direitos reservados
      </div>
    </footer>
  );
}
