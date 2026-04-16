# Styring, juridisk forankring og finansiering

For at nrki skal være demokratisk styrt må organisasjon, lovgrunnlag,
finansiering og tilsyn henge sammen. Dette dokumentet beskriver hvordan.

## Organisasjonsform

**Anbefaling:** Eget forvaltningsorgan under KDD (Kommunal- og
distriktsdepartementet), med arbeidsnavn **Riks-KI**.

**Hvorfor eget organ og ikke en avdeling i Digdir?**

nrki har en kombinasjon av egenskaper som gjør egen etat hensiktsmessig:
- **Redaksjonell uavhengighet** som i NRK, slik at dagens regjering ikke
  kan påvirke enkeltsvar eller redaksjonell linje.
- **Teknisk drift på infrastruktur-nivå** som i Kartverket eller Digdir.
- **Demokratisk legitimitet gjennom egen lov**, slik at mandatet er
  tydelig og vernet mot politiske svingninger.

Alternativ: plassering som egen enhet i Digdir. Dette kan være raskere å
etablere, men svekker redaksjonell uavhengighet.

## Juridisk hjemmel

**Anbefaling:** Ny **lov om offentlig kunstig intelligens** (tentativt
navn).

**Hovedbestemmelser:**

- **§ 1 Formål.** Allmenn offentlig KI-tjeneste, forankret i norsk
  språk, norske offentlige kilder og norske verdier. Tilgjengelig gratis
  for alle som bor i Norge.
- **§ 2 Mandat.** Hvilke tema tjenesten skal dekke, og hvordan sensitive
  tema håndteres.
- **§ 3 Uavhengighet.** Fagråd med vern mot politisk innblanding i
  enkeltsvar. Redaksjonell linje vedtas av fagrådet, ikke av regjeringen.
- **§ 4 Åpenhet.** Kildekodeplikt, evalueringsplikt, rapporteringsplikt.
  Systemprompter, datakontrakter, evalueringskriterier er offentlige.
- **§ 5 Dataforvaltning.** Offentlige etaters plikt til å eksponere
  relevante data via standardiserte grensesnitt (MCP eller tilsvarende).
- **§ 6 Finansiering.** Dekkes av statsbudsjettet. Forbud mot reklame,
  forbud mot salg av brukerdata, forbud mot betalingsmur for
  kjernetjenesten.
- **§ 7 Tilsyn.** Riksrevisjonen, Datatilsynet, og nytt KI-tilsyn (for å
  ivareta EU AI Act-krav).
- **§ 8 Klager og retting.** Innbyggere kan flagge feil og kreve svar.
  Saksbehandlingen er transparent.

Alternativ: integrere bestemmelsene i eksisterende forvaltningslov eller
i en bredere digitaliseringslov. Dette er raskere, men gir mindre
tydelighet om mandatet.

## Styringskjede

**Stortinget**
- Vedtar lov, budsjett, og overordnet mandat.
- Mottar årsmelding og kvartalsrapporter.

**KDD (Kommunal- og distriktsdepartementet)**
- Etatsstyring og resultatoppfølging.
- Har ikke myndighet over redaksjonelle beslutninger eller enkeltsvar.

**Direktør i Riks-KI**
- Daglig leder, ansatt på åremål (6 år, ikke fornybart).
- Rapporterer til KDD på administrative forhold, til fagrådet på
  redaksjonelle.

**Fagrådet**
- 13 medlemmer, 4-års åremål, oppnevnt av Stortingets presidentskap
  etter innstilling fra relevante miljøer.
- Vedtar redaksjonell linje, godkjenner modellutvalg, vurderer
  balanse-evalueringer.

**Sammensetning:**
- 3 fra akademia (språkforskning, informatikk, KI-etikk)
- 2 fra sivilsamfunn (brukerorganisasjoner, digitale rettigheter)
- 2 fra språkmiljøer (nynorsk, samisk)
- 3 fra etatene (roterende representasjon)
- 2 fra næringsliv (IKT-Norge, Tekna)
- 1 fra journalistfaglig hold

## Tilsyn

- **Riksrevisjonen** — ordinær forvaltningsrevisjon og resultatrevisjon.
- **Datatilsynet** — GDPR-overholdelse, DPIA-godkjenninger.
- **KI-tilsyn** — EU AI Act krever et nasjonalt tilsyn for høyrisiko-
  KI-systemer. Dette kan være en ny funksjon, eller plasseres hos
  Datatilsynet.
- **Åpen feil-database** — alle feilhenvendelser, flaggede svar og
  retteprosesser er offentlig.

## Finansiering — grove størrelsesordener

| Fase | Tidsrom | Årlig drift | Hovedposter |
|---|---|---|---|
| 0 — Utredning | 0–6 mnd | 30–50 mill | Sekretariat, utredning, høring |
| 1 — Fundament | 6–18 mnd | 200–300 mill | Oppbygging, tidlig infrastruktur, pilotavtaler |
| 2 — Teknisk pilot | 18–36 mnd | 400–600 mill | GPU-kapasitet, fine-tuning, team, beta |
| 3 — Lansering | 36–48 mnd | 600–900 mill | Full drift, skalert inference, 50–100 datakilder |
| 4+ — Modent | 48+ mnd | 700–1000 mill | Kontinuerlig utvikling, økosystem |

**Sammenligninger:**
- NRK: ~7 milliarder kroner per år
- Digdir: ~1 milliard kroner per år
- Kartverket: ~1,4 milliarder kroner per år
- SSB: ~0,8 milliarder kroner per år

Riks-KI i modnet tilstand er realistisk på størrelse med Kartverket eller
10–15 prosent av NRK. Dette er infrastruktur-nivå, ikke megaprosjekt.

## Åpenhetsrapporter

- **Månedlige driftsindikatorer** (bruk, oppetid, feilrater) — publiseres
  automatisk.
- **Kvartalsrapporter** til Stortinget og offentligheten — bruk,
  forbedringer, økonomi, sikkerhetshendelser, balanse-evalueringer.
- **Årsmelding** — overordnet status, strategiske veivalg, planer.
- **Ekstern revisjon** — uavhengige teknisk-akademiske revisjoner
  annethvert år, gjennomført av forskningsmiljøer med åpent mandat.

## Vern mot kommersialisering

Loven forankrer prinsippene om:
- ingen reklame i grensesnittet
- ingen videresalg av brukerdata
- ingen betalingsmur for kjernetjenester
- ingen kommersialisering av API for formål som undergraver allmenn
  tilgang

Partnere og leverandører som selger tjenester *bygd på* nrki står fritt,
men selve plattformen er offentlig og gratis.

## Vern mot politisk innblanding

- Redaksjonell linje vedtas av fagrådet, ikke av KDD eller regjeringen.
- Direktør ansettes på åremål og kan ikke avsettes av politiske årsaker
  uten stortingsvedtak (parallelt med Riksrevisor-modellen).
- Endringer i lov krever ordinær lovbehandling; instrukser fra KDD kan
  ikke overstyre loven.
- Alle systemprompter og redaksjonelle retningslinjer er offentlige, slik
  at politisk innblanding ville vært synlig umiddelbart.

## Åpne spørsmål

- Skal fagrådet ha vetorett, eller bare rådgivende rolle?
- Hvor ofte skal modellvalg revideres — årlig, halvårlig, kontinuerlig?
- Hva er riktig balanse mellom internt utviklingsarbeid og innkjøp fra
  privat sektor?
- Hvordan håndtere at EU AI Act krever et KI-tilsyn — nytt organ eller
  utvidelse av Datatilsynet?

Disse spørsmålene avklares gjennom NOU-prosessen i Fase 0 og gjennom
lovforberedelsen frem mot Fase 3.
