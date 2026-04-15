export function Signatur() {
  return (
    <section className="border-b border-border bg-subtle">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Om dette nettstedet
        </p>
        <h2 className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">
          En visualisering av et ideal — ikke et produkt.
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-muted">
          nrki er et åpent tankeeksperiment. Det er ikke en tjeneste som
          kan kjøpes, ikke et prosjekt som rekrutterer, og ikke tilknyttet
          en faktisk leverandør. Det er ett forsøk på å konkretisere hvordan
          en offentlig norsk KI-infrastruktur kunne sett ut — slik at ideen
          kan diskuteres på grunnlag av noe konkret i stedet for kun ord.
        </p>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">
            Forfatter
          </p>
          <p className="mt-2 text-lg font-semibold text-foreground">
            Trygve Leithe Svalheim
          </p>
        </div>
      </div>
    </section>
  );
}
