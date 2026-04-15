"use client";

import { useState } from "react";
import { Kodeblokk } from "@/components/Kodeblokk";
import { EmbedWidgetForhandsvisning } from "./EmbedWidgetForhandsvisning";

const kommuner = [
  { id: "porsgrunn", navn: "Porsgrunn kommune", url: "porsgrunn.kommune.no" },
  { id: "harstad", navn: "Harstad kommune", url: "harstad.kommune.no" },
  { id: "molde", navn: "Molde kommune", url: "molde.kommune.no" },
  { id: "kongsberg", navn: "Kongsberg kommune", url: "kongsberg.kommune.no" },
  { id: "ringsaker", navn: "Ringsaker kommune", url: "ringsaker.kommune.no" },
  { id: "halden", navn: "Halden kommune", url: "halden.kommune.no" },
];

const modellkategorier = [
  {
    id: "norsk-hostet",
    navn: "Norsk-hostet",
    beskrivelse: "Anbefalt for kommuner. Datasuverenitet, ingen CLOUD Act.",
  },
  {
    id: "frontier",
    navn: "Frontier",
    beskrivelse: "Best ytelse, men data behandles av amerikansk leverandør.",
  },
  {
    id: "selv-hostet",
    navn: "Selv-hostet",
    beskrivelse: "Krever IT-kompetanse. Maksimal kontroll.",
  },
];

export function KommuneBestillingsflyt() {
  const [steg, setSteg] = useState<"bestill" | "forhandsvisning">("bestill");
  const [valgtKommune, setValgtKommune] = useState(kommuner[0]);
  const [modellkategori, setModellkategori] = useState("norsk-hostet");

  return (
    <section
      id="kommuner"
      className="border-b border-border scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          For småkommuner
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Innbygger-KI på én dag.
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-muted">
          800 av Norges 357 kommuner har under 10 000 innbyggere. De har
          sjelden egen IT-utvikling, men trenger like fullt å kunne tilby
          innbyggerne sine en god digital opplevelse. nrki er gratis for
          offentlige aktører, og en liten kommune skal kunne ha en fungerende
          innbyggertjeneste oppe samme dag de bestiller.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          {/* Bestillingsskjema */}
          <div className="border border-border bg-background p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Bestillingsskjema
            </p>
            <h3 className="mt-2 text-lg font-semibold">
              Skreddersy din kommunes widget
            </h3>

            {steg === "bestill" && (
              <div className="mt-6 space-y-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted">
                    Kommune
                  </label>
                  <select
                    value={valgtKommune.id}
                    onChange={(e) => {
                      const valgt = kommuner.find(
                        (k) => k.id === e.target.value,
                      );
                      if (valgt) setValgtKommune(valgt);
                    }}
                    className="mt-1.5 block w-full border border-border bg-background px-4 py-2.5 text-sm focus:border-accent focus:outline-none"
                  >
                    {kommuner.map((k) => (
                      <option key={k.id} value={k.id}>
                        {k.navn}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted">
                    Kommunens nettside
                  </label>
                  <input
                    type="text"
                    value={valgtKommune.url}
                    readOnly
                    className="mt-1.5 block w-full border border-border bg-subtle px-4 py-2.5 text-sm text-muted"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted">
                    Modellkategori
                  </label>
                  <div className="mt-1.5 space-y-2">
                    {modellkategorier.map((k) => (
                      <label
                        key={k.id}
                        className={`flex cursor-pointer gap-3 border px-4 py-3 transition ${
                          modellkategori === k.id
                            ? "border-accent bg-accent/5"
                            : "border-border hover:border-foreground"
                        }`}
                      >
                        <input
                          type="radio"
                          name="modellkategori"
                          value={k.id}
                          checked={modellkategori === k.id}
                          onChange={(e) => setModellkategori(e.target.value)}
                          className="mt-1 h-4 w-4 accent-accent"
                        />
                        <div className="text-sm">
                          <div className="font-semibold">
                            {k.navn}
                            {k.id === "norsk-hostet" && (
                              <span className="ml-2 bg-accent/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent">
                                Anbefalt
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-muted">
                            {k.beskrivelse}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSteg("forhandsvisning")}
                  className="block w-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink hover:brightness-110"
                >
                  Bestill og se forhåndsvisning →
                </button>
                <p className="text-center text-[11px] text-muted">
                  Demo-bestilling. Ingen ekte oppretting skjer.
                </p>
              </div>
            )}

            {steg === "forhandsvisning" && (
              <div className="mt-6 space-y-4">
                <div className="bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                  ✓ Widget opprettet for <strong>{valgtKommune.navn}</strong>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                    Embed-kode
                  </p>
                  <div className="mt-2">
                    <Kodeblokk spraak="html">
{`<script
  src="https://nrki.no/widget/${valgtKommune.id}.js"
  defer
></script>`}
                    </Kodeblokk>
                  </div>
                  <p className="mt-3 text-xs text-muted">
                    Legg inn én linje på kommunens nettside. Widgeten dukker
                    opp som en chat-bobbel nede til høyre.
                  </p>
                </div>
                <button
                  onClick={() => setSteg("bestill")}
                  className="block w-full border border-border px-5 py-2.5 text-sm font-semibold hover:border-foreground"
                >
                  ← Endre bestilling
                </button>
              </div>
            )}
          </div>

          {/* Forhåndsvisning av embed-widget */}
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
              Slik vil widgeten se ut på kommunens nettside
            </p>
            <EmbedWidgetForhandsvisning />
          </div>
        </div>
      </div>
    </section>
  );
}
