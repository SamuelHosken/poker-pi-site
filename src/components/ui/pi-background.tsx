import { buildPiBackground } from "@/lib/pi-digits";

/**
 * Ambient π-digits texture rendered at low opacity behind the hero coin.
 * Computed at build time (server component) — zero client-side JS.
 */
export function PiBackground() {
  const text = buildPiBackground(30);
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 select-none overflow-hidden break-all px-4 py-6 font-mono text-[10px] leading-[1.7] text-paper opacity-[0.04]"
    >
      {text}
    </div>
  );
}
