import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { PriceCard } from "@/components/ui/price-card";
import { event } from "@/content/event";

export function Structure() {
  return (
    <section
      id="estrutura"
      aria-labelledby="estrutura-title"
      className="page-pad py-[72px]"
    >
      <SectionHeader
        num="03"
        label="Jantar · Bebidas · Estrutura"
        title={
          <span id="estrutura-title">
            Escolha a sua
            <br />
            <em className="font-display not-italic italic text-gold" style={{ fontStyle: "italic" }}>
              estrutura
            </em>
            .
          </span>
        }
      />

      <Reveal>
        <p className="mb-7 text-[14px] font-light leading-[1.6] text-gray-soft">
          Os valores abaixo são exclusivamente para custear{" "}
          <strong className="font-medium text-white">
            jantar, bebidas e estrutura do evento
          </strong>
          . Não têm relação com poker ou premiação.
        </p>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-2">
        {event.structures.map((structure, i) => (
          <Reveal key={structure.id} delay={i * 0.05}>
            <PriceCard structure={structure} />
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-8">
          <div className="mb-4 block font-mono text-[11px] tracking-[0.12em] uppercase text-gray-mid">
            Cardápio
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {event.menu.map((item) => (
              <div
                key={item}
                className="border border-line bg-ink-2 px-4 py-5 text-center transition-colors hover:border-gold"
              >
                <div className="font-display text-[16px] font-normal leading-[1.2] text-white">
                  {item.split(" de ").length > 1 ? (
                    <>
                      {item.split(" de ")[0]}
                      <br />
                      de {item.split(" de ")[1]}
                    </>
                  ) : item.split(" à ").length > 1 ? (
                    <>
                      {item.split(" à ")[0]}
                      <br />à {item.split(" à ")[1]}
                    </>
                  ) : (
                    item
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
