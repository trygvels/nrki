# Teknisk komponentinventar

Dette dokumentet beskriver de tekniske komponentene som må bygges og
driftes for at nrki skal fungere. Teknologivalgene er forslag — endelige
valg tas i samråd med fagmiljøene i Fase 1 og 2.

## Kjernetjenester

nrki består av et tjueltalls tjenester som samarbeider. Hver tjeneste er
løst koblet, åpent dokumentert, og kan erstattes uten at resten må
omskrives.

| Komponent | Ansvar | Teknologiforslag |
|---|---|---|
| Orkestrator | Spørsmålsruting, kategorisering, policyhåndheving | Go eller Rust (ytelse + robusthet) |
| MCP-klient og serverregister | Snakker med etaters MCP-servere, vedlikeholder godkjent liste | TypeScript (matcher MCP-økosystemet) |
| Modellrouter | Velger modell basert på datakilde-godkjenning | Go |
| RAG-pipeline | Henting (hybrid: vektorsøk + BM25), re-ranking, context-bygging | Python + pgvector eller Qdrant |
| Eval-harness | Kontinuerlig evaluering, red teaming, claim-verifikasjon | Python |
| Policy-tjeneste | Systemprompt, redaksjonell linje, kategorisering | Versjonert i Git, håndhevet i orkestrator |
| Kilde-renderer | Viser kilder til sluttbruker (klikkbare, versjonsstemplet) | Next.js frontend |
| Auth-layer | ID-porten for innbyggere, Maskinporten for etater | Standard OIDC, Difi-komponenter |
| Hooks-dispatcher | Sender hendelser til etaters callbacks | Go + signerte webhooks |
| Observability | Tracing, logging, metrics | OpenTelemetry → Grafana/Prometheus/Loki |
| SIEM | Sikkerhetshendelser og loggaggregering | Wazuh eller kommersielt via SOC-avtale |
| Sandbox-miljø | Etater tester svar mot egne data før produksjon | Isolert K8s-namespace per etat |
| Feedback-tjeneste | Flagging av feil, klager, retting | Django eller liknende CMS-aktig |
| Admin-dashboard | For nrki-team og fagråd — eval-resultater, driftsstatus | Next.js |

## Infrastruktur

**Kjøremiljø:**
- Kubernetes-klynge hos norsk sky-leverandør (se `partnerskap.md`).
- Multi-AZ innen Norge, failover til annen EU-region.

**Beregning:**
- GPU-noder for inference — NVIDIA H100 eller H200-klasse, eventuelt
  AMD MI300. Valg avhenger av modelldimensjon og økonomi.
- CPU-noder for orkestrator, RAG, auth, og ikke-GPU-tjenester.

**Data:**
- Primær transaksjonell datalager: PostgreSQL (EU-hosted), med pgvector-
  utvidelse for embedding-søk.
- Objektlagring: S3-kompatibel (MinIO eller norsk ekvivalent), for
  modellvekter, artefakter, backups.
- Event bus: NATS eller Kafka (EU-hosted) for hendelser mellom
  tjenester.

**Nettverk:**
- CDN med EU-PoPs (Cloudflare EU, Fastly EU, eller norsk leverandør) —
  kun for statisk innhold, aldri samtaleinnhold.
- DDoS-skjerming via norsk nettverksleverandør.

**Sikkerhet:**
- HSM for nøkkelforvaltning (FIPS 140-3 Level 3 eller tilsvarende).
- Klient-side kryptering mulig for gradert-klassifiserte etater.

## Utviklerverktøy for etater og tredjeparter

- **MCP-server-SDK** i TypeScript, Python og Go. Enklere å publisere en
  MCP-server enn å skrive et nytt REST-API.
- **Datakontrakt-validator** — JSON Schema v2020-12-basert verifikasjon,
  både som CLI og som GitHub Action.
- **Sandbox-dashboard** — etater kan teste hvordan ulike modellkategorier
  svarer på deres data, uten å eksponere data til produksjon.
- **Evaluation Viewer** — resultater av red teaming og
  nøytralitetsevaluering, offentlig tilgjengelig.
- **Utviklerportal** — dokumentasjon, eksempler, endringslogg, kontakt.

## Datapipelines (Fase 2-oversikt)

15–20 pipelines etableres i Fase 2, alle gjennom MCP og datakontrakter.

- **Lovdata** — lover, forskrifter, rundskriv
- **Skatteetaten** — satser, fradrag, frister, tabeller
- **Lånekassen** — satser, regelverk, tilbakebetaling
- **NAV** — ytelser, vilkår, søknadsprosesser
- **Helsedirektoratet** — pasientrettigheter, egenandeler, veiledere
- **Husbanken** — bostøtte, låneordninger, regler
- **SSB** — nøkkeltall (befolkning, økonomi, utdanning, helse)
- **Stortinget** — partiprogrammer, voteringer, representanter
- **Difi/Digdir** — felleskomponentinfo, ID-porten
- **Kartverket** — adresser, eiendom (offentlige data)
- **Brønnøysundregistrene** — foretaksinformasjon (kun åpne data)
- **Arkivverket** — referanser og historisk materiale
- **Statsforvalteren** — kommunerelaterte beslutninger
- **UDI** — informasjon for søkere (offentlig del)
- **Forbrukerrådet** — rettigheter og veiledning

Kommuner kobles gradvis på gjennom widget-løsningen i Fase 3, med en
egen crawler + MCP-server per kommune.

## Modellvekter — hvor de kommer fra

- **Frontier** (Claude, GPT, Gemini) — API-basert, brukes kun for åpne
  data. Sandkasset i egen modellrouter-sti.
- **Norsk-hostet åpen-vekt** — Mistral, NorMistral, Llama eller Gemma,
  fine-tuned for norsk forvaltning og språk. Kjøres hos norske
  infrastrukturleverandører.
- **Selv-hostet** — etatenes egne instanser, på deres egen
  infrastruktur. nrki tilbyr arkitektur, fine-tuning og evaluering,
  etaten drifter.

Fine-tuning-pipeline er åpen: korpus, prosedyre, vektspeiling. Hver
fine-tuned modell har offentlig dokumentasjon av treningsdata og
evalueringsresultat.

## Grovt dimensjonert (Fase 3-start)

- **Volum:** 5–10 millioner spørringer per måned ved lansering.
  50+ millioner i Fase 4.
- **GPU-kostnad:** størrelsesorden 50–150 millioner kroner per år ved
  full drift, avhengig av om det brukes egentrent modell eller tunet
  åpen-vekt.
- **Bemanning:** 80–150 årsverk i modnet tilstand, med topp på 150–180 i
  overgangsfasen mellom 3 og 4.
- **Total utviklingsinnsats over 5 år:** 150–250 årsverk kumulativt.

## Åpen kildekode — hva som publiseres

Alt relevant for drift og evaluering:
- Orkestrator, modellrouter, MCP-klient
- Eval-harness og testsett (med opplagt unntak for sensitive red teaming-
  dataset)
- Policy-tjenesten og redaksjonell linje
- Datakontrakt-skjemaer
- SDK-er og utviklerverktøy

Det som ikke publiseres: operasjonelle hemmeligheter (API-nøkler,
infrastrukturkonfigurasjon som ville gitt angripere fordel), og
personopplysninger.

## Åpne spørsmål

- Rust eller Go for orkestratoren? Rust gir mer sikkerhet i
  minnehåndtering, Go er lettere å rekruttere til.
- pgvector eller dedikert vektorbase (Qdrant, Weaviate)? Avhenger av
  skaleringsbehov og driftspreferanser.
- Skal eval-harness kjøre kontinuerlig i produksjon, eller bare ved
  releaser? Kontinuerlig gir tidligere varsling, men koster mer.
- Bør det være én sentral RAG-pipeline, eller én per dataområde?

Endelige arkitekturvalg tas gjennom RFC-prosess i det åpne repoet, med
fagrådets godkjenning for vesentlige valg.
