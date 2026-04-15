"use client";

import { useEffect, useState } from "react";

const seksjoner = [
  { id: "intro", tittel: "Intro" },
  { id: "arkitektur", tittel: "Arkitektur" },
  { id: "standarder", tittel: "Standarder" },
  { id: "modeller", tittel: "Modeller" },
  { id: "for-aktorer", tittel: "For etater" },
  { id: "sandbox", tittel: "Sandbox" },
  { id: "kommuner", tittel: "For kommuner" },
  { id: "posisjonering", tittel: "Posisjonering" },
  { id: "bidra", tittel: "Bidra" },
];

function useAktivSeksjon() {
  const [aktiv, setAktiv] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setAktiv(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -65% 0px", threshold: 0 },
    );
    for (const s of seksjoner) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return aktiv;
}

export function PlattformAnkerNavMobil() {
  const aktiv = useAktivSeksjon();
  return (
    <div className="sticky top-14 z-30 overflow-x-auto border-b border-border bg-background/90 backdrop-blur lg:hidden">
      <div className="flex gap-1.5 px-4 py-2">
        {seksjoner.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`shrink-0 border px-3 py-1 text-xs transition ${
              aktiv === s.id
                ? "border-accent bg-accent text-accent-ink"
                : "border-border bg-background text-muted hover:border-foreground"
            }`}
          >
            {s.tittel}
          </a>
        ))}
      </div>
    </div>
  );
}

export function PlattformAnkerNavDesktop() {
  const aktiv = useAktivSeksjon();
  return (
    <nav aria-label="Seksjoner" className="sticky top-20">
      <div className="text-xs font-semibold uppercase tracking-wider text-muted">
        På denne siden
      </div>
      <ol className="mt-4 space-y-1.5 border-l border-border">
        {seksjoner.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`-ml-px block border-l-2 py-1 pl-3 text-sm transition ${
                aktiv === s.id
                  ? "border-accent font-semibold text-accent"
                  : "border-transparent text-muted hover:border-foreground hover:text-foreground"
              }`}
            >
              {s.tittel}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
