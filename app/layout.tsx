import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nrki.no"),
  title: {
    default: "nrki — Norsk Riks-KI",
    template: "%s — nrki",
  },
  description:
    "Et forslag til en offentlig, trygg og upartisk kunstig intelligens for alle i Norge — inspirert av NRKs rolle for allmennkringkasting.",
  openGraph: {
    title: "nrki — Norsk Riks-KI",
    description:
      "Et forslag til en offentlig, trygg og upartisk kunstig intelligens for alle i Norge.",
    locale: "nb_NO",
    type: "website",
    url: "https://nrki.no",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb-NO"
      className={`${inter.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
