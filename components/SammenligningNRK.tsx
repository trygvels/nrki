export function SammenligningNRK() {
  return (
    <section className="border-b border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Parallellen
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          NRK er for nyhetene det nrki bør være for kunstig intelligens.
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden bg-background/20 sm:grid-cols-2">
          <div className="bg-foreground p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-background/60">
              NRK, siden 1933
            </p>
            <ul className="mt-4 space-y-3 text-lg">
              <li>Allmennkringkasting — tilgjengelig for alle.</li>
              <li>Uavhengig redaksjon, offentlig finansiert.</li>
              <li>Plikt til bredde, nøytralitet og opplysning.</li>
              <li>Kontrollert av Stortinget og Medietilsynet.</li>
            </ul>
          </div>
          <div className="bg-foreground p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              nrki, et forslag
            </p>
            <ul className="mt-4 space-y-3 text-lg">
              <li>Allmenn kunstig intelligens — tilgjengelig for alle.</li>
              <li>Åpen kildekode, offentlig finansiert.</li>
              <li>Plikt til nyansering, upartiskhet og kildebruk.</li>
              <li>Kontrollert av Stortinget og et uavhengig fagråd.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
