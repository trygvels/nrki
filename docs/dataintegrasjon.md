# Dataintegrasjon: hvordan offentlige etater kan bidra

Hele poenget med nrki er at tjenesten skal forankre svar i verifiserte
offentlige kilder. Det krever at etatene — frivillig — gjør data
tilgjengelig i en form som nrki kan jobbe mot.

Dette dokumentet er et første utkast til hva det innebærer.

## Prinsipper for integrasjon

1. **Data skal være åpne.** nrki skal ikke være avhengig av avtaler som
   hindrer andre i å bruke samme data.
2. **Data skal være strukturerte.** Fritekst i PDF-er er ubrukelig for
   presise svar. API-er, JSON, CSV eller maskinlesbar HTML er nødvendig.
3. **Data skal ha tydelig herkomst og versjonering.** nrki må kunne peke på
   nøyaktig versjon av en regel eller sats som svaret er basert på.
4. **Data skal ha en ansvarlig eier.** Når noe er feil, må det være tydelig
   hvem som retter det.

## Tre modenhetsnivåer

### Nivå 1 — Kilde-oppdaget

nrki-indekserer offentlige nettsider til etaten. Svar kan lenke til riktig
side, men kan ikke siteres presist. Eksempel: «Se lanekassen.no/studielan».

**Egnet for:** Alle offentlige etater, som en start.

### Nivå 2 — Strukturerte lesbare data

Etaten publiserer nøkkelinformasjon i maskinlesbar form (API, JSON, CSV).
nrki kan nå gi eksakte tall og sitere konkrete paragrafer. Eksempel:
skattesatser fra Skatteetaten, studiestøttesatser fra Lånekassen.

**Egnet for:** Etater med klart avgrensede datasett.

### Nivå 3 — Integrert kunnskapsbase

Etaten samarbeider aktivt med nrki om å kvalitetssikre modellens svar
innenfor sitt ansvarsområde. Feil flagges og rettes systematisk. Eksempel:
NAV som medansvarlig for at ytelses- og trygdespørsmål besvares riktig.

**Egnet for:** Etater hvor feil i svar har store konsekvenser (helse,
trygd, skatt, rettigheter).

## Teknisk minstekrav (forslag)

For å fungere på nivå 2 bør en etat kunne tilby minst dette:

- **Et dokumentert API eller datasett** (OpenAPI/JSON-spesifikasjon).
- **Klart definerte dataklasser** (f.eks. `Sats`, `Tjeneste`, `Frist`,
  `Rettighet`), hver med stabile ID-er.
- **Versjonering**: hvert datapunkt har en `gyldigFra` og en kildehenvisning.
- **Oppdateringsfrekvens** som er kjent og respektert.
- **En teknisk kontakt** som kan svare på spørsmål innen rimelig tid.

## Kandidatdatasett — første iterasjon

Disse områdene har stor nytte og relativt avgrensede data:

| Etat | Eksempel på datasett | Hvorfor viktig |
|---|---|---|
| Skatteetaten | Skattesatser, fradrag, frister | Spørsmål stilles konstant |
| Lånekassen | Satser, søknadsregler, tilbakebetalingsregler | Direkte praktisk nytte for studenter |
| NAV | Ytelser, vilkår, søknadsprosesser | Hjelper de som trenger det mest |
| Helsedirektoratet | Pasientrettigheter, egenandeler | Redusere forvirring om rettigheter |
| Husbanken | Bostøtte, regler, satser | Viktig for økonomisk utsatte |
| SSB | Nøkkeltall (befolkning, økonomi, utdanning) | Faktabasert samfunnsdebatt |
| Lovdata | Lovtekst og forskrifter | Presise juridiske henvisninger |
| Stortinget | Partiprogrammer, representanter | Nøytral politisk orientering |

## Hvem tar ansvar for datakvalitet?

**Etaten eier sitt eget data.** nrki ikke bare tilgjengeliggjør, men også
speiler og versjonerer data. Hvis Skatteetaten endrer en sats, må endringen
være synlig i nrki innen rimelig tid. Ansvarslinjene skal være klare, slik
at feil kan rettes raskt, og slik at det er kjent hvilken versjon av en
regel et bestemt svar var basert på.

## Hvordan komme i gang?

Er du i en offentlig etat og tenker at dette kunne vært nyttig? Åpne et
[issue på GitHub](https://github.com/trygvels/nrki/issues/new) eller ta
kontakt på e-post (kontaktadresse publiseres snart). Et lite pilotsamarbeid
er det beste stedet å starte.
