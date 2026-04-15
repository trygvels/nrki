# Arkitektur (skissert)

Dette dokumentet skisserer én mulig teknisk tilnærming. Den endelige
arkitekturen bør avgjøres sammen med norske fagmiljøer — NTNU, UiO, UiB,
Simula, Sikt, Språkbanken ved Nasjonalbiblioteket, Digdir, m.fl.

## Lag 1 — Språkmodellen

nrki trenger ikke trene en modell fra bunnen av. Det er for dyrt og for
tregt. Tre veier peker seg ut:

1. **Åpne modeller fra EU-økosystemet** (f.eks. Mistral, NorGPT/NorLLM, eller
   nye modeller fra Nasjonalbibliotekets AI-lab) som tunes videre mot norsk
   offentlig forvaltning og språkbruk.
2. **Åpen-vekt-modeller internasjonalt** (f.eks. Llama-familien) som
   fint-tunes for norsk, med de forbehold som gjelder modellens opphav.
3. **En hybrid**, hvor en mindre norskspesifikk modell orkestrerer en større
   åpen modell for tyngre oppgaver.

Viktig uansett: modellen må kunne kjøres på infrastruktur under norsk /
europeisk kontroll, ikke hos en leverandør som kan miste driftstilgangen
over natten.

## Lag 2 — Kunnskapsgrunnlaget (RAG)

Modellen alene er ikke nok. Faktapåstander må kunne forankres. Derfor
bygger nrki et **retrieval-lag** over verifiserte offentlige kilder:

- Lover og forskrifter (Lovdata Åpne data)
- Skatteetatens satser og regler
- NAVs tjenesteinformasjon
- Lånekassens regelverk
- Helsedirektoratets veiledere
- SSB-statistikk
- Partiprogrammer fra Stortingets partier (strukturerte)
- Offentlige utredninger (NOU), stortingsmeldinger
- Akademiske publikasjoner der relevant

Retrieval skjer først, modellen svarer basert på hva som faktisk finnes i
kildene. Hvis det ikke finnes grunnlag, skal modellen si det — ikke gjette.

## Lag 3 — Den redaksjonelle linjen

Over modell og retrieval ligger en **systemprompt og policylag**:

- Definerer tone, nøytralitet, og hvordan sensitive tema håndteres.
- Håndhever kildekrav: «hvis du hevder et faktum, nevn kilden».
- Kategoriserer spørsmål (praktisk offentlig, vitenskapelig, politisk,
  verdiladet) og velger riktig responsmønster.
- Eskalerer til «henvis til fagperson» når det trengs (helse, jus, psykisk
  helse, kriser).

Dette laget er ikke hemmelig. Det publiseres i repoet og gjennomgås av
fagrådet.

## Lag 4 — Evaluering og sikkerhet

- **Kontinuerlig evaluering** mot et voksende testsett som blant annet
  dekker: partipolitisk balanse, faktariktighet mot offentlige kilder,
  skadelighet, sikkerhetskritiske scenarier, språkkvalitet (bokmål, nynorsk,
  samiske språk der mulig).
- **Red teaming** før hver versjon settes i drift.
- **Offentlig feillogg**: kjente begrensninger er publisert, ikke gjemt.
- **Brukerklager**: enkelt å flagge et svar, saksgang er transparent.

## Lag 5 — Infrastruktur

- Kjøring på norsk / europeisk sky, eller egen offentlig infrastruktur.
- Klare krav til personvern: svar lagres ikke lenger enn nødvendig, logger
  er pseudonymiserte, all lagring er i EU/EØS.
- Autentisering via ID-porten for innlogging. Anonymt-modus der mulig.

## Åpne spørsmål

- Hvilken basemodell er best egnet i dag? Hvor mye norsk fine-tuning trengs?
- Skal svarene være deterministiske (samme spørsmål → samme svar) eller
  probabilistiske? Argumenter for begge.
- Hvordan håndtere nynorsk og samiske språk, som er underrepresentert i
  treningsdata?
- Hvilken flate? Webchat er åpenbart — men også API for tredjepartsapper
  (kommuner, skoler, bibliotek), samt native klienter?

Dette dokumentet skal oppdateres etter hvert som diskusjonen utvikler seg.
