"use client";

import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/cn";

export function Nav() {
  const scrolled = useScrolled(40);

  return (
    <nav
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex items-center justify-between page-pad py-3.5",
        "bg-ink/75 backdrop-blur-xl border-b transition-colors duration-300",
        scrolled ? "border-line" : "border-transparent",
      )}
    >
      <Link
        href="/"
        aria-label="Poker Pi · página inicial"
        className="flex items-center no-underline"
      >
        <Logo height={22} priority />
      </Link>

      <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] uppercase text-gray-soft">
        <span
          aria-hidden
          className="h-1.5 w-1.5 rounded-full bg-gold animate-[pulse-dot_2s_ease-in-out_infinite]"
        />
        Inscrições abertas
      </div>
    </nav>
  );
}
