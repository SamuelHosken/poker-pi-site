"use client";

import { useVideoModal } from "@/components/providers/video-modal-provider";
import { cn } from "@/lib/cn";

type Props = {
  variant?: "white" | "gold";
  ariaLabel?: string;
  className?: string;
};

export function PlayButton({
  variant = "white",
  ariaLabel = "Assistir vídeo",
  className,
}: Props) {
  const { openModal } = useVideoModal();

  return (
    <button
      type="button"
      onClick={openModal}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex h-[76px] w-[76px] cursor-pointer items-center justify-center rounded-full border-none transition-all duration-300",
        "active:scale-[0.92]",
        variant === "white"
          ? "bg-white hover:bg-gold"
          : "bg-gold hover:bg-white",
        className,
      )}
    >
      <span
        aria-hidden
        className="ml-1 h-0 w-0 border-y-[12px] border-l-[18px] border-y-transparent border-l-ink"
      />
    </button>
  );
}
