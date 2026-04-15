"use client";

import { useEffect, useRef, useState } from "react";
import { samtaler, type Samtale, type SvarBlokk } from "@/lib/demo-samtaler";
import { SvarBlokkRenderer } from "@/components/blokker/SvarBlokkRenderer";

type StreamedBlokk = {
  blokk: SvarBlokk;
  ferdig: boolean;
};

type NrkiMelding = {
  rolle: "nrki";
  blokker: StreamedBlokk[];
  kilder: Samtale["kilder"];
  merknad?: string;
  ferdig: boolean;
};

type Melding = { rolle: "bruker"; tekst: string } | NrkiMelding;

export function ScriptedChat() {
  const [meldinger, setMeldinger] = useState<Melding[]>([]);
  const [aktivId, setAktivId] = useState<string | null>(null);
  const [skriver, setSkriver] = useState(false);
  const [opptatt, setOpptatt] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [meldinger, skriver]);

  const stillSporsmal = async (samtale: Samtale) => {
    if (opptatt) return;
    setOpptatt(true);
    setAktivId(samtale.id);
    setMeldinger((m) => [...m, { rolle: "bruker", tekst: samtale.sporsmal }]);
    setSkriver(true);
    await sov(450);
    setSkriver(false);

    setMeldinger((m) => [
      ...m,
      { rolle: "nrki", blokker: [], kilder: [], ferdig: false },
    ]);

    for (let i = 0; i < samtale.blokker.length; i++) {
      const b = samtale.blokker[i];
      if (b.type === "tekst") {
        // Streaming text
        const ord = b.tekst.split(" ");
        // Append placeholder block
        setMeldinger((prev) =>
          oppdaterSiste(prev, (siste) => ({
            ...siste,
            blokker: [
              ...siste.blokker,
              {
                blokk: { type: "tekst", tekst: "" } as SvarBlokk,
                ferdig: false,
              },
            ],
          })),
        );
        let progressiv = "";
        for (let w = 0; w < ord.length; w++) {
          progressiv += (w === 0 ? "" : " ") + ord[w];
          const snapshot = progressiv;
          setMeldinger((prev) =>
            oppdaterSiste(prev, (siste) => ({
              ...siste,
              blokker: siste.blokker.map((sb, idx) =>
                idx === siste.blokker.length - 1
                  ? {
                      blokk: { type: "tekst", tekst: snapshot } as SvarBlokk,
                      ferdig: false,
                    }
                  : sb,
              ),
            })),
          );
          await sov(20 + Math.random() * 25);
        }
        // Mark text block as done
        setMeldinger((prev) =>
          oppdaterSiste(prev, (siste) => ({
            ...siste,
            blokker: siste.blokker.map((sb, idx) =>
              idx === siste.blokker.length - 1 ? { ...sb, ferdig: true } : sb,
            ),
          })),
        );
        await sov(120);
      } else {
        // Widget block — short pause then drop in
        await sov(280);
        setMeldinger((prev) =>
          oppdaterSiste(prev, (siste) => ({
            ...siste,
            blokker: [...siste.blokker, { blokk: b, ferdig: true }],
          })),
        );
        await sov(180);
      }
    }

    setMeldinger((prev) =>
      oppdaterSiste(prev, (siste) => ({
        ...siste,
        kilder: samtale.kilder,
        merknad: samtale.merknad,
        ferdig: true,
      })),
    );
    setOpptatt(false);
  };

  const nullstill = () => {
    if (opptatt) return;
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
          disabled={opptatt || meldinger.length === 0}
          className="text-xs text-muted hover:text-foreground disabled:opacity-40"
        >
          Start på nytt
        </button>
      </div>

      <div
        ref={containerRef}
        aria-live="polite"
        className="flex h-[480px] flex-col gap-4 overflow-y-auto px-5 py-6"
      >
        {meldinger.length === 0 && (
          <div className="m-auto max-w-sm text-center text-sm text-muted">
            <p>
              Velg et spørsmål nedenfor for å se hvordan en offentlig
              KI-tjeneste kunne svart — med rik informasjon, kilder og
              widgets, ikke bare tekst.
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
              <div className="w-full max-w-[95%] border border-border bg-subtle px-4 py-3 text-sm">
                <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
                  <span className="inline-block h-2 w-1 bg-accent" aria-hidden />
                  nrki
                </div>
                <div className="space-y-3 leading-relaxed text-foreground">
                  {m.blokker.map((sb, j) => (
                    <SvarBlokkRenderer
                      key={j}
                      blokk={sb.blokk}
                      visCursor={!sb.ferdig && sb.blokk.type === "tekst"}
                    />
                  ))}
                </div>
                {m.ferdig && m.kilder.length > 0 && (
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
                {m.ferdig && m.merknad && (
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
              disabled={opptatt}
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

function sov(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

function oppdaterSiste(
  meldinger: Melding[],
  oppdater: (m: NrkiMelding) => NrkiMelding,
): Melding[] {
  const ut = [...meldinger];
  for (let i = ut.length - 1; i >= 0; i--) {
    const m = ut[i];
    if (m.rolle === "nrki") {
      ut[i] = oppdater(m);
      break;
    }
  }
  return ut;
}
