# Veikart — fra manifest til infrastruktur

Dette dokumentet beskriver hvordan nrki kan bygges opp over fem år, fra
politisk forankring til et modent økosystem. Tallene er grove
størrelsesordener, ikke vedtatte budsjetter. Rekkefølgen og prinsippene er
det viktige — detaljene justeres når fagmiljøer, Stortinget og etatene er
koblet inn.

## Prinsippet: fase før funksjon

En tjeneste som vil være infrastruktur for alle i Norge kan ikke lanseres
ferdig på dag én. Hver fase har tydelige mål, tydelige beslutningsporter,
og etterfølgende faser forutsetter at den forrige er kvalitetssikret av
fagrådet og rapportert til Stortinget. Bedre å bruke 12 måneder lenger enn
å lansere en tjeneste som gir dårlige svar om trygd eller rettigheter.

## Fase 0 — Politisk forankring (0–6 måneder)

**Mål:** Få Stortinget og en regjering til å bestille utredning.

- Stortingsmelding eller NOU-utredning bestilles fra
  Kommunal- og distriktsdepartementet (KDD).
- Foreløpig sekretariat (3–5 personer) plasseres hos Digdir, med
  tilknytning til Nasjonalbibliotekets AI-lab.
- Høringsrunde med etater, akademia, sivilsamfunn, IKT-Norge, Tekna.
- Sammenligning med eksisterende europeiske initiativ (BSC i Spania,
  IT4Innovations i Tsjekkia, Frankrikes planer rundt Mistral).

**Initialbudsjett:** 30–50 millioner kroner.

**Port til Fase 1:** Stortingsvedtak eller konkret oppdragsbrev fra KDD.

## Fase 1 — Fundament (6–18 måneder)

**Mål:** Etablere organisasjonen, få fagrådet på plass, og starte tre
konkrete pilotsamarbeid.

- Forvaltningsorgan etableres. Anbefalt modell: eget organ under KDD med
  arbeidsnavn **Riks-KI**. Alternativt en egen avdeling under Digdir.
- Kjerneteam på 15–25 personer:
  - Modell-team: 4–6 personer (forskning, fine-tuning, evaluering)
  - Infrastruktur: 3–5 personer (drift, SRE, sikkerhet)
  - Datakontrakter og integrasjon: 4–6 personer
  - Sikkerhet og personvern: 2–3 personer
  - Redaksjonell og policy: 2–3 personer
  - Kommunikasjon og etatsrelasjoner: 1–2 personer
- Fagråd oppnevnes — se [`styring.md`](styring.md) for sammensetning.
- Åpen referansearkitektur publiseres på GitHub.
- Pilotavtaler med tre etater:
  - **Skatteetaten** — satser, fradrag, frister (høyt volum, strukturert).
  - **Lånekassen** — stipend- og lånesatser (mindre sensitivt, klart
    avgrenset).
  - **Lovdata** — lover og forskrifter (allerede åpne data, juridisk
    presisjon).

**Årlig drift:** 200–300 millioner kroner.

**Port til Fase 2:** Pilotetatene har MCP-servere i sandbox, fagrådet har
vedtatt redaksjonell linje v1, og referansearkitektur er evaluert av minst
to uavhengige fagmiljøer.

## Fase 2 — Teknisk pilot (18–36 måneder)

**Mål:** Bygge noe som faktisk virker, evaluere grundig, og la et begrenset
antall brukere teste i praksis.

- MCP-servere fra pilotetatene i produksjon, med datakontrakter versjonert.
- Modellvalg gjennom strukturert evaluering:
  - Kandidater: NorMistral, NorLLM, Llama fine-tuned for norsk,
    Mistral-Large, Gemma.
  - Benchmark: norsk offentlig forvaltning, juridisk presisjon, politisk
    nøytralitet, bokmål/nynorsk-kvalitet.
- Norsk fine-tuning med korpus fra Språkbanken, stortingsdokumenter,
  Lovdata.
- RAG-infrastruktur i drift (hybrid: vektorsøk + BM25 + re-ranking).
- Lukket beta med 5 000–10 000 testbrukere, autentisert via ID-porten.
- Red teaming-syklus etablert, med ekstern leverandør og interne team.
- Første offentlige kvartalsrapport til Stortinget.

**Årlig drift:** 400–600 millioner kroner (økt GPU-kapasitet drar opp).

**Port til Fase 3:** Fagrådet godkjenner balanse-evalueringen, feilraten på
fakta er under definert terskel, og Datatilsynet har godkjent
personvernmodellen (DPIA).

## Fase 3 — Offentlig lansering (36–48 måneder)

**Mål:** Tjenesten åpnes for alle som bor i Norge.

- Full produksjon for innbyggere, med åpen tilgang via nettside og
  ID-porten-innlogging for personaliserte svar.
- Widget-løsning for kommuner — én linje HTML, beskrevet i
  [`for-kommuner.md`](for-kommuner.md).
- Hooks-API åpnes for etater, beskrevet i [`standarder.md`](standarder.md).
- 50–100 datakilder tilkoblet: alle de store etatene og 20–30 kommuner.
- Lov om offentlig kunstig intelligens trer i kraft — se
  [`styring.md`](styring.md).

**Årlig drift:** 600–900 millioner kroner.

**Til sammenligning:** NRK har rundt 7 milliarder per år. Digdir har rundt
1 milliard. Kartverket har rundt 1,4 milliarder. Riks-KI i modnet tilstand
er realistisk på størrelse med Kartverket eller 10–15 prosent av NRK.

## Fase 4 — Økosystem og modning (48+ måneder)

**Mål:** Bli en plattform andre bygger på, ikke bare en chatbot.

- Tredjepartsapper på nrki-API — kommersielle og offentlige aktører bygger
  saksbehandler-verktøy, spesialiserte utdanningsapper, forskerverktøy.
- Samiske språk i full støtte — nordsamisk først, så lule- og sørsamisk.
- EU-samarbeid gjennom felles åpne modeller og datakontrakt-standarder.
  Koordinering med initiativ i Frankrike, Tyskland, Finland.
- Utveksling av modeller og evalueringer mellom offentlige KI-initiativ i
  EU.

**Årlig drift:** 700–1000 millioner kroner (noe reduksjon per spørring
etter hvert som infrastruktur modner).

## Beslutningsporter

Ved hver faseovergang rapporteres kvantitative kriterier til Stortinget:

- brukervekst og geografisk fordeling
- feilrate på fakta (målt mot evalueringssett)
- andel svar med kildebelegging
- resultater fra partipolitisk balanse-evaluering
- personvernhendelser og responstid ved avvik
- åpenhet — antall kildekodebidrag, antall uavhengige revisjoner

Manglende oppfyllelse utløser forlengelse av foregående fase, ikke
videreføring med svakheter.

## Risikoregister (topp 5)

| Risiko | Tiltak |
|---|---|
| Politisk vilje svekkes før Fase 2 er ferdig | Lovforankring tidlig i Fase 1, flerårige budsjettavsetninger i statsbudsjettet |
| Modellutviklingen holder ikke følge med frontier | Modellagnostisk arkitektur, evalueringsramme som gjør modellbytte mulig hvert halvår |
| Etatene bidrar ikke med data | Forskrift under Digdir som krever åpne MCP-servere for offentlige data; pilotetatene får støtte til integrasjon |
| Datatilsynet stopper personvernopplegget | Tidlig forhåndsgodkjenning (DPIA) i Fase 1, kontinuerlig dialog |
| Rekrutteringsutfordringer i et hett KI-marked | Partneravtaler med Simula, NTNU, UiO, UiB for deltagelse fra forskere; konkurransedyktige rammer innenfor statlig lønnsregulativ |

## Åpne spørsmål

- Skal Fase 3 kreve fullstendig lovvedtak, eller kan en pilotforskrift
  åpne for begrenset lansering?
- Hvordan håndtere at frontier-modellene sannsynligvis blir mye bedre i
  løpet av femårsperioden — når bytter vi?
- Hvor mye av utviklingen skal skje internt, og hvor mye hos
  forskningsmiljøer eller private leverandører?

Dette veikartet oppdateres etter hvert som beslutninger tas og
forutsetningene endres.
