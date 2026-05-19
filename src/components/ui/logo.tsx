import Image from "next/image";

const LOGO_RATIO = 1340 / 368; // ~3.64

type Props = {
  height?: number;
  priority?: boolean;
  className?: string;
};

/**
 * Brand wordmark. White on transparent — drops cleanly on the ink background.
 */
export function Logo({ height = 28, priority = false, className }: Props) {
  const width = Math.round(height * LOGO_RATIO);
  return (
    <Image
      src="/logo/poker-pi-logo.png"
      alt="Poker Pi"
      width={width}
      height={height}
      priority={priority}
      className={className}
      style={{ height, width: "auto" }}
    />
  );
}
