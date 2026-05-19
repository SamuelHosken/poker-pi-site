import { Logo } from "@/components/ui/logo";
import { event } from "@/content/event";

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink page-pad py-10 text-center">
      <div className="mb-4 flex justify-center">
        <Logo height={26} />
      </div>
      <div className="mb-1.5 font-mono text-[10px] tracking-[0.18em] uppercase text-gray-mid">
        {event.venue.city} · {event.venue.state} · 23 · 05 · 2026
      </div>
      <div className="font-mono text-[10px] tracking-[0.12em] text-gray-mid">
        © {event.name} · Todos os direitos reservados
      </div>
    </footer>
  );
}
