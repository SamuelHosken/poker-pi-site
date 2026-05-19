"use client";

import { useEffect, useState } from "react";
import { computeCountdown, formatCountdownShort } from "@/lib/countdown";

type Props = {
  deadlineISO: string;
  capacity: number;
  /** Server-rendered fallback shown until the client hydrates the live value. */
  fallback?: string;
};

export function Countdown({ deadlineISO, capacity, fallback }: Props) {
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setLabel(formatCountdownShort(computeCountdown(deadlineISO)));
    update();
    const id = window.setInterval(update, 60_000);
    return () => window.clearInterval(id);
  }, [deadlineISO]);

  return (
    <span
      className="inline-block font-semibold"
      // Avoid hydration warning since label depends on the user's clock.
      suppressHydrationWarning
    >
      {label ?? fallback ?? `— ${capacity} vagas`}
    </span>
  );
}
