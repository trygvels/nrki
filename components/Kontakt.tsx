export function Kontakt() {
  return (
    <section className="border-b border-border" id="kontakt">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Bli med
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Ideen trenger flere som bidrar.
            </h2>
            <p className="mt-6 text-lg text-muted">
              nrki er foreløpig bare et forslag. For at det skal bli noe mer
              trengs stemmer fra teknologer, jurister, politikere, journalister,
              forskere og ikke minst brukere. Alle innspill er velkomne.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="https://github.com/trygvels/nrki"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between border border-border bg-background p-6 transition hover:border-foreground"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Bidra
                </div>
                <div className="mt-2 text-lg font-semibold">GitHub</div>
                <p className="mt-2 text-sm text-muted">
                  Les koden, foreslå endringer, åpne issues.
                </p>
              </div>
              <div className="mt-6 text-sm font-semibold text-accent">
                github.com/trygvels/nrki →
              </div>
            </a>
            <a
              href="https://github.com/trygvels/nrki/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between border border-border bg-background p-6 transition hover:border-foreground"
            >
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-muted">
                  For offentlige etater
                </div>
                <div className="mt-2 text-lg font-semibold">
                  Foreslå en datakilde
                </div>
                <p className="mt-2 text-sm text-muted">
                  Har din etat data som burde være tilgjengelig via nrki?
                </p>
              </div>
              <div className="mt-6 text-sm font-semibold text-accent">
                Åpne et issue →
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
