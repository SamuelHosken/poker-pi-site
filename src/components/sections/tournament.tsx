import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { event } from "@/content/event";
import { renderInline } from "@/lib/format";

export function Tournament() {
  return (
    <section
      id="torneio"
      aria-labelledby="torneio-title"
      className="border-y border-line bg-ink-2 page-pad py-[72px]"
    >
      <SectionHeader
        num="04"
        label="Torneio · Premiação"
        title={
          <span id="torneio-title">
            O{" "}
            <em className="font-display not-italic italic text-gold" style={{ fontStyle: "italic" }}>
              torneio
            </em>
            .
          </span>
        }
      />

      <div className="mb-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Reveal>
          <MetaTile
            label="Buy-in"
            value={event.tournament.buyIn}
            sub={event.tournament.buyInNote}
          />
        </Reveal>
        <Reveal delay={0.05}>
          <MetaTile
            label="Re-buy"
            value={event.tournament.reBuy}
            sub={event.tournament.reBuyNote}
          />
        </Reveal>
      </div>

      {/* Prize pool */}
      <Reveal>
        <div className="relative mb-6 border border-gold/70 bg-ink px-6 py-8">
          <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gold/70" />
          <div className="mb-6 text-center font-mono text-[11px] tracking-[0.18em] uppercase text-gold">
            Premiação mínima garantida
          </div>

          {event.tournament.prizes.map((p, i) => (
            <div
              key={i}
              className="grid grid-cols-[40px_1fr_auto] items-center gap-4 border-b border-line py-3.5 last:border-b-0"
            >
              <span className="font-display text-[22px] font-normal italic text-gold">
                {p.medal}
              </span>
              <span className="font-display text-[16px] font-normal text-white">
                {p.place}
                {p.extra ? (
                  <span className="mt-0.5 block font-mono text-[10px] tracking-[0.12em] uppercase text-gold">
                    {p.extra}
                  </span>
                ) : null}
              </span>
              <span className="font-display text-[24px] font-normal tracking-[-0.02em] text-white">
                <span className="mr-0.5 align-top text-[13px] text-gray-mid">R$</span>
                {p.amount}
              </span>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Rules */}
      <Reveal>
        <div className="mt-8">
          <div className="mb-4 flex items-baseline gap-3 border-t border-line pt-5">
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-gold">
              Regras
            </span>
            <span aria-hidden className="h-px flex-1 bg-line" />
            <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-red">
              Importante
            </span>
          </div>

          <ol className="space-y-1">
            {event.tournament.rules.map((rule, i) => (
              <li
                key={i}
                className="grid grid-cols-[28px_1fr] items-baseline gap-3 border-b border-line/60 py-3 text-[14px] font-light leading-[1.55] text-paper last:border-b-0"
              >
                <span className="font-mono text-[10px] tracking-[0.05em] text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{renderInline(rule)}</span>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}

function MetaTile({
  label,
  value,
  sub,
}: {
  label: string;
  value: number;
  sub: string;
}) {
  return (
    <div className="relative border border-line bg-ink-2 p-6">
      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="mb-3 font-mono text-[10px] tracking-[0.18em] uppercase text-gray-mid">
        {label}
      </div>
      <div className="flex items-baseline font-display font-light leading-none tracking-[-0.02em] text-white">
        <span className="mr-1 text-[15px] text-gray-mid">R$</span>
        <span className="text-[36px]">{value}</span>
      </div>
      <div className="mt-3 text-[12px] font-light leading-[1.5] text-gray-soft">
        {sub}
      </div>
    </div>
  );
}
