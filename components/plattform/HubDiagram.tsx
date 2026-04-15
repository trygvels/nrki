export function HubDiagram() {
  return (
    <section
      id="arkitektur"
      className="border-b border-border bg-subtle scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Hub-arkitekturen
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Tre lag, fire roller, åpne grensesnitt mellom dem.
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          nrki er ikke en enkelt modell. nrki er <em>orkestratoren</em> som
          kobler norske brukere til norske data og kvalitetssikrede modeller
          via åpne, dokumenterte protokoller.
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {/* Lag 1: Brukere */}
          <div className="rounded-2xl border border-border bg-background p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Brukerlag
            </p>
            <p className="mt-2 font-semibold">Innbyggere, etater, kommuner</p>
            <p className="mt-3 text-sm text-muted">
              Innbyggere chatter på nrki.no. Etater integrerer mot egne
              fagsystemer. Små kommuner bestiller en widget de embedder på
              egen side.
            </p>
          </div>

          <div
            className="hidden items-center justify-center text-2xl text-muted lg:flex"
            aria-hidden
          >
            ↕
          </div>

          {/* Lag 2: Orchestrator */}
          <div className="rounded-2xl border-2 border-accent bg-background p-6 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Orkestrator
            </p>
            <p className="mt-2 font-semibold">nrki</p>
            <p className="mt-3 text-sm text-muted">
              Tar imot brukerens spørsmål. Velger riktige datakilder via MCP.
              Velger en godkjent modell innenfor leverandørens regler. Sørger
              for at svaret kildebelegges og logges for ettertid.
            </p>
          </div>

          <div
            className="hidden items-center justify-center text-2xl text-muted lg:flex"
            aria-hidden
          >
            ↔
          </div>

          {/* Lag 3 split */}
          <div className="grid gap-4">
            <div className="rounded-2xl border border-border bg-background p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Datalag
              </p>
              <p className="mt-2 font-semibold">Offentlige leverandører</p>
              <p className="mt-3 text-sm text-muted">
                Skatteetaten, NAV, Lånekassen, kommuner. Eksponerer data via
                MCP-servere de eier selv.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                Modellag
              </p>
              <p className="mt-2 font-semibold">Modell-leverandører</p>
              <p className="mt-3 text-sm text-muted">
                Frontier-modeller, norsk-hostede åpne modeller, og
                organisasjoners selv-hostede modeller — alle bak samme
                grensesnitt.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm text-muted">
          Poenget med separasjon: hver del kan byttes ut uten å bygge på nytt.
          Ny modell? Plug-and-play. Ny etat? Kobles på via MCP. Innbygger
          flytter? Samme grensesnitt.
        </p>
      </div>
    </section>
  );
}
