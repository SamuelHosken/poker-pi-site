"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { VideoModal } from "@/components/ui/video-modal";

type VideoModalContextValue = {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const VideoModalContext = createContext<VideoModalContextValue | null>(null);

export function VideoModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, openModal, closeModal }),
    [open, openModal, closeModal],
  );

  return (
    <VideoModalContext.Provider value={value}>
      {children}
      <VideoModal open={open} onOpenChange={setOpen} />
    </VideoModalContext.Provider>
  );
}

export function useVideoModal() {
  const ctx = useContext(VideoModalContext);
  if (!ctx) {
    throw new Error("useVideoModal must be used inside VideoModalProvider");
  }
  return ctx;
}
