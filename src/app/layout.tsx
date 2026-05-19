import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Geist_Mono } from "next/font/google";
import { event } from "@/content/event";
import { VideoModalProvider } from "@/components/providers/video-modal-provider";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pokerpi.com.br"),
  title: {
    default: `${event.name} — 23 de maio · Jardim Botânico`,
    template: `%s · ${event.name}`,
  },
  description:
    "Torneio fechado de poker em Brasília. 30 vagas. Jantar, open bar e estrutura premium. Inscrições até 20/05.",
  applicationName: event.name,
  authors: [{ name: event.name }],
  keywords: [
    "poker",
    "torneio",
    "Brasília",
    "Jardim Botânico",
    "Poker Pi",
    "evento",
    "DF",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://pokerpi.com.br",
    siteName: event.name,
    title: `${event.name} — O poker mais irado da sua vida`,
    description:
      "Torneio fechado em Brasília. 30 vagas por ordem de confirmação.",
    // og:image is auto-generated from src/app/opengraph-image.jpg
  },
  twitter: {
    card: "summary_large_image",
    title: `${event.name} — O poker mais irado da sua vida`,
    description:
      "Torneio fechado em Brasília. 30 vagas por ordem de confirmação.",
    // twitter:image is auto-generated from src/app/twitter-image.jpg
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body className="antialiased">
        <VideoModalProvider>{children}</VideoModalProvider>
      </body>
    </html>
  );
}
