import { Logo } from "@/components/ui/logo";

/**
 * Shown only on viewports >= md (desktop / tablet landscape).
 * The site experience was designed for the phone — on bigger screens we
 * gracefully redirect users back to their pocket.
 */
export function DesktopMessage() {
  return (
    <div className="hidden min-h-svh flex-col items-center justify-center bg-ink page-pad text-center md:flex">
      <Logo height={36} />

      <h1
        className="mt-14 max-w-3xl font-display text-[clamp(56px,6vw,96px)] font-light leading-[0.95] tracking-[-0.035em] text-white"
        style={{ textShadow: "0 2px 28px rgba(0,0,0,0.6)" }}
      >
        Esta página é{" "}
        <em
          className="font-display not-italic italic text-gold"
          style={{ fontStyle: "italic" }}
        >
          para ler no celular
        </em>
        <span className="text-red">.</span>
      </h1>

      <p className="mt-8 max-w-md font-display text-[clamp(18px,1.6vw,22px)] font-light italic leading-[1.5] text-gray-soft">
        Abra <span className="text-paper">pokerpi.com.br</span> no seu telefone
        — todo o convite foi desenhado para a tela pequena.
      </p>

      <div className="mt-20 inline-flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] uppercase text-gray-mid">
        <span aria-hidden className="h-px w-8 bg-line" />
        Brasília · DF · 23 · 05 · 2026
        <span aria-hidden className="h-px w-8 bg-line" />
      </div>
    </div>
  );
}
