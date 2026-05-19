import { MapPin } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { InfoCard } from "@/components/ui/info-card";
import { Timeline } from "@/components/ui/timeline";
import { event } from "@/content/event";

export function WhenWhere() {
  return (
    <section
      id="quando"
      aria-labelledby="quando-title"
      className="border-y border-line bg-ink-2 page-pad py-[72px]"
    >
      <SectionHeader
        num="02"
        label="Quando · Onde"
        title={
          <span id="quando-title">
            Sábado,{" "}
            <em className="font-display not-italic italic text-gold" style={{ fontStyle: "italic" }}>
              23 de maio
            </em>
            .
          </span>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Reveal>
          <InfoCard
            label="Data"
            value={
              <>
                <em className="font-display not-italic italic text-gold" style={{ fontStyle: "italic" }}>
                  23
                </em>
                /05/26
              </>
            }
            sub={event.weekday}
          />
        </Reveal>
        <Reveal delay={0.05}>
          <InfoCard
            label="Vagas"
            value={
              <>
                {event.capacity}{" "}
                <em className="font-display not-italic italic text-gold" style={{ fontStyle: "italic" }}>
                  jogadores
                </em>
              </>
            }
            sub="Por ordem de confirmação"
          />
        </Reveal>
        <Reveal delay={0.1} className="md:col-span-2">
          <InfoCard
            featured
            label="Local"
            value={
              <>
                Condomínio{" "}
                <em className="font-display not-italic italic text-gold" style={{ fontStyle: "italic" }}>
                  Solar da Serra
                </em>
              </>
            }
            sub={
              <>
                <span className="block">
                  Quadra 1, Casa 14 — <strong>{event.venue.neighborhood}</strong>
                  , {event.venue.city} · {event.venue.state}
                </span>
                <a
                  href={event.venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.12em] uppercase text-gold underline-offset-4 transition-all hover:text-gold-bright hover:underline"
                >
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1.8} />
                  Ver no Google Maps
                </a>
              </>
            }
          />
        </Reveal>
      </div>

      {/* Timeline */}
      <Reveal>
        <div className="mt-10 border-t border-line pt-8">
          <div className="mb-5 font-mono text-[10px] tracking-[0.22em] uppercase text-gold">
            Cronograma
          </div>
          <Timeline items={event.timeline} />
        </div>
      </Reveal>
    </section>
  );
}
