"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/Logo";

const lenker = [
  { href: "/konsept", tekst: "Konsept" },
  { href: "/arkitektur", tekst: "Arkitektur" },
  { href: "/veikart", tekst: "Veikart" },
  { href: "/demo", tekst: "Demo" },
  { href: "/om", tekst: "Om" },
  {
    href: "https://github.com/trygvels/nrki",
    tekst: "GitHub",
    eksternt: true,
  },
];

export function Nav() {
  const [apen, setApen] = useState(false);

  useEffect(() => {
    if (apen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [apen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setApen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-accent bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" aria-label="nrki — forsiden" onClick={() => setApen(false)}>
          <Logo storrelse="md" />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {lenker.map((l) =>
            l.eksternt ? (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition hover:text-accent"
              >
                {l.tekst}
              </a>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="text-muted transition hover:text-accent"
              >
                {l.tekst}
              </Link>
            ),
          )}
        </nav>

        <button
          type="button"
          onClick={() => setApen((v) => !v)}
          aria-expanded={apen}
          aria-controls="mobil-meny"
          aria-label={apen ? "Lukk meny" : "Åpne meny"}
          className="flex h-10 w-10 items-center justify-center md:hidden"
        >
          {apen ? <IkonKryss /> : <IkonHamburger />}
        </button>
      </div>

      {/* Mobil drawer */}
      {apen && (
        <div
          id="mobil-meny"
          className="fixed inset-x-0 top-16 z-30 border-b border-border bg-background md:hidden"
        >
          <nav className="flex flex-col px-4 py-2">
            {lenker.map((l) =>
              l.eksternt ? (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setApen(false)}
                  className="border-b border-border py-4 text-base font-medium text-foreground last:border-b-0"
                >
                  {l.tekst} ↗
                </a>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setApen(false)}
                  className="border-b border-border py-4 text-base font-medium text-foreground last:border-b-0"
                >
                  {l.tekst}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}

      {/* Backdrop */}
      {apen && (
        <button
          type="button"
          aria-hidden
          tabIndex={-1}
          onClick={() => setApen(false)}
          className="fixed inset-0 top-16 z-20 bg-foreground/30 md:hidden"
        />
      )}
    </header>
  );
}

function IkonHamburger() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <line x1="3" y1="6" x2="17" y2="6" />
      <line x1="3" y1="10" x2="17" y2="10" />
      <line x1="3" y1="14" x2="17" y2="14" />
    </svg>
  );
}

function IkonKryss() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <line x1="4" y1="4" x2="16" y2="16" />
      <line x1="16" y1="4" x2="4" y2="16" />
    </svg>
  );
}
