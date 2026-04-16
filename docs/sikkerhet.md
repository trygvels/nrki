# Sikkerhet og datasuverenitet

Sikkerhet er ikke et kapittel på slutten. Det er et design-premiss i hver
del av nrki. Dette dokumentet beskriver trusselmodellen, hvordan data
klassifiseres, og hvilke tiltak som følger av det.

## Hvorfor datasuverenitet er et sikkerhetsspørsmål

Den viktigste kommersielle KI-infrastrukturen i dag er amerikansk. Det er
ikke et problem i seg selv — det amerikanske økosystemet har levert
fenomenale modeller. Problemet er **CLOUD Act**: amerikanske myndigheter
kan kreve utlevering av data fra selskaper under amerikansk jurisdiksjon,
uavhengig av hvor dataene er lagret. For offentlige norske data — særlig
personopplysninger og sensitiv forvaltningsinformasjon — er det en risiko
som ikke kan avtalefestes bort.

Løsningen er ikke å nekte bruk av frontier-modeller, men å klassifisere
data og la klassifiseringen avgjøre hvilke modellkategorier som får se
hva.

## Datasensitivitetsklasser

Tre klasser, inspirert av NSMs grunnprinsipper for IKT-sikkerhet:

### Åpen
**Eksempler:** Lovdata, Stortingets partiprogrammer, SSB-nøkkeltall,
offentlige veiledere fra Helsedirektoratet.

**Tillatte modellkategorier:** `frontier/*`, `norsk-hostet/*`,
`selv-hostet/*`.

**Hvorfor:** Disse dataene er offentlige uansett — ingen ytterligere
skade kan skje.

### Begrenset
**Eksempler:** Innbygger-samtaler om skatt, NAV-ytelser, helse,
økonomi. Personlige spørsmål uten identifikasjon.

**Tillatte modellkategorier:** `norsk-hostet/*`, `selv-hostet/*`.

**Hvorfor:** Selv om spørsmålet i seg selv kanskje er dagligdags, er det
innbyggerens rett at hele dialogen forblir i norsk/europeisk jurisdiksjon.
Frontier-modeller er ikke tillatt.

### Gradert
**Eksempler:** Personopplysninger i pågående forvaltningssaker, helse-
opplysninger koblet til person, data fra etater med egne lovverk
(Folkeregisteret, helsesektorens kjernejournal).

**Tillatte modellkategorier:** Kun `selv-hostet/*`.

**Hvorfor:** Data som aldri forlater etatens egen instans. nrki tilbyr
arkitekturmønsteret, men etaten kjører det selv.

Orkestratoren håndhever disse reglene. En modell utenfor godkjent liste
for en ressurs får aldri se rådataene — ikke ved oppslag, ikke via
verktøykall, ikke via context window.

## Trusselmatrise

| Trussel | Tiltak |
|---|---|
| CLOUD Act-utlevering | Modellrouter håndhever datakildens godkjenningsliste. Begrenset- og gradert-data møter aldri frontier-modeller. |
| Leverandørlås | Modellagnostisk arkitektur, MCP for data, minimum tre parallelle leverandørkontrakter. |
| Modellskade (hallusinasjon) | RAG-tvang for faktapåstander, `<kilde-rå>`-tag for sensitive sitater, automatisert kontroll av at påstander finnes i kildene. |
| Brudd på personvern | Pseudonymisering ved logging, minimal retensjon (30 dager default), EU/EØS-hosting, DPIA før hver funksjon. |
| Prompt injection | Input-sanering, systemprompt isolert i egen pipeline, output-filtrering før verktøybruk. |
| Desinformasjon og manipulasjon | Råformat-tag for partipolitikk, uavhengig balansepanel (valgforskere) evaluerer kvartalsvis. |
| Tilgjengelighetsangrep (DoS) | Multi-region failover innen EU, ratelimit per ID-porten-bruker, norsk DDoS-skjerming via nettverksleverandør. |
| Supply chain-angrep | Åpen kildekode, SBOM for hver utgivelse, signerte artifakter (Sigstore), reproduserbare bygg. |

## Sikkerhetsoperasjoner

- **NSM-samsvarende SOC** — enten i egen regi, eller partneravtale med
  norsk leverandør (Telenor Cyberdefence, Mnemonic, eller tilsvarende).
- **ISO 27001-sertifisering** før lansering i Fase 3.
- **Koordinert sårbarhetsrapportering (CVD)** fra Fase 2 — publisert
  policy, bug bounty-program i samarbeid med NSM.
- **Pliktig avviksvarsling** til Datatilsynet innen 72 timer ved
  personvernhendelser (GDPR art. 33).
- **Red teaming** før hver modellversjon — både interne eksperter og
  uavhengige eksterne.

## Samsvar

- **GDPR:** behandlingsgrunnlag (art. 6), særlige kategorier (art. 9),
  automatiserte avgjørelser (art. 22), DPIA (art. 35). Databehandleravtaler
  med alle underleverandører.
- **EU AI Act:** nrki er sannsynligvis en "high-risk"-applikasjon pga.
  offentlig tjeneste til borgere med relevans for rettigheter og
  ytelser. Krever konformitetsvurdering, registrering, og løpende
  risikostyring.
- **eIDAS2:** integrasjon med ID-porten og det europeiske
  eIDAS-rammeverket.
- **Sikkerhetsloven:** vurdering av om nrki er "grunnleggende nasjonal
  funksjon". Hvis ja, følger egne krav til beredskap og skjerming.

## Personvern i praksis

- **Minimal logging.** Samtaleinnhold lagres ikke lenger enn nødvendig for
  drift og evaluering. Default: 30 dager, deretter pseudonymisert
  aggregat.
- **Bruker-initiert sletting.** Innbygger kan slette sin egen samtale-
  historikk fra eget dashboard.
- **Opt-ut fra evaluering.** Brukere kan velge å ikke la samtaler brukes i
  evalueringsdatasett, selv i anonymisert form.
- **Ingen profilering på tvers av sesjoner** uten eksplisitt samtykke.
- **Transparens.** Hver innbygger kan se hva som er lagret om seg, og
  hvilke datakilder som ble spurt i hvert svar.

## Krypteringsarkitektur

- TLS 1.3 eller nyere for all trafikk.
- Krypterte databaser (AES-256) i hvile.
- Nøkkelforvaltning i HSM (FIPS 140-3 Level 3 eller tilsvarende).
- Separate nøkkelrotasjonsregimer for innbyggerdata og etatsdata.
- Klient-side kryptering for særlig sensitive etater som ønsker det.

## Åpne spørsmål

- Bør selv-hostet-instanser dele evalueringsdata tilbake til nrki-fellesskapet,
  eller er det for sensitivt?
- Hvor aggressivt skal output-filtrering være — høyere filter reduserer
  skade, men svekker nytteverdi?
- Skal det være mulig å bruke nrki fullstendig anonymt, eller kreves det
  ID-porten for visse typer spørsmål?

Sikkerhetsmodellen oppdateres løpende, og hver vesentlig endring
publiseres i åpenhetsrapporten.
