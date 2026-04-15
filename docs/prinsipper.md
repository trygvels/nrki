# Prinsipper

nrki skal bygges på seks prinsipper. De er ikke markedsføringsuttrykk — de
skal være tekniske og organisatoriske krav som tjenesten kan evalueres mot.

## 1. Trygg

**Hva det betyr:** Tjenesten skal ikke gi skadelig, villedende eller farlig
veiledning, særlig på helse, økonomi, rettigheter og psykisk helse.

**Hvordan det sikres:**
- Systematisk red teaming før hver modellversjon tas i bruk.
- Eksplisitte fagkontrollister for helse, juridiske råd og økonomisk
  rådgivning, utarbeidet sammen med Helsedirektoratet, Forbrukerrådet og
  andre relevante etater.
- Klar henvisning til riktig instans (fastlege, NAV-veileder, advokat, 113)
  der KI-svar ikke er forsvarlig.

## 2. Upartisk

**Hva det betyr:** På politiske, partipolitiske, religiøse og verdiladede
spørsmål skal tjenesten gi balanserte, nyanserte svar og hjelpe brukeren å
orientere seg — uten å anbefale et bestemt standpunkt.

**Hvordan det sikres:**
- Eksplisitt redaksjonell linje, vedtatt av fagrådet, offentlig tilgjengelig.
- Faste evalueringer hvor et panel (f.eks. uavhengige valgforskere) rater
  svar på politisk sensitive spørsmål for balanse.
- Publisert oversikt over spørsmål tjenesten har definert som «verdiladet» og
  derfor besvarer gjennom sammenligning snarere enn anbefaling.

## 3. Verifisert

**Hva det betyr:** Faktapåstander skal være forankret i åpne, autoritative
kilder, med henvisninger brukeren kan klikke på og kontrollere selv.

**Hvordan det sikres:**
- RAG-arkitektur (Retrieval-Augmented Generation) mot verifiserte offentlige
  datakilder.
- Kildehenvisninger som standard i alle svar hvor det gir mening — ikke som
  et tillegg.
- Automatisert kontroll av at påstander i svar faktisk finnes i de kildene
  som refereres.

## 4. Åpen

**Hva det betyr:** Tjenesten skal være åpen kildekode, med åpen datagrunnlag
og åpen evaluering. Ingen black box.

**Hvordan det sikres:**
- All kode publiseres på GitHub under åpen lisens.
- Systemprompter, redaksjonell linje og evalueringskriterier er offentlige.
- Kvartalsvis offentlig rapport om bruk, feil, forbedringer, kostnader.
- Uavhengige revisjoner (Riksrevisjonen, akademia, sivilsamfunn) har tilgang
  til alt nødvendig for granskning.

## 5. Offentlig

**Hva det betyr:** Tjenesten er statlig mandatert, offentlig finansiert og
demokratisk styrt. Ingen kommersielle insentiver som kan komme i konflikt
med brukerens interesser.

**Hvordan det sikres:**
- Organisering som et eget forvaltningsorgan, eller plassert under en
  eksisterende (f.eks. Digdir eller Nasjonalbiblioteket).
- Et uavhengig fagråd med utpekte representanter fra forskning,
  sivilsamfunn, språkmiljøene og brukerorganisasjoner.
- Stortinget vedtar budsjett og overordnet mandat. Daglig drift er faglig
  uavhengig, slik vi kjenner fra NRK.

## 6. Gratis for alle

**Hva det betyr:** Tjenesten er gratis å bruke for alle som bor i Norge,
uten betalingsmur, uten reklame, uten datainnsamling som selges videre.

**Hvordan det sikres:**
- Finansiert over statsbudsjettet, på linje med andre offentlige
  infrastrukturtjenester.
- Identifisering via ID-porten for norske brukere; åpen men mer begrenset
  tilgang også for besøkende i Norge der det er mulig.
- Ingen lagring eller salg av brukerdata utover det som er strengt nødvendig
  for tjenestens drift og evaluering.
