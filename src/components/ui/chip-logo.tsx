/**
 * SVG poker-chip logo with a π glyph. Replaces the brittle CSS-only chip.
 */
export function ChipLogo({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      role="presentation"
      className="shrink-0"
    >
      <circle cx="16" cy="16" r="13.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {/* edge ticks */}
      <rect x="15" y="0.5" width="2" height="4" fill="currentColor" />
      <rect x="15" y="27.5" width="2" height="4" fill="currentColor" />
      <rect x="0.5" y="15" width="4" height="2" fill="currentColor" />
      <rect x="27.5" y="15" width="4" height="2" fill="currentColor" />
      {/* π glyph */}
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fontFamily="var(--font-display), Georgia, serif"
        fontStyle="italic"
        fontSize="16"
        fontWeight="400"
        fill="currentColor"
      >
        π
      </text>
    </svg>
  );
}
