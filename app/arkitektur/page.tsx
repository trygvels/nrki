import type { Metadata } from "next";
import Link from "next/link";
import { Disclaimer } from "@/components/Disclaimer";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: "Arkitektur",
  description:
    "Teknisk arkitektur for nrki — tre lag, åpne grensesnitt, modellagnostisk orkestrering, og konkret komponentoversikt.",
};

type Komponent = {
  navn: string;
  ansvar: string;
  forslag: string;
};

const kjernekomponenter: Komponent[] = [
  {
    navn: "Orkestrator",
    ansvar: "Spørsmålsruting, kategorisering, policyhåndheving",
    forslag: "Go eller Rust",
  },
  {
    navn: "MCP-klient og register",
    ansvar: "Snakker med etaters MCP-servere, vedlikeholder godkjent liste",
    forslag: "TypeScript",
  },
  {
    navn: "Modellrouter",
    ansvar: "Velger modell basert på datakilde-godkjenning",
    forslag: "Go",
  },
  {
    navn: "RAG-pipeline",
    ansvar: "Henting (hybrid: vektor + BM25), re-ranking, context-bygging",
    forslag: "Python + pgvector/Qdrant",
  },
  {
    navn: "Eval-harness",
    ansvar: "Kontinuerlig evaluering, red teaming, claim-verifikasjon",
    forslag: "Python",
  },
  {
    navn: "Policy-tjeneste",
    ansvar: "Systemprompt, redaksjonell linje, kategorisering",
    forslag: "Versjonert i Git, håndhevet i orkestrator",
  },
  {
    navn: "Auth-layer",
    ansvar: "ID-porten for innbyggere, Maskinporten for etater",
    forslag: "Standard OIDC, Difi-komponenter",
  },
  {
    navn: "Hooks-dispatcher",
    ansvar: "Sender hendelser til etaters callbacks",
    forslag: "Go + signerte webhooks",
  },
  {
    navn: "Observability",
    ansvar: "Tracing, logging, metrics",
    forslag: "OpenTelemetry → Grafana/Prometheus/Loki",
  },
  {
    navn: "Sandbox",
    ansvar: "Etater tester svar mot egne data før produksjon",
    forslag: "Isolert K8s-namespace per etat",
  },
];

const datapipelines = [
  "Lovdata",
  "Skatteetaten",
  "Lånekassen",
  "NAV",
  "Helsedirektoratet",
  "Husbanken",
  "SSB",
  "Stortinget",
  "Difi/Digdir",
  "Kartverket",
  "Brønnøysundregistrene",
  "Arkivverket",
  "Statsforvalteren",
  "UDI",
  "Forbrukerrådet",
];

export default function ArkitekturPage() {
  return (
    <>
      <Disclaimer />
      <Nav />
      <main className="flex-1">
        <Hero />
        <TreLag />
        <Modellkategorier />
        <Kjernekomponenter />
        <Infrastruktur />
        <Datapipelines />
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
          Teknisk arkitektur
        </p>
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
          Tre lag. Åpne grensesnitt. Ingen låsing inn.
        </h1>
        <p className="mt-8 max-w-3xl text-lg text-muted sm:text-xl">
          nrki er ikke en modell. nrki er orkestratoren som kobler norske
          brukere til norske data og kvalitetssikrede modeller via åpne,
          dokumenterte protokoller. Hver del kan erstattes uten at resten
          må bygges om.
        </p>
      </div>
    </section>
  );
}

function TreLag() {
  return (
    <section className="border-b border-border bg-subtle">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          De tre lagene
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Brukere — orkestrator — data — modeller.
        </h2>

        <div className="mt-10 space-y-6">
          <LagKort
            tittel="Brukerlag"
            navn="Innbyggere, etater, kommuner, utviklere"
            beskrivelse="Innbyggere chatter på nrki.no. Etater integrerer mot egne fagsystemer. Små kommuner embedder widget med én linje HTML. Utviklere bygger apper på åpent API."
            piltekst="Åpne grensesnitt"
          />
          <LagKort
            tittel="Orkestrator"
            navn="nrki"
            beskrivelse="Tar imot spørsmål. Kategoriserer og velger retningslinjer. Henter data via MCP. Ruter til godkjent modell. Kildebelegger svar. Logger for ettertid og evaluering."
            piltekst="MCP + datakontrakter"
            fremhevet
          />
          <LagKort
            tittel="Datalag"
            navn="Skatteetaten, NAV, Lånekassen, Lovdata, kommuner …"
            beskrivelse="Hver etat eier sin egen MCP-server. Datakontrakter dokumenterer hva ressursen er, når den gjelder, hvor den kommer fra. Etaten godkjenner hvilke modellkategorier som kan bruke dens data."
            piltekst="Modell-API"
          />
          <LagKort
            tittel="Modellag"
            navn="Frontier · Norsk-hostet · Selv-hostet"
            beskrivelse="Tre kategorier med ulike egenskaper. Orkestratoren velger innenfor det datakilde-leverandøren har godkjent. Modellvalg kan byttes uten at resten må endres."
          />
        </div>
      </div>
    </section>
  );
}

function LagKort({
  tittel,
  navn,
  beskrivelse,
  piltekst,
  fremhevet,
}: {
  tittel: string;
  navn: string;
  beskrivelse: string;
  piltekst?: string;
  fremhevet?: boolean;
}) {
  return (
    <div>
      <article
        className={`grid gap-4 border bg-background p-6 sm:grid-cols-[180px_1fr] sm:gap-8 ${
          fremhevet ? "border-2 border-accent" : "border-border"
        }`}
      >
        <div>
          <p
            className={`text-xs font-semibold uppercase tracking-wider ${
              fremhevet ? "text-accent" : "text-muted"
            }`}
          >
            {tittel}
          </p>
          <p className="mt-1 font-semibold">{navn}</p>
        </div>
        <p className="text-sm text-muted sm:text-base">{beskrivelse}</p>
      </article>
      {piltekst && (
        <div className="flex items-center gap-3 px-2 py-3 text-xs font-medium text-muted">
          <span className="h-px flex-1 bg-border" aria-hidden />
          <span className="uppercase tracking-wider">{piltekst}</span>
          <span className="h-px flex-1 bg-border" aria-hidden />
        </div>
      )}
    </div>
  );
}

function Modellkategorier() {
  const kategorier = [
    {
      navn: "Frontier",
      eksempler: "Claude, GPT, Gemini",
      bruk: "Generell ytelse, kreative oppgaver, åpne data",
      begrensning: "Underlagt CLOUD Act. Kun for data klassifisert som Åpen.",
    },
    {
      navn: "Norsk-hostet",
      eksempler: "Mistral hos norsk sky, NorMistral, Llama hos norsk leverandør",
      bruk: "Forvaltningsspørsmål, innbyggerdialog, kommuner",
      begrensning:
        "Lavere rå ytelse enn frontier, men full datasuverenitet i EU/EØS.",
    },
    {
      navn: "Selv-hostet",
      eksempler: "Etatens egne instanser, kjørt på deres egen infrastruktur",
      bruk: "Graderte data, saksbehandling, høy-risiko-scenarier",
      begrensning: "Krever IT-kompetanse hos etaten; full kontroll er prisen.",
    },
  ];

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Modellkategorier
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Tre kategorier — datakilden avgjør hvilke som får brukes.
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Hver datakilde-leverandør angir hvilke modellkategorier dens data
          kan brukes med. En modell utenfor godkjent liste får aldri se
          rådataene — dette håndheves i orkestratoren.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {kategorier.map((k) => (
            <article
              key={k.navn}
              className="flex flex-col border border-border p-5"
            >
              <h3 className="text-lg font-semibold tracking-tight">
                {k.navn}
              </h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                {k.eksempler}
              </p>
              <p className="mt-4 text-sm">{k.bruk}</p>
              <p className="mt-auto border-t border-border pt-3 text-sm text-muted">
                {k.begrensning}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Kjernekomponenter() {
  return (
    <section className="border-b border-border bg-subtle">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Kjernekomponenter
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Tjueltalls tjenester. Løst koblet. Åpent dokumentert.
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Teknologivalgene er forslag — endelige valg tas gjennom RFC-prosess
          med fagrådets godkjenning.
        </p>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="py-3 pr-4 font-semibold">Komponent</th>
                <th className="py-3 pr-4 font-semibold">Ansvar</th>
                <th className="py-3 font-semibold">Forslag</th>
              </tr>
            </thead>
            <tbody>
              {kjernekomponenter.map((k) => (
                <tr key={k.navn} className="border-b border-border">
                  <td className="py-3 pr-4 font-medium">{k.navn}</td>
                  <td className="py-3 pr-4 text-muted">{k.ansvar}</td>
                  <td className="py-3 text-muted">{k.forslag}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Infrastruktur() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Infrastruktur
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Norsk sky. EU/EØS-jurisdiksjon. Multi-region failover.
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <InfraBlokk
            tittel="Kjøremiljø"
            punkter={[
              "Kubernetes-klynge hos norsk sky-leverandør",
              "Multi-AZ innen Norge, failover til annen EU-region",
              "GPU-noder for inference (H100/H200-klasse eller MI300)",
              "CPU-noder for orkestrator, RAG, auth",
            ]}
          />
          <InfraBlokk
            tittel="Data"
            punkter={[
              "PostgreSQL (EU-hosted) med pgvector",
              "S3-kompatibel objektlagring for modellvekter og backups",
              "NATS eller Kafka for events (EU-hosted)",
              "Krypterte databaser (AES-256)",
            ]}
          />
          <InfraBlokk
            tittel="Nettverk"
            punkter={[
              "CDN med EU-PoPs kun for statisk innhold",
              "DDoS-skjerming via norsk nettverksleverandør",
              "TLS 1.3 for all trafikk",
              "Klient-side kryptering mulig for graderte etater",
            ]}
          />
          <InfraBlokk
            tittel="Sikkerhet"
            punkter={[
              "HSM for nøkkelforvaltning (FIPS 140-3 Level 3)",
              "Separate nøkkelrotasjoner for innbygger- og etatsdata",
              "SIEM med NSM-samsvarende SOC",
              "ISO 27001-sertifisering før lansering",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function InfraBlokk({
  tittel,
  punkter,
}: {
  tittel: string;
  punkter: string[];
}) {
  return (
    <article className="border border-border p-5">
      <h3 className="text-lg font-semibold tracking-tight">{tittel}</h3>
      <ul className="mt-4 space-y-2 text-sm">
        {punkter.map((p) => (
          <li key={p} className="flex gap-2">
            <span
              className="mt-[0.55rem] inline-block h-1 w-1 shrink-0 bg-accent"
              aria-hidden
            />
            <span className="text-muted">{p}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function Datapipelines() {
  return (
    <section className="border-b border-border bg-subtle">
      <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Datapipelines
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          15–20 etater kobles på i Fase 2.
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Alle gjennom MCP og datakontrakter. Etaten eier sin egen server
          og sine egne data. Kommuner kobles gradvis på i Fase 3 gjennom
          widget-løsningen.
        </p>

        <ul className="mt-8 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
          {datapipelines.map((d) => (
            <li
              key={d}
              className="border border-border bg-background px-4 py-3 text-sm"
            >
              {d}
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
          Dypere inn i arkitekturen.
        </h2>
        <p className="mt-4 max-w-3xl text-muted">
          Tekniske detaljer, sikkerhetsarkitektur og hvordan privat sektor
          kobler seg på.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link
            href="/sikkerhet"
            className="group border border-border p-5 transition hover:border-foreground"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold tracking-tight">
                Sikkerhet og datasuverenitet
              </h3>
              <span className="text-accent" aria-hidden>
                →
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">
              Trusselmodell, CLOUD Act, datasensitivitetsklasser.
            </p>
          </Link>
          <Link
            href="/partnerskap"
            className="group border border-border p-5 transition hover:border-foreground"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold tracking-tight">
                For privat sektor
              </h3>
              <span className="text-accent" aria-hidden>
                →
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">
              Tre roller, anskaffelsesregler, SMB-strategi.
            </p>
          </Link>
          <Link
            href="/veikart"
            className="group border border-border p-5 transition hover:border-foreground"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold tracking-tight">
                Veikart 2026–2031
              </h3>
              <span className="text-accent" aria-hidden>
                →
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">
              Fem faser, beslutningsporter, risikoregister.
            </p>
          </Link>
          <a
            href="https://github.com/trygvels/nrki"
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-border p-5 transition hover:border-foreground"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold tracking-tight">
                Kildekode
              </h3>
              <span className="text-accent" aria-hidden>
                ↗
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">
              Koden bak siden publisert som åpen kildekode.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
