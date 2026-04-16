# Privat sektor — hvordan nrki bygges sammen med norsk IKT-næring

nrki er offentlig finansiert og offentlig styrt. Men det betyr ikke at
alt skal bygges i egen regi. Snarere tvert imot: plattformen skaper
etterspørsel, og den etterspørselen skal hovedsakelig dekkes av norsk og
europeisk privat sektor.

Dette dokumentet beskriver hvilke roller private leverandører kan ha,
hvilke krav som følger med, og hvordan små norske tech-miljøer kan koble
seg på.

## Utgangspunkt: plattform, ikke konkurrent

nrki skal ikke konkurrere med norsk IKT-næring. Den skal ikke bygge
kommune-chatbotene som i dag leveres av private selskaper — den skal
tilby en åpen plattform som gjør det billigere, tryggere og mer forenlig
for disse selskapene å levere gode løsninger. Slik `Vipps BankAxept` og
`BankID` gjorde det enklere for norsk banknæring, skal nrki gjøre det
enklere for norsk KI-næring.

## Tre roller for private leverandører

### Rolle 1 — Infrastrukturleverandører

**Hva:** Hosting av GPU-klynger, inference-endepunkter, databaser og
datasentertjenester.

**Norske og nordiske kandidater:**
- **Sky.no** — norsk sky med KI-fokus
- **TietoEVRY** — stor norsk driftsleverandør
- **Bulk Infrastructure** — datasentre i Bodø og Kristiansand
- **Altibox** — norsk nettverk og datasentertjenester
- **Green Mountain** — datasentre drevet på fornybar kraft
- **Basefarm/Orange Business** — nordisk drift

**Utvelgelse:**
- Rammeavtaler med minst tre leverandører samtidig.
- Roterende tildeling av kapasitet, ingen får mer enn 40 prosent av
  samlet volum.
- Krav: datasenter i Norge eller tilgrensende EU/EØS-område, norsk
  juridisk enhet, ISO 27001, uavhengig av amerikansk morselskap for
  grunnleggende drift.

### Rolle 2 — Modell-leverandører

**Hva:** Levering og vedlikehold av basemodeller (åpen-vekt) som
nrki fine-tuner for norske formål.

**Kandidater:**
- **Mistral AI** (Frankrike) — EU-baserte åpen-vekt-modeller
- **NorLLM / NorGPT** — Nasjonalbibliotekets norske modeller
- **Meta Llama** — åpen-vekt (med de forbehold som gjelder opphav)
- **Google Gemma** — åpen-vekt
- Fremtidige norske og europeiske initiativ

**Utvelgelse:**
- Teknisk evaluering på en norsk benchmark-pakke (utviklet i samarbeid
  med Språkbanken og NTNU).
- Rammeavtale om lisens, oppdateringer, støtte for fine-tuning.
- Frontier-kategorien (Claude, GPT, Gemini) brukes kun for åpne data og
  med eksplisitt klassifisering, og er alltid valgfri — aldri påkrevd.

### Rolle 3 — Applikasjons- og integrasjonsleverandører

**Hva:** Bygger widgets for kommuner, saksbehandler-verktøy,
domenespesifikke apper, bransjespesifikke løsninger.

**Kandidater:** Norske konsulentmiljøer (Bekk, Capgemini, Knowit, Bouvet,
Kantega, Variant, Computas, Sopra Steria), SMB-er, oppstartsselskaper,
forskningsbaserte spinoffer.

**Hva nrki tilbyr:**
- Åpent API og SDK-er i TypeScript, Python, Go.
- Sandbox-miljø hvor leverandører kan teste mot reelle datakilder.
- Sertifiseringsprogram — "nrki Certified Integrator" — som gir
  leverandører en tydelig profil.
- Kompensasjonsprogram for vesentlige bidrag til åpen kildekode.

## Anskaffelsesregler

- Alle større avtaler utlyses via offentlig anbud etter lov om offentlige
  anskaffelser (LOA) og forskrift (FOA).
- Rammeavtaler løper maks fire år, med toårs opsjon inntil to ganger.
- Teknisk kravspekk spesifiserer åpne standarder: **MCP**, OCI-containere,
  OpenAPI, JSON Schema. Proprietære format tillates ikke som eneste vei
  inn.
- Transparent prisbok publiseres offentlig, slik at andre etater og
  leverandører kan bruke samme priser som referanse.

Disse reglene sikrer at en leverandør som mister kontrakten kan byttes ut
uten å rive resten av stacken. Hele arkitekturens verdi hviler på dette.

## Hvordan små norske tech-firmaer kobler seg på

**MCP-server-leverandør.** Fullt selvbetjent prosess: registrer seg,
publiser endepunkt, bli vurdert, kom på godkjent liste. Små etater eller
kommersielle aktører som har nyttige datakilder kan tilby dem uten å gå
gjennom et komplisert anbud.

**Bygg på nrki-API.** Tenk på nrki som Stripe eller Twilio for offentlig
KI i Norge — en plattform du bygger produktet ditt på toppen av. Gratis
for bruk som er kompatibelt med lisensen.

**Bidrag til kjerneprosjektet.** Åpen kildekode-kontribusjoner med
kompensasjon ved vesentlige forbedringer. Ansatte hos private firmaer som
bidrar vesentlig kan få stipend eller konsulentoppdrag.

**Forskningspartnerskap.** Universiteter og forskningsmiljøer (Simula,
NTNU, UiO, UiB, NR, SINTEF) kan få finansiering for spesifikke forsknings-
spørsmål — språkkvalitet i nynorsk, samiske språk, sikkerhetsevaluering,
fairness, m.m.

## Eksempel — Fullstack samarbeid

> Skatteetaten publiserer MCP-server hos **Sky.no**.
> Orkestratoren kjører hos **TietoEVRY**.
> Basemodellen er **NorMistral** fine-tuned med støtte fra **NTNU**.
> Oslo kommune embedder en widget bygget av **Kantega** på oslo.kommune.no.
>
> Ingen av disse leverandørene er låst inne. Skatteetaten kan flytte
> MCP-serveren sin til en annen leverandør. nrki kan flytte orkestratoren.
> Oslo kommune kan bytte integrasjonspartner. Grensesnittet er det
> samme — MCP og åpne standarder — så bytter er et driftsprosjekt, ikke
> en migrasjon.

Dette er selve poenget med åpen arkitektur. Hver enkelt aktør leverer
sin bit, og kan erstattes uten at noen annen del må bygges om.

## Konkurranse og nøytralitet

nrki-etaten har ingen eier blant leverandørene, mottar ingen royalties, og
velger ikke "sin favoritt" basert på kommersielle hensyn. Beslutninger om
modellvalg, infrastrukturvalg og integrasjonspartnere tas på grunnlag av
teknisk evaluering, pris og dokumentert leveranseevne — og utvelgelsene er
offentlige og kan etterprøves.

## Hvordan komme i gang — for leverandører

Åpne et [issue på GitHub](https://github.com/trygvels/nrki/issues/new) eller
ta kontakt når kontaktadresse publiseres. I Fase 1 prioriterer vi
pilotpartnerskap med infrastruktur- og modellleverandører. I Fase 2 åpnes
sandbox for applikasjonsleverandører.
