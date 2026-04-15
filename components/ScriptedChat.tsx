"use client";

import { useEffect, useRef, useState } from "react";
import { samtaler, type Samtale } from "@/lib/demo-samtaler";

type Melding =
  | { rolle: "bruker"; tekst: string }
  | {
      rolle: "nrki";
      avsnitt: string[];
      kilder: Samtale["kilder"];
      merknad?: string;
    };

export function ScriptedChat() {
  const [meldinger, setMeldinger] = useState<Melding[]>([]);
  const [aktivId, setAktivId] = useState<string | null>(null);
  const [skriver, setSkriver] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [meldinger, skriver]);

  const stillSporsmal = async (samtale: Samtale) => {
    if (skriver) return;
    setAktivId(samtale.id);
    setMeldinger((m) => [
      ...m,
      { rolle: "bruker", tekst: samtale.sporsmal },
    ]);
    setSkriver(true);
    // Kort pause for å simulere tenking
    await new Promise((r) => setTimeout(r, 650));
    setSkriver(false);
    setMeldinger((m) => [
      ...m,
      {
        rolle: "nrki",
        avsnitt: samtale.svar,
        kilder: samtale.kilder,
        merknad: samtale.merknad,
      },
    ]);
  };

  const nullstill = () => {
    if (skriver) return;
    setMeldinger([]);
    setAktivId(null);
  };

  return (
    <div className="border border-border bg-background shadow-sm">
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="inline-block h-3 w-1 bg-accent" aria-hidden />
          <span className="text-sm font-semibold">nrki — demo</span>
        </div>
        <button
          onClick={nullstill}
          disabled={skriver || meldinger.length === 0}
          className="text-xs text-muted hover:text-foreground disabled:opacity-40"
        >
          Start på nytt
        </button>
      </div>

      <div
        ref={containerRef}
        aria-live="polite"
        className="flex h-[420px] flex-col gap-4 overflow-y-auto px-5 py-6"
      >
        {meldinger.length === 0 && (
          <div className="m-auto max-w-sm text-center text-sm text-muted">
            <p>
              Dette er en demo. Velg et spørsmål nedenfor for å se hvordan en
              offentlig KI-tjeneste kunne svart — med kilder, nyanser og uten
              politisk slagside.
            </p>
            <p className="mt-3 text-xs">
              Ingen ekte KI-kall skjer. Svarene er kuraterte eksempler.
            </p>
          </div>
        )}

        {meldinger.map((m, i) =>
          m.rolle === "bruker" ? (
            <div key={i} className="flex justify-end">
              <div className="max-w-[80%] bg-foreground px-4 py-3 text-sm text-background">
                {m.tekst}
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-start">
              <div className="max-w-[90%] border border-border bg-subtle px-4 py-3 text-sm">
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  <span className="inline-block h-2 w-1 bg-accent" aria-hidden />
                  nrki
                </div>
                <div className="space-y-3 leading-relaxed text-foreground">
                  {m.avsnitt.map((a, j) => (
                    <p key={j}>{a}</p>
                  ))}
                </div>
                {m.kilder.length > 0 && (
                  <div className="mt-4 border-t border-border pt-3">
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted">
                      Kilder
                    </div>
                    <ul className="mt-2 space-y-1 text-xs">
                      {m.kilder.map((k) => (
                        <li key={k.url}>
                          <a
                            href={k.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline"
                          >
                            {k.navn} ↗
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {m.merknad && (
                  <div className="mt-3 bg-background px-3 py-2 text-xs italic text-muted">
                    {m.merknad}
                  </div>
                )}
              </div>
            </div>
          ),
        )}

        {skriver && (
          <div className="flex justify-start">
            <div className="border border-border bg-subtle px-4 py-3">
              <div className="flex gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted [animation-delay:-0.3s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted [animation-delay:-0.15s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-muted" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-border bg-subtle px-5 py-4">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
          Prøv et spørsmål
        </div>
        <div className="flex flex-wrap gap-2">
          {samtaler.map((s) => (
            <button
              key={s.id}
              onClick={() => stillSporsmal(s)}
              disabled={skriver}
              className={`border px-3 py-1.5 text-xs transition disabled:cursor-not-allowed disabled:opacity-50 ${
                aktivId === s.id
                  ? "border-accent bg-accent text-accent-ink"
                  : "border-border bg-background text-foreground hover:border-foreground"
              }`}
            >
              {s.sporsmal}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
