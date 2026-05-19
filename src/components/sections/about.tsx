import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { event } from "@/content/event";
import { renderInline } from "@/lib/format";

export function About() {
  return (
    <section id="sobre" className="page-pad py-[72px]" aria-labelledby="sobre-title">
      <SectionHeader
        num="01"
        label="O que vai rolar"
        title={
          <>
            <span id="sobre-title">
              Não é só poker.
              <br />
              É um{" "}
              <em className="font-display not-italic italic text-gold" style={{ fontStyle: "italic" }}>
                rolê
              </em>
              .
            </span>
          </>
        }
      />

      <div className="lg:grid lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <Reveal>
          <blockquote
            className="mb-7 font-display text-[22px] font-light italic leading-[1.25] text-white lg:mb-0 lg:text-[32px] before:mb-7 before:block before:font-display before:text-[60px] before:leading-none before:text-red before:content-['\201C']"
          >
            {event.about.quote}
          </blockquote>
        </Reveal>

        <Reveal>
          <div className="space-y-3.5">
            {event.about.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-[15px] font-light leading-[1.7] text-paper [&_strong]:font-medium [&_strong]:text-white [&_em]:font-display [&_em]:italic [&_em]:text-gold"
              >
                {renderInline(p)}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
