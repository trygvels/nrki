import type { Metadata } from "next";
import Link from "next/link";
import { Disclaimer } from "@/components/Disclaimer";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Sikkerhet og datasuverenitet",
  description:
    "Trusselmodell, datasensitivitetsklasser, GDPR og EU AI Act-samsvar, og hvordan nrki håndterer CLOUD Act-risiko.",
};

type Klasse = {
  navn: string;
  eksempler: string;
  modeller: string;
  begrunnelse: string;
};

const klasser: Klasse[] = [
  {
    navn: "Åpen",
    eksempler:
      "Lovdata, partiprogrammer, SSB-nøkkeltall, offentlige veiledere.",
    modeller: "Frontier, norsk-hostet, selv-hostet",
    begrunnelse:
      "Disse dataene er offentlige uansett. Ingen ytterligere skade kan skje ved at en modell ser dem.",
  },
  {
    navn: "Begrenset",
    eksempler:
      "Innbygger-samtaler om skatt, NAV, helse, økonomi. Personlige spørsmål uten identifikasjon.",
    modeller: "Norsk-hostet, selv-hostet",
    begrunnelse:
      "Selv dagligdagse spørsmål skal holdes i norsk/europeisk jurisdiksjon. Frontier-modeller er ikke tillatt.",
  },
  {
    navn: "Gradert",
    eksempler:
      "Personopplysninger i pågående forvaltningssaker, helsedata, Folkeregister-koblinger.",
    modeller: "Selv-hostet",
    begrunnelse:
      "Data som aldri forlater etatens egen instans. nrki tilbyr arkitekturen, etaten drifter.",
  },
];

type Trussel = { trussel: string; tiltak: string };

const trusler: Trussel[] = [
  {
    trussel: "CLOUD Act-utlevering",
    tiltak:
      "Modellrouter håndhever datakildens godkjenningsliste. Begrenset- og gradert-data møter aldri frontier-modeller.",
  },
  {
    trussel: "Leverandørlås",
    tiltak:
      "Modellagnostisk arkitektur, MCP for data, minimum tre parallelle leverandørkontrakter.",
  },
  {
    trussel: "Modellskade (hallusinasjon)",
    tiltak:
      "RAG-tvang for faktapåstander, råformat-tag for sensitive sitater, automatisert kontroll av at påstander finnes i kildene.",
  },
  {
    trussel: "Brudd på personvern",
    tiltak:
      "Pseudonymisering ved logging, minimal retensjon (30 dager default), EU/EØS-hosting, DPIA før hver funksjon.",
  },
  {
    trussel: "Prompt injection",
    tiltak:
      "Input-sanering, systemprompt isolert i egen pipeline, output-filtrering før verktøybruk.",
  },
  {
    trussel: "Desinformasjon og manipulasjon",
    tiltak:
      "Råformat-tag for partipolitikk, uavhengig balansepanel evaluerer kvartalsvis.",
  },
  {
    trussel: "Tilgjengelighetsangrep (DoS)",
    tiltak:
      "Multi-region failover innen EU, ratelimit per ID-porten-bruker, norsk DDoS-skjerming.",
  },
  {
    trussel: "Supply chain-angrep",
    tiltak:
      "Åpen kildekode, SBOM for hver utgivelse, signerte artifakter (Sigstore), reproduserbare bygg.",
  },
];

export default function SikkerhetPage() {
  return (
    <>
      <Disclaimer />
      <Nav />
      <main className="flex-1">
        <Hero />
        <CloudAct />
        <Klasser />
        <Trusselmatrise />
        <Samsvar />
        <Personvern />
        <Lenker />
      </main>
      <Footer />
    </>
  );
}

function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="inline-block h-2 w-2 bg-accent" aria-hidden />
          Sikkerhet og datasuverenitet
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          Sikkerhet er ikke et kapittel på slutten.
        </h1>
        <p className="mt-8 max-w-3xl text-lg text-muted sm:text-xl">
          Sikkerhet er et design-premiss i hver del av nrki. Datasensitivitet
          avgjør hvilke modeller som får se hva. Orkestratoren håndhever
          reglene. Og hele systemet er åpent, slik at avvik blir synlige før
          de rammer innbyggere.
        </p>
      </div>
    </section>
  );
}

function CloudAct() {
  return (
    <section className="border-b border-border bg-subtle">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          CLOUD Act
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Hvorfor datasuverenitet er et sikkerhetsspørsmål.
        </h2>
        <div className="prose prose-neutral mt-6 max-w-none space-y-5 text-lg leading-relaxed">
          <p>
            Den viktigste kommersielle KI-infrastrukturen i dag er
            amerikansk. Det er ikke et problem i seg selv — det amerikanske
            økosystemet har levert fenomenale modeller. Problemet er{" "}
            <strong>CLOUD Act</strong>: amerikanske myndigheter kan kreve
            utlevering av data fra selskaper under amerikansk jurisdiksjon,
            uavhengig av hvor dataene er lagret.
          </p>
          <p>
            For offentlige norske data — særlig personopplysninger og
            sensitiv forvaltningsinformasjon — er det en risiko som ikke kan
            avtalefestes bort.
          </p>
          <p>
            Løsningen er ikke å nekte bruk av frontier-modeller, men å
            klassifisere data og la klassifiseringen avgjøre hvilke
            modellkategorier som får se hva.
          </p>
        </div>
      </div>
    </section>
  );
}

function Klasser() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Datasensitivitetsklasser
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Tre klasser. Data avgjør modell.
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Klassene er inspirert av NSMs grunnprinsipper for IKT-sikkerhet.
          Orkestratoren håndhever reglene — en modell utenfor godkjent
          liste får aldri se rådataene.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {klasser.map((k) => (
            <article
              key={k.navn}
              className="flex flex-col border border-border p-5"
            >
              <h3 className="text-xl font-semibold tracking-tight">
                {k.navn}
              </h3>
              <p className="mt-4 text-sm text-muted">{k.eksempler}</p>
              <div className="mt-4 border-t border-border pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  Tillatte modeller
                </p>
                <p className="mt-1 text-sm font-medium">{k.modeller}</p>
              </div>
              <p className="mt-4 text-sm text-muted">{k.begrunnelse}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Trusselmatrise() {
  return (
    <section className="border-b border-border bg-subtle">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Trusselmatrise
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Åtte trusler. Åtte konkrete tiltak.
        </h2>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-3 pr-4 font-semibold">Trussel</th>
                <th className="py-3 font-semibold">Tiltak</th>
              </tr>
            </thead>
            <tbody>
              {trusler.map((t) => (
                <tr key={t.trussel} className="border-b border-border">
                  <td className="py-4 pr-4 align-top font-medium">
                    {t.trussel}
                  </td>
                  <td className="py-4 align-top text-muted">{t.tiltak}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Samsvar() {
  const regelverk = [
    {
      navn: "GDPR",
      beskrivelse:
        "Behandlingsgrunnlag (art. 6), særlige kategorier (art. 9), automatiserte avgjørelser (art. 22), DPIA (art. 35).",
    },
    {
      navn: "EU AI Act",
      beskrivelse:
        "Sannsynligvis high-risk pga. offentlig tjeneste til borgere med relevans for rettigheter og ytelser. Krever konformitetsvurdering og løpende risikostyring.",
    },
    {
      navn: "eIDAS2",
      beskrivelse:
        "Integrasjon med ID-porten og det europeiske eIDAS-rammeverket.",
    },
    {
      navn: "Sikkerhetsloven",
      beskrivelse:
        "Vurdering av om nrki er grunnleggende nasjonal funksjon, med tilhørende krav til beredskap og skjerming.",
    },
  ];

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Regulatorisk samsvar
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Fire regelverk som gjelder fra dag én.
        </h2>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {regelverk.map((r) => (
            <article key={r.navn} className="border border-border p-5">
              <h3 className="text-lg font-semibold tracking-tight">
                {r.navn}
              </h3>
              <p className="mt-2 text-sm text-muted">{r.beskrivelse}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Personvern() {
  return (
    <section className="border-b border-border bg-subtle">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Personvern i praksis
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Hva nrki faktisk gjør med dataene dine.
        </h2>

        <ul className="mt-10 space-y-4">
          {[
            [
              "Minimal logging",
              "Samtaleinnhold lagres ikke lenger enn nødvendig. Default: 30 dager, deretter pseudonymisert aggregat.",
            ],
            [
              "Bruker-initiert sletting",
              "Innbygger kan slette sin egen samtalehistorikk fra eget dashboard.",
            ],
            [
              "Opt-ut fra evaluering",
              "Brukere kan velge å ikke la samtaler brukes i evalueringsdatasett, selv i anonymisert form.",
            ],
            [
              "Ingen profilering på tvers av sesjoner",
              "Uten eksplisitt samtykke bygges det ingen brukerprofil.",
            ],
            [
              "Full transparens",
              "Hver innbygger kan se hva som er lagret om seg, og hvilke datakilder som ble spurt i hvert svar.",
            ],
          ].map(([tittel, tekst]) => (
            <li key={tittel} className="border border-border bg-background p-5">
              <h3 className="font-semibold">{tittel}</h3>
              <p className="mt-1 text-sm text-muted">{tekst}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Lenker() {
  return (
    <section>
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Les videre.
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link
            href="/arkitektur"
            className="group border border-border p-5 transition hover:border-foreground"
          >
            <h3 className="text-lg font-semibold tracking-tight">
              Teknisk arkitektur →
            </h3>
            <p className="mt-2 text-sm text-muted">
              Hvordan sikkerhetsmodellen håndheves i praksis.
            </p>
          </Link>
          <Link
            href="/veikart"
            className="group border border-border p-5 transition hover:border-foreground"
          >
            <h3 className="text-lg font-semibold tracking-tight">
              Veikart →
            </h3>
            <p className="mt-2 text-sm text-muted">
              Når ISO 27001-sertifisering og DPIA-godkjenning skal være
              på plass.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
