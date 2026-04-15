"use client";

import { useEffect, useRef, useState } from "react";
import {
  kommuneNavn,
  kommuneSamtaler,
  kommuneURL,
} from "@/lib/kommune-demo-samtaler";
import type { Samtale } from "@/lib/demo-samtaler";

type Melding =
  | { rolle: "bruker"; tekst: string }
  | { rolle: "nrki"; samtale: Samtale };

export function EmbedWidgetForhandsvisning() {
  const [meldinger, setMeldinger] = useState<Melding[]>([]);
  const [skriver, setSkriver] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [meldinger, skriver]);

  const stillSporsmal = async (samtale: Samtale) => {
    if (skriver) return;
    setMeldinger((m) => [...m, { rolle: "bruker", tekst: samtale.sporsmal }]);
    setSkriver(true);
    await new Promise((r) => setTimeout(r, 550));
    setSkriver(false);
    setMeldinger((m) => [...m, { rolle: "nrki", samtale }]);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-lg">
      {/* Browser-bar mock */}
      <div className="flex items-center gap-2 border-b border-border bg-subtle px-4 py-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 text-center font-mono text-xs text-muted">
          {kommuneURL}
        </div>
      </div>

      {/* Mock kommune-side */}
      <div className="grid gap-4 bg-sky-50/60 p-6 sm:grid-cols-[2fr_3fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-sky-900/60">
            {kommuneNavn}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-sky-950">
            Velkommen til Porsgrunn
          </h3>
          <p className="mt-3 text-sm text-sky-950/70">
            Tjenester, åpningstider, kontakt — eller still spørsmål til vår
            innbygger-KI. Svarer på norsk, basert på kommunens egne sider.
          </p>
          <p className="mt-4 text-xs text-sky-950/50">
            (Mock-side. Den faktiske kommunen er ikke tilknyttet nrki.)
          </p>
        </div>

        {/* Embeddet widget */}
        <div className="overflow-hidden rounded-xl border border-border bg-background shadow-md">
          <div className="flex items-center justify-between border-b border-border px-4 py-2">
            <div className="flex items-center gap-2">
              <span className="inline-block h-3 w-1 bg-accent" aria-hidden />
              <span className="text-xs font-semibold">
                nrki for {kommuneNavn}
              </span>
            </div>
            {meldinger.length > 0 && (
              <button
                onClick={() => setMeldinger([])}
                disabled={skriver}
                className="text-[10px] text-muted hover:text-foreground disabled:opacity-40"
              >
                Start på nytt
              </button>
            )}
          </div>

          <div
            ref={containerRef}
            aria-live="polite"
            className="flex h-72 flex-col gap-3 overflow-y-auto px-4 py-4 text-sm"
          >
            {meldinger.length === 0 && (
              <p className="m-auto max-w-xs text-center text-xs text-muted">
                Velg et spørsmål under for å se hvordan widgeten ville svart
                en innbygger.
              </p>
            )}
            {meldinger.map((m, i) =>
              m.rolle === "bruker" ? (
                <div key={i} className="flex justify-end">
                  <div className="max-w-[80%] rounded-2xl rounded-br-sm bg-foreground px-3 py-2 text-xs text-background">
                    {m.tekst}
                  </div>
                </div>
              ) : (
                <div key={i} className="flex justify-start">
                  <div className="max-w-[90%] rounded-2xl rounded-bl-sm border border-border bg-subtle px-3 py-2 text-xs">
                    <div className="space-y-2 leading-relaxed">
                      {m.samtale.svar.map((a, j) => (
                        <p key={j}>{a}</p>
                      ))}
                    </div>
                    {m.samtale.kilder.length > 0 && (
                      <div className="mt-2 border-t border-border pt-2 text-[10px]">
                        {m.samtale.kilder.map((k) => (
                          <a
                            key={k.url}
                            href={k.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mr-2 text-accent hover:underline"
                          >
                            {k.navn} ↗
                          </a>
                        ))}
                      </div>
                    )}
                    {m.samtale.merknad && (
                      <p className="mt-2 rounded bg-background px-2 py-1 text-[10px] italic text-muted">
                        {m.samtale.merknad}
                      </p>
                    )}
                  </div>
                </div>
              ),
            )}
            {skriver && (
              <div className="flex justify-start">
                <div className="rounded-2xl rounded-bl-sm border border-border bg-subtle px-3 py-2">
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:-0.3s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted [animation-delay:-0.15s]" />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-border bg-subtle px-3 py-3">
            <div className="mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
              Forslag
            </div>
            <div className="flex flex-wrap gap-1.5">
              {kommuneSamtaler.map((s) => (
                <button
                  key={s.id}
                  onClick={() => stillSporsmal(s)}
                  disabled={skriver}
                  className="rounded-full border border-border bg-background px-2.5 py-1 text-[11px] hover:border-foreground disabled:opacity-50"
                >
                  {s.sporsmal}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
