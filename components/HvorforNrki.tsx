export function HvorforNrki() {
  return (
    <section className="border-b border-border" id="hvorfor">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr] md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Hvorfor nrki?
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              KI er i ferd med å bli infrastruktur. Da kan den ikke eies av noen
              få.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/90">
            <p>
              I dag er de mest brukte KI-tjenestene eid av private, utenlandske
              selskaper. Deres modeller trenes på engelsk, deres verdier speiler
              andre samfunn, og deres forretningsmodeller bestemmer hva
              brukerne får se.
            </p>
            <p>
              Akkurat som allmennkringkasteren NRK sikrer at alle i Norge har
              tilgang til troverdig informasjon — uavhengig av hvor mye de har
              råd til å betale — bør en moderne velferdsstat sørge for at alle
              har tilgang til en trygg, upartisk og godt forankret kunstig
              intelligens.
            </p>
            <p className="text-muted">
              nrki er et forslag om hvordan den tjenesten kunne sett ut.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
