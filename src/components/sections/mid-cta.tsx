import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function MidCta() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-ink-2 page-pad py-24 text-center md:py-28">
      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display font-light italic leading-none text-ink opacity-60"
        style={{ fontSize: "clamp(180px, 55vw, 400px)" }}
      >
        π
      </span>

      <Reveal>
        <div className="relative z-10 mx-auto max-w-md">
          <h2 className="mb-8 font-display text-[clamp(34px,9vw,52px)] font-light leading-[1.05] tracking-[-0.025em] text-white">
            Quando{" "}
            <em
              className="font-display not-italic italic text-gold"
              style={{ fontStyle: "italic" }}
            >
              encerrar
            </em>
            ,<br />
            encerrou.
          </h2>

          <Link
            href="#inscricao"
            className="inline-flex items-center gap-2 bg-gold px-6 py-3.5 font-sans text-[13px] font-semibold tracking-[0.04em] uppercase text-ink no-underline transition-all hover:-translate-y-0.5 hover:bg-white"
          >
            Quero minha vaga
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
