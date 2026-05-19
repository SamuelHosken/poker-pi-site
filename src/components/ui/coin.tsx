/**
 * Animated poker-chip coin used in the hero.
 *
 * Renders an inline SVG (no external asset required) with the chip styling
 * from the original site. The CSS-driven spin + float animations live in
 * globals.css via the `coin-spin` / `coin-float` keyframes (Tailwind v4 theme).
 *
 * To swap for a video later: drop a `<video>` over this component or
 * conditionally render one — the wrapper sizing is intentionally the same.
 */
export function Coin() {
  return (
    <div className="coin relative h-[clamp(220px,60vw,360px)] w-[clamp(220px,60vw,360px)] md:h-[clamp(320px,40vw,480px)] md:w-[clamp(320px,40vw,480px)] transition-transform duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] group-active:scale-[0.97]">
      <div
        className="absolute inset-0 [perspective:1000px] motion-safe:[animation:coin-float_5s_ease-in-out_infinite]"
        style={{
          filter:
            "drop-shadow(0 30px 40px rgba(0,0,0,0.6)) drop-shadow(0 0 80px rgba(201,169,97,0.2))",
        }}
      >
        <div className="absolute inset-0 motion-safe:[animation:coin-spin_12s_linear_infinite] [transform-style:preserve-3d]">
          <CoinFace />
        </div>
      </div>
    </div>
  );
}

function CoinFace() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="h-full w-full"
      role="img"
      aria-label="Moeda Poker Pi"
    >
      <defs>
        <radialGradient id="coin-grad" cx="50%" cy="40%" r="70%">
          <stop offset="0%" stopColor="#E0BD75" />
          <stop offset="55%" stopColor="#C9A961" />
          <stop offset="100%" stopColor="#7E6634" />
        </radialGradient>
        <radialGradient id="coin-inner" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1A1A1C" />
          <stop offset="100%" stopColor="#0A0A0B" />
        </radialGradient>
      </defs>

      {/* Outer disk */}
      <circle cx="100" cy="100" r="96" fill="url(#coin-grad)" />

      {/* Edge ticks (8) */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4;
        const x1 = 100 + Math.cos(angle) * 88;
        const y1 = 100 + Math.sin(angle) * 88;
        const x2 = 100 + Math.cos(angle) * 96;
        const y2 = 100 + Math.sin(angle) * 96;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#0A0A0B"
            strokeWidth="10"
            strokeLinecap="butt"
          />
        );
      })}

      {/* Inner ring */}
      <circle cx="100" cy="100" r="74" fill="url(#coin-inner)" stroke="#C9A961" strokeWidth="1.5" />

      {/* π glyph */}
      <text
        x="100"
        y="128"
        textAnchor="middle"
        fontFamily="var(--font-display), Georgia, serif"
        fontStyle="italic"
        fontSize="92"
        fontWeight="300"
        fill="#E0BD75"
      >
        π
      </text>

      {/* highlight gloss */}
      <ellipse
        cx="85"
        cy="55"
        rx="44"
        ry="14"
        fill="white"
        opacity="0.10"
        transform="rotate(-20 85 55)"
      />
    </svg>
  );
}
