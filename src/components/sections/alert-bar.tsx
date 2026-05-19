import { Countdown } from "@/components/ui/countdown";
import { event } from "@/content/event";

export function AlertBar() {
  return (
    <div className="relative border-y border-red/40 bg-ink page-pad py-3 text-center font-mono text-[11px] font-medium uppercase text-paper">
      {/* Fine red rules top + bottom create urgency without shouting */}
      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-red/60" />
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-red/60" />

      <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-1 tracking-[0.14em] sm:flex-row sm:gap-2.5">
        <span className="inline-flex items-center gap-2">
          <span aria-hidden className="text-red">●</span>
          <strong className="font-bold text-white">Últimas vagas</strong>
          <span className="text-gray-soft">·</span>
          <span>
            encerra <strong className="font-bold text-white">20/05</strong>
          </span>
        </span>
        <span className="text-gold">
          <Countdown
            deadlineISO={event.registrationDeadline}
            capacity={event.capacity}
            fallback={`— ${event.capacity} vagas`}
          />
        </span>
      </div>
    </div>
  );
}
