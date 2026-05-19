"use client";

import Link from "next/link";
import { ArrowRight, Copy } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { event } from "@/content/event";

export function FinalCta() {
  const { copied, copy } = useCopyToClipboard();

  return (
    <section className="page-pad py-20 text-center md:py-[100px]">
      <Reveal>
        <h2 className="mb-5 font-display text-[clamp(36px,11vw,60px)] font-light leading-[0.95] tracking-[-0.03em] text-white">
          Não é jogo.
          <br />É{" "}
          <em
            className="font-display not-italic italic text-gold"
            style={{ fontStyle: "italic" }}
          >
            decisão
          </em>
          .
        </h2>
        <p className="mx-auto mb-8 max-w-[340px] text-[14px] font-light leading-[1.6] text-gray-soft">
          {event.capacity} vagas, por ordem de pagamento. Entra no grupo do
          WhatsApp e manda o comprovante.
        </p>

        <div className="mx-auto flex max-w-[340px] flex-col gap-3">
          {/* Primary CTA — WhatsApp group */}
          <a
            href={event.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 bg-gold px-6 py-4 font-sans text-[14px] font-medium tracking-[0.04em] uppercase text-ink no-underline transition-all duration-[250ms] hover:-translate-y-0.5 hover:bg-white"
          >
            Entrar no grupo do WhatsApp
            <ArrowRight className="h-4 w-4" strokeWidth={2} />
          </a>

          {/* Secondary — copy PIX inline */}
          <button
            type="button"
            onClick={() => copy(event.contact.pixKey)}
            className="inline-flex w-full items-center justify-center gap-2 border border-line bg-transparent px-6 py-3.5 font-mono text-[12px] tracking-[0.08em] text-paper transition-colors hover:border-gold hover:text-white"
            aria-label="Copiar chave PIX"
          >
            <Copy className="h-3.5 w-3.5" strokeWidth={1.8} />
            {copied ? "Copiado ✓" : `Copiar PIX: ${event.contact.pixKey}`}
          </button>
        </div>

        <div className="mt-7 font-mono text-[11px] tracking-[0.15em] uppercase text-red">
          Inscrições até {event.registrationDeadlineLabel}
        </div>

        <Link
          href="#inscricao"
          className="mt-3 inline-block font-mono text-[10px] tracking-[0.12em] uppercase text-gray-mid underline-offset-4 transition-colors hover:text-gold hover:underline"
        >
          Ver os 3 passos completos
        </Link>
      </Reveal>
    </section>
  );
}
