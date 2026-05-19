import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { CopyableText } from "@/components/ui/copyable-text";
import { event } from "@/content/event";

// Inline WhatsApp glyph — recognizable enough at 16px without a heavy lib import.
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488" />
    </svg>
  );
}

export function HowToRegister() {
  return (
    <section
      id="inscricao"
      aria-labelledby="inscricao-title"
      className="page-pad py-[72px]"
    >
      <SectionHeader
        num="05"
        label="Como garantir sua vaga"
        title={
          <span id="inscricao-title">
            Três{" "}
            <em
              className="font-display not-italic italic text-gold"
              style={{ fontStyle: "italic" }}
            >
              passos
            </em>
            .
            <br />
            Vaga garantida.
          </span>
        }
      />

      <Reveal>
        <p className="mb-7 text-[14px] font-light leading-[1.6] text-gray-soft">
          Apenas{" "}
          <strong className="font-medium text-white">
            {event.capacity} vagas
          </strong>{" "}
          disponíveis, por ordem de confirmação de pagamento. Prazo final:{" "}
          <strong className="font-medium text-red">
            {event.registrationDeadlineLabel}
          </strong>
          .
        </p>
      </Reveal>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Step 01 */}
        <Reveal>
          <Step num="01" title="Escolha sua estrutura">
            Decida entre{" "}
            <strong className="font-medium text-white">R$ 45</strong> (básica)
            ou <strong className="font-medium text-white">R$ 75</strong> (open
            bar) — esse valor cobre apenas jantar e bebidas, separado do
            buy-in.
          </Step>
        </Reveal>

        {/* Step 02 */}
        <Reveal delay={0.05}>
          <Step num="02" title="Faça o PIX">
            Pague o valor da estrutura via PIX. Toque na chave para copiar:
            <br />
            <CopyableText
              value={event.contact.pixKey}
              label="Copiar chave PIX"
            />
          </Step>
        </Reveal>

        {/* Step 03 */}
        <Reveal delay={0.1}>
          <Step num="03" title="Entre no grupo">
            Entre no{" "}
            <strong className="font-medium text-white">
              grupo do WhatsApp
            </strong>{" "}
            e mande o comprovante. Após a confirmação, sua vaga está garantida.
            <br />
            <a
              href={event.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-gold px-5 py-3 font-sans text-[13px] font-semibold tracking-[0.04em] uppercase text-ink no-underline transition-all duration-[250ms] hover:-translate-y-0.5 hover:bg-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Entrar no grupo
            </a>
          </Step>
        </Reveal>
      </div>
    </section>
  );
}

function Step({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative grid h-full grid-cols-[48px_1fr] items-start gap-4 border border-line bg-ink-2 p-6">
      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="font-display text-[44px] font-light italic leading-[0.9] text-gold">
        {num}
      </div>
      <div>
        <div className="mb-2 font-display text-[20px] font-normal tracking-[-0.01em] text-white">
          {title}
        </div>
        <div className="text-[14px] font-light leading-[1.55] text-gray-soft">
          {children}
        </div>
      </div>
    </div>
  );
}
