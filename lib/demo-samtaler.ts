export type Kilde = {
  navn: string;
  url: string;
};

export type Samtale = {
  id: string;
  sporsmal: string;
  kategori: string;
  svar: string[];
  kilder: Kilde[];
  merknad?: string;
};

export const samtaler: Samtale[] = [
  {
    id: "parti",
    sporsmal: "Hvilket parti bør jeg stemme på?",
    kategori: "Politikk",
    svar: [
      "Det skal jeg ikke svare på — og det bør du være skeptisk til at noen KI gjør. Valg er en personlig avgjørelse basert på dine verdier og hva du mener er viktig.",
      "Det jeg kan gjøre er å hjelpe deg å orientere deg. De fleste finner det nyttig å jobbe seg gjennom to spørsmål: Hva er viktigst for meg akkurat nå (for eksempel økonomi, helse, klima, skole, innvandring, distriktspolitikk)? Og hvilke partier har programfestet løsninger som ligger nærmest det jeg selv mener?",
      "Alle partier på Stortinget har åpne partiprogrammer som du kan lese direkte. NRKs Valgomat og VGs Partitest er to gratis verktøy som lar deg sammenligne dine egne svar med partienes posisjoner, uten at verktøyet anbefaler et bestemt parti.",
      "Vil du at jeg oppsummerer hva et bestemt parti mener om et bestemt tema? Det kan jeg gjøre, med kilde til partiets eget program.",
    ],
    kilder: [
      { navn: "NRK Valgomat", url: "https://www.nrk.no/valg/" },
      { navn: "Stortinget — partier", url: "https://www.stortinget.no/" },
    ],
    merknad:
      "nrki tar ikke politisk stilling. Svaret er bygget for å hjelpe brukeren sammenligne, ikke velge.",
  },
  {
    id: "lanekassen",
    sporsmal: "Hvordan søker jeg studielån fra Lånekassen?",
    kategori: "Offentlige tjenester",
    svar: [
      "Du søker via lanekassen.no. Søknaden krever innlogging med ID-porten (BankID, MinID eller tilsvarende).",
      "Kort oppsummert er stegene: 1) Logg inn på lanekassen.no, 2) Velg «Søk om stipend og lån», 3) Velg riktig utdanning og studieår, 4) Fyll ut søknaden og send inn.",
      "For studieåret 2025–2026 kan en fulltidsstudent i høyere utdanning få inntil omtrent 151 690 kr i basisstøtte, hvorav deler kan gjøres om til stipend hvis du består eksamener og har inntekt og formue under grensene. Endelige satser oppdateres av Lånekassen hvert år.",
      "Søknadsfristen er 15. november for høstsemesteret og 15. mars for vårsemesteret, men det lønner seg å søke tidlig.",
    ],
    kilder: [
      { navn: "Lånekassen — søk støtte", url: "https://www.lanekassen.no/" },
      {
        navn: "Satser og frister",
        url: "https://www.lanekassen.no/nb-NO/stipend-og-lan/",
      },
    ],
  },
  {
    id: "klima",
    sporsmal: "Er klimaendringer menneskeskapte?",
    kategori: "Vitenskap",
    svar: [
      "Ja. Det er bred vitenskapelig konsensus om at den globale oppvarmingen vi ser siden midten av 1800-tallet i hovedsak skyldes menneskelig aktivitet — først og fremst utslipp av CO₂ og andre klimagasser fra forbrenning av fossilt brensel, samt endret arealbruk.",
      "FNs klimapanel (IPCC) skriver i sin sjette hovedrapport (2021–2023) at det er «utvetydig at menneskelig påvirkning har varmet opp atmosfæren, havet og landjorda».",
      "I Norge oppsummeres og formidles denne forskningen av Miljødirektoratet og Norsk klimastiftelse.",
      "Det er fortsatt åpne forskningsspørsmål om nøyaktig hvor raskt bestemte konsekvenser inntreffer, men selve årsakssammenhengen er godt etablert i den samlede forskningslitteraturen.",
    ],
    kilder: [
      { navn: "IPCC AR6 Synthesis Report", url: "https://www.ipcc.ch/ar6-syr/" },
      {
        navn: "Miljødirektoratet — klima",
        url: "https://miljostatus.miljodirektoratet.no/tema/klima/",
      },
    ],
  },
  {
    id: "skatt",
    sporsmal: "Hva er skattesatsen for høy inntekt i 2026?",
    kategori: "Skatt og økonomi",
    svar: [
      "For 2026 er trinnskatten i Norge delt i fem trinn oppå den alminnelige inntektsskatten på 22 %.",
      "De øverste trinnene (omtrentlige satser, sjekk skatteetaten.no for oppdaterte tall):",
      "• Trinn 3: 13,7 % på inntekt over ca. 697 150 kr",
      "• Trinn 4: 16,7 % på inntekt over ca. 942 400 kr",
      "• Trinn 5: 17,7 % på inntekt over ca. 1 410 750 kr",
      "Samlet marginalskatt på lønn i øverste trinn, inkludert trygdeavgift og alminnelig skatt, lander dermed rundt 47,4 %. Satsene fastsettes årlig i statsbudsjettet, så for det helt nøyaktige svaret for ditt tilfelle bør du bruke Skatteetatens skattekalkulator.",
    ],
    kilder: [
      {
        navn: "Skatteetaten — satser",
        url: "https://www.skatteetaten.no/satser/",
      },
      {
        navn: "Statsbudsjettet",
        url: "https://www.statsbudsjettet.no/",
      },
    ],
    merknad: "Satsene er illustrasjon — alltid verifiser mot skatteetaten.no.",
  },
  {
    id: "hoyre-innvandring",
    sporsmal: "Hva mener Høyre om innvandring?",
    kategori: "Politikk",
    svar: [
      "Jeg skal forsøke å oppsummere Høyres offisielle posisjon uten å ta stilling til den.",
      "Hovedlinjene i partiprogrammet (siste stortingsprogram): Høyre vil føre en «streng, men rettferdig» innvandrings- og asylpolitikk. Partiet ønsker en restriktiv arbeidsinnvandring utenfor EØS-området, samtidig som de ønsker å gjøre det enklere for høyt kvalifiserte arbeidstakere å komme til Norge.",
      "På asylfeltet har Høyre programfestet at de vil oppfylle internasjonale forpliktelser, men samtidig jobbe for raskere saksbehandling og retur av personer uten lovlig opphold. Partiet har også vært opptatt av integreringskrav, særlig knyttet til norskopplæring og arbeid.",
      "For en fullstendig og oppdatert beskrivelse bør du lese Høyres gjeldende partiprogram direkte, eller sammenligne med andre partier via NRK Valgomat.",
    ],
    kilder: [
      { navn: "Høyres partiprogram", url: "https://hoyre.no/politikk/" },
      { navn: "NRK Valgomat", url: "https://www.nrk.no/valg/" },
    ],
    merknad:
      "nrki forholder seg til partienes egne programmer som kilde, og oppsummerer uten verdivurdering.",
  },
];
