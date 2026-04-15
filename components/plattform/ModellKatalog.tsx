import { Tag } from "@/components/Tag";
import {
  kategoriBeskrivelse,
  modeller,
  type Kategori,
} from "@/lib/modeller";

const rekkefolge: Kategori[] = ["frontier", "norsk-hostet", "selv-hostet"];

export function ModellKatalog() {
  return (
    <section
      id="modeller"
      className="border-b border-border bg-subtle scroll-mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Modellkatalogen
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Modellagnostisk — leverandøren bestemmer hva som er greit.
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-muted">
          nrki binder seg ikke til én modell. Hver datakilde-leverandør (f.eks.
          Skatteetaten) godkjenner hvilke modellkategorier deres data kan
          brukes med. Brukeren velger blant de godkjente. Slik kan en etat med
          strenge krav til datasuverenitet sperre frontier-modeller, mens en
          etat med mindre sensitiv data kan tillate alle.
        </p>

        <div className="mt-4 max-w-3xl rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <strong>Eksempel-katalog.</strong> Listen under er illustrativ.
          Faktisk modellutvalg vil avgjøres av et fagråd og en
          jurisdiksjonsanalyse — ikke av denne demonstrasjonssiden.
        </div>

        <div className="mt-12 space-y-12">
          {rekkefolge.map((kat) => {
            const innhold = kategoriBeskrivelse[kat];
            const liste = modeller.filter((m) => m.kategori === kat);
            return (
              <div key={kat}>
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {innhold.tittel}
                  </h3>
                  <span className="text-xs font-mono text-muted">
                    {liste.length} modell{liste.length === 1 ? "" : "er"}
                  </span>
                </div>
                <p className="mt-2 max-w-3xl text-muted">
                  {innhold.beskrivelse}
                </p>
                <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
                  {liste.map((m) => (
                    <article
                      key={m.id}
                      className="flex flex-col gap-3 bg-background p-5"
                    >
                      <header>
                        <h4 className="text-lg font-semibold">{m.navn}</h4>
                        <p className="text-sm text-muted">{m.leverandor}</p>
                      </header>
                      <div className="flex flex-wrap gap-1.5">
                        {m.cloudActRisiko ? (
                          <Tag variant="warn" title="Underlagt amerikansk CLOUD Act">
                            ⚠ CLOUD Act
                          </Tag>
                        ) : (
                          <Tag variant="ok" title="Ingen amerikansk jurisdiksjon">
                            ✓ EU/EØS
                          </Tag>
                        )}
                        <Tag variant="info">{m.hostingSted}</Tag>
                        {m.sertifiseringer.map((s) => (
                          <Tag key={s}>{s}</Tag>
                        ))}
                      </div>
                      <p className="text-sm text-muted">{m.notater}</p>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CLOUD Act-forklaring */}
        <div className="mt-16 grid gap-8 rounded-2xl border border-border bg-background p-8 md:grid-cols-[2fr_3fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              Hvorfor jurisdiksjon teller
            </p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight">
              CLOUD Act
            </h3>
          </div>
          <div className="space-y-3 text-muted">
            <p>
              Den amerikanske CLOUD Act (2018) gir amerikanske myndigheter
              rett til å kreve utlevering av data fra amerikanske selskaper —
              uavhengig av hvor i verden dataene faktisk lagres.
            </p>
            <p>
              For en norsk etat som behandler personopplysninger eller
              gradert informasjon kan det være uakseptabelt at en
              tredjelands-jurisdiksjon kan kreve innsyn i dataene. Da må
              modellen kjøre hos en leverandør utenfor amerikansk eierskap —
              eller hos etaten selv.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
