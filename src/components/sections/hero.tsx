"use client";

import { useVideoModal } from "@/components/providers/video-modal-provider";
import { event } from "@/content/event";

export function Hero() {
  const { openModal } = useVideoModal();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ink page-pad pt-28 pb-0 md:pt-24"
    >
      {/* ============ MOBILE-ONLY BG VIDEO + OVERLAYS ============ */}
      <video
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover md:hidden"
        src="/coin/coin-spin.mp4"
        poster="/coin/coin-poster.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-hidden
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,10,11,0.78) 0%, rgba(10,10,11,0.15) 25%, rgba(10,10,11,0) 45%, rgba(10,10,11,0) 60%, rgba(10,10,11,0.55) 85%, rgba(10,10,11,0.95) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 md:hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at center, transparent 40%, rgba(10,10,11,0.55) 85%, rgba(10,10,11,0.85) 100%)",
        }}
      />

      {/* ============ MAIN ZONE — stacked on mobile, 2-col on desktop ============ */}
      <div className="md:flex-1 md:grid md:grid-cols-[1.15fr_1fr] md:items-center md:gap-12 lg:gap-20">
        {/* TEXT COLUMN */}
        <div className="relative z-10 flex-none md:py-10">
          <div className="mb-6 inline-flex items-center gap-2 border-b border-line/70 pb-3 font-mono text-[10px] tracking-[0.22em] uppercase text-gold before:h-px before:w-6 before:bg-gold before:content-['']">
            {event.dateDisplay} — {event.venue.neighborhood}
          </div>

          <h1
            id="hero-title"
            className="font-display font-light tracking-[-0.035em] text-white"
            style={{ textShadow: "0 2px 28px rgba(0,0,0,0.6)" }}
          >
            <span className="block text-[clamp(44px,12vw,84px)] leading-[0.95] md:text-[clamp(56px,6.5vw,104px)]">
              O poker
            </span>
            <span className="block text-[clamp(44px,12vw,84px)] leading-[0.95] md:text-[clamp(56px,6.5vw,104px)]">
              mais{" "}
              <em
                className="font-display not-italic italic font-normal text-gold"
                style={{ fontStyle: "italic" }}
              >
                irado
              </em>
              <span className="text-white">.</span>
            </span>
            <span className="mt-5 block font-display text-[clamp(15px,3.6vw,22px)] font-light italic leading-[1.3] text-gray-soft md:mt-7 md:text-[clamp(18px,1.5vw,26px)]">
              da sua vida<span className="text-red">.</span>
            </span>
          </h1>

          {/* DESKTOP CTA — inline below title */}
          <button
            type="button"
            onClick={openModal}
            aria-label="Assistir o convite em vídeo"
            className="group mt-10 hidden cursor-pointer items-center gap-3 border border-line bg-ink-2 px-6 py-3.5 font-mono text-[11px] tracking-[0.28em] uppercase text-paper transition-all duration-300 hover:border-gold hover:bg-gold/10 hover:text-white md:inline-flex"
          >
            <span
              aria-hidden
              className="h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-gold"
            />
            Assistir o convite
            <span className="text-gold transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>

        {/* COIN COLUMN — desktop only (mobile shows it as bg above) */}
        <button
          type="button"
          onClick={openModal}
          aria-label="Assistir o convite em vídeo"
          className="group relative z-10 mx-auto hidden cursor-pointer overflow-hidden border border-line/50 bg-ink transition-all duration-300 hover:border-gold/60 md:block"
          style={{ aspectRatio: "2488 / 3332", maxHeight: "62vh", width: "100%" }}
        >
          <video
            className="block h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            src="/coin/coin-spin.mp4"
            poster="/coin/coin-poster.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden
          />
          {/* Subtle hairline at top of the frame for editorial polish */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/15"
          />
        </button>
      </div>

      {/* ============ MOBILE-ONLY CTA — floating between coin bg and meta ============ */}
      <button
        type="button"
        onClick={openModal}
        aria-label="Assistir o convite em vídeo"
        className="group relative z-10 flex flex-1 cursor-pointer items-end justify-center bg-transparent pb-20 md:hidden"
      >
        <span className="inline-flex items-center gap-3 rounded-full border border-line/70 bg-ink/45 px-6 py-3.5 font-mono text-[11px] tracking-[0.28em] uppercase text-paper backdrop-blur-md transition-all duration-300 motion-safe:[animation:label-pulse_3s_ease-in-out_infinite] group-hover:border-gold group-hover:bg-gold/15 group-hover:text-white group-hover:[animation:none]">
          <span
            aria-hidden
            className="h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-gold"
          />
          Assistir o convite
          <span className="text-gold transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </span>
      </button>

      {/* ============ META STRIP — shared mobile & desktop ============ */}
      <div className="relative z-10 grid flex-none grid-cols-2 gap-x-6 gap-y-5 border-t border-line/50 py-6 md:grid-cols-4 md:gap-6 md:py-7">
        <MetaItem label="Data">
          <em
            className="font-display not-italic italic font-normal text-gold"
            style={{ fontStyle: "italic" }}
          >
            23
          </em>
          /05 · Sáb
        </MetaItem>
        <MetaItem label="Torneio">17h</MetaItem>
        <MetaItem label="Vagas">
          <em
            className="font-display not-italic italic font-normal text-gold"
            style={{ fontStyle: "italic" }}
          >
            Apenas {event.capacity}
          </em>
        </MetaItem>
        <MetaItem label="Local">Jd. Botânico</MetaItem>
      </div>
    </section>
  );
}

function MetaItem({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`font-mono ${className ?? ""}`}>
      <span className="mb-2 block text-[9px] tracking-[0.18em] uppercase text-gray-mid">
        {label}
      </span>
      <span className="font-display text-[18px] font-normal leading-[1.1] tracking-[-0.01em] text-white">
        {children}
      </span>
    </div>
  );
}
