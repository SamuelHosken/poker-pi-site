"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import dynamic from "next/dynamic";
import { event } from "@/content/event";

// Lazy-load the Mux player — only ships when the modal first opens, keeps LCP cheap.
const MuxPlayer = dynamic(() => import("@mux/mux-player-react"), {
  ssr: false,
});

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function VideoModal({ open, onOpenChange }: Props) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[200] bg-ink/95 backdrop-blur-md data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed left-1/2 top-1/2 z-[201] w-full max-w-[960px] -translate-x-1/2 -translate-y-1/2 p-4 focus:outline-none"
        >
          <Dialog.Title className="sr-only">
            Vídeo de convite — Poker Pi
          </Dialog.Title>

          <Dialog.Close
            aria-label="Fechar"
            className="absolute -top-12 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-transparent text-white transition-colors hover:border-white hover:bg-smoke"
          >
            <X className="h-5 w-5" strokeWidth={1.5} />
          </Dialog.Close>

          <div className="relative aspect-video w-full overflow-hidden border border-line bg-ink">
            {open ? (
              <MuxPlayer
                playbackId={event.videoPlaybackId}
                streamType="on-demand"
                autoPlay
                accentColor="#C9A961"
                metadata={{
                  video_title: `${event.name} — Convite`,
                  player_name: "pokerpi-web",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  "--media-object-fit": "contain",
                  "--controls-backdrop-color": "rgba(10,10,11,0.6)",
                }}
              />
            ) : null}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
