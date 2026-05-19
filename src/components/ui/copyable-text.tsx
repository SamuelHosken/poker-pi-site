"use client";

import { Check } from "lucide-react";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";

type Props = {
  value: string;
  label?: string;
};

export function CopyableText({ value, label = "Copiar" }: Props) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <span className="inline-flex items-center gap-2">
      <button
        type="button"
        onClick={() => copy(value)}
        aria-label={`${label} ${value}`}
        title={label}
        className="mt-2.5 inline-block cursor-pointer border border-line bg-smoke px-3 py-2 font-mono text-[12px] tracking-[0.05em] text-gold transition-colors hover:border-gold select-all"
      >
        {value}
      </button>
      <span
        aria-live="polite"
        className={`ml-2 inline-flex items-center gap-1 font-mono text-[10px] tracking-[0.1em] uppercase text-gold transition-opacity duration-300 ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        <Check className="h-3 w-3" strokeWidth={2.5} />
        Copiado
      </span>
    </span>
  );
}
