export type Kilde = {
  navn: string;
  url: string;
};

export type SatsRad = {
  tittel: string;
  verdi: string;
  periode?: string;
};

export type ValgAlternativ = {
  id: string;
  tekst: string;
  match: string;
};

export type PartiKortKompakt = {
  partiId: string;
  posisjon?: string;
};

export type SvarBlokk =
  | { type: "tekst"; tekst: string }
  | {
      type: "raa-sitat";
      tekst: string;
      kildeNavn: string;
      kildeRef: string;
      lenke?: string;
    }
  | {
      type: "parti-kort";
      kort: PartiKortKompakt[];
      etikett?: string;
    }
  | {
      type: "valgomat";
      sporsmal: string;
      alternativer: ValgAlternativ[];
      kilde: string;
      kildeURL?: string;
    }
  | {
      type: "sats-kort";
      tittel: string;
      rader: SatsRad[];
      kilde: string;
      kildeURL?: string;
    };

export type Samtale = {
  id: string;
  sporsmal: string;
  kategori: string;
  blokker: SvarBlokk[];
  kilder: Kilde[];
  merknad?: string;
};

const tekst = (t: string): SvarBlokk => ({ type: "tekst", tekst: t });

export const samtaler: Samtale[] = [
  {
    id: "parti",
    sporsmal: "Hvilket parti bør jeg stemme på?",
    kategori: "Politikk",
    blokker: [
      tekst(
        "Det skal jeg ikke svare på — og du bør være skeptisk til at noen KI gjør det. Valg er en personlig avgjørelse basert på dine verdier og hva du mener er viktig.",
      ),
      tekst(
        "Det jeg kan gjøre er å hjelpe deg å orientere deg. Her er alle partiene på Stortinget med direktelenker til programmene deres:",
      ),
      {
        type: "parti-kort",
        etikett: "Stortingets partier 2025–2029",
        kort: [
          { partiId: "ap" },
          { partiId: "h" },
          { partiId: "sv" },
          { partiId: "frp" },
          { partiId: "sp" },
          { partiId: "v" },
          { partiId: "krf" },
          { partiId: "r" },
          { partiId: "mdg" },
        ],
      },
      tekst(
        "Vil du sammenligne posisjonene dine mot partienes? NRK Valgomat er en anerkjent uavhengig løsning. Her er første spørsmål derfra som demonstrasjon — det er bygget som en MCP-app du kan bruke direkte i samtalen:",
      ),
      {
        type: "valgomat",
        sporsmal:
          "Norge bør prioritere lavere skatter framfor å bygge ut velferdstilbudet.",
        kilde: "NRK Valgomat (illustrert som MCP-app)",
        kildeURL: "https://www.nrk.no/valg/",
        alternativer: [
          {
            id: "helt-uenig",
            tekst: "Helt uenig",
            match: "Du ligger nærmest Rødt, SV og Ap på dette spørsmålet.",
          },
          {
            id: "litt-uenig",
            tekst: "Litt uenig",
            match: "Du ligger nærmest Ap, SV og MDG på dette spørsmålet.",
          },
          {
            id: "nøytral",
            tekst: "Nøytral",
            match:
              "Du ligger nær midten — Sp, KrF, V og MDG plasserer seg ofte rundt der.",
          },
          {
            id: "litt-enig",
            tekst: "Litt enig",
            match: "Du ligger nærmest Venstre, Høyre og KrF.",
          },
          {
            id: "helt-enig",
            tekst: "Helt enig",
            match: "Du ligger nærmest Høyre og FrP.",
          },
        ],
      },
      tekst(
        "Dette er bare ett av rundt 30 spørsmål i den ekte valgomaten. Vil du ta hele testen, klikk på lenken over.",
      ),
    ],
    kilder: [
      { navn: "NRK Valgomat", url: "https://www.nrk.no/valg/" },
      { navn: "Stortinget — partier", url: "https://www.stortinget.no/" },
    ],
    merknad:
      "nrki tar ikke politisk stilling. Svaret er bygget for å hjelpe deg sammenligne, ikke velge.",
  },
  {
    id: "lanekassen",
    sporsmal: "Hvordan søker jeg studielån fra Lånekassen?",
    kategori: "Offentlige tjenester",
    blokker: [
      tekst(
        "Du søker via lanekassen.no. Søknaden krever innlogging med ID-porten (BankID, MinID eller tilsvarende).",
      ),
      tekst(
        "Stegene: 1) Logg inn på lanekassen.no, 2) Velg «Søk om stipend og lån», 3) Velg riktig utdanning og studieår, 4) Fyll ut og send inn.",
      ),
      {
        type: "sats-kort",
        tittel: "Satser og frister, studieåret 2025–2026",
        kilde: "Lånekassen — satser",
        kildeURL: "https://www.lanekassen.no/nb-NO/stipend-og-lan/",
        rader: [
          {
            tittel: "Basisstøtte fulltid",
            verdi: "151 690 kr",
            periode: "per studieår",
          },
          {
            tittel: "Maks omgjøring til stipend",
            verdi: "40 %",
            periode: "ved bestått eksamen + inntekt under grense",
          },
          {
            tittel: "Søknadsfrist høst",
            verdi: "15. november",
          },
          {
            tittel: "Søknadsfrist vår",
            verdi: "15. mars",
          },
        ],
      },
      tekst(
        "Tallene er hentet direkte fra Lånekassens datakilde via en datakontrakt — ikke parafrasert. Når satsene oppdateres oppdateres dette kortet automatisk.",
      ),
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
    blokker: [
      tekst(
        "Ja. Det er bred vitenskapelig konsensus om at den globale oppvarmingen siden midten av 1800-tallet i hovedsak skyldes menneskelig aktivitet — først og fremst utslipp av CO₂ og andre klimagasser fra forbrenning av fossilt brensel.",
      ),
      tekst(
        "FNs klimapanel (IPCC) er den autoritative kilden. Her er konklusjonen sitert ufiltrert fra deres siste hovedrapport:",
      ),
      {
        type: "raa-sitat",
        tekst:
          "Det er utvetydig at menneskelig påvirkning har varmet opp atmosfæren, havet og landjorda. Utbredte og raske endringer i atmosfæren, havet, kryosfæren og biosfæren har funnet sted.",
        kildeNavn: "IPCC AR6",
        kildeRef: "Synthesis Report (2023), SPM A.1",
        lenke: "https://www.ipcc.ch/ar6-syr/",
      },
      tekst(
        "Sitatet over er hentet ufiltrert via en `<kilde-rå>`-tag — modellen kan ikke parafrasere det. I Norge formidles og oppsummeres denne forskningen blant annet av Miljødirektoratet og Norsk klimastiftelse.",
      ),
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
    blokker: [
      tekst(
        "I 2026 er trinnskatten i Norge delt i fem trinn, oppå den alminnelige inntektsskatten på 22 %. Her er satsene direkte fra Skatteetatens datakilde:",
      ),
      {
        type: "sats-kort",
        tittel: "Trinnskatt 2026",
        kilde: "Skatteetaten",
        kildeURL: "https://www.skatteetaten.no/satser/",
        rader: [
          { tittel: "Alminnelig inntektsskatt", verdi: "22,0 %" },
          { tittel: "Trinn 1", verdi: "1,7 %", periode: "fra 217 400 kr" },
          { tittel: "Trinn 2", verdi: "4,0 %", periode: "fra 306 050 kr" },
          { tittel: "Trinn 3", verdi: "13,7 %", periode: "fra 697 150 kr" },
          { tittel: "Trinn 4", verdi: "16,7 %", periode: "fra 942 400 kr" },
          { tittel: "Trinn 5", verdi: "17,7 %", periode: "fra 1 410 750 kr" },
        ],
      },
      tekst(
        "Samlet marginalskatt på lønn i øverste trinn — inkludert trygdeavgift og alminnelig skatt — lander rundt 47,4 %.",
      ),
    ],
    kilder: [
      {
        navn: "Skatteetaten — satser",
        url: "https://www.skatteetaten.no/satser/",
      },
      { navn: "Statsbudsjettet", url: "https://www.statsbudsjettet.no/" },
    ],
    merknad: "Satsene er illustrative — alltid verifiser mot skatteetaten.no.",
  },
  {
    id: "hoyre-innvandring",
    sporsmal: "Hva mener Høyre om innvandring?",
    kategori: "Politikk",
    blokker: [
      tekst(
        "Jeg skal forsøke å oppsummere Høyres offisielle posisjon uten å ta stilling til den.",
      ),
      tekst(
        "Hovedlinjene fra siste partiprogram: Høyre vil føre en «streng, men rettferdig» innvandrings- og asylpolitikk. Partiet ønsker restriktiv arbeidsinnvandring utenfor EØS, men vil samtidig gjøre det enklere for høyt kvalifiserte arbeidstakere å komme til Norge. På asyl: oppfylle internasjonale forpliktelser, men jobbe for raskere saksbehandling og retur av personer uten lovlig opphold.",
      ),
      {
        type: "parti-kort",
        etikett: "Direktelenke til programmet",
        kort: [
          {
            partiId: "h",
            posisjon: "Streng, men rettferdig — restriktiv arbeidsinnvandring, integreringskrav.",
          },
        ],
      },
      tekst(
        "For en fullstendig og oppdatert beskrivelse, les programmet direkte. Vil du sammenligne med andre partier på samme tema, kan jeg hente posisjonene deres også.",
      ),
    ],
    kilder: [
      { navn: "Høyres partiprogram", url: "https://hoyre.no/politikk/" },
      { navn: "NRK Valgomat", url: "https://www.nrk.no/valg/" },
    ],
    merknad:
      "nrki forholder seg til partienes egne programmer som kilde, og oppsummerer uten verdivurdering.",
  },
  {
    id: "arbeidsmiljoloven",
    sporsmal: "Hva sier loven om skriftlig arbeidsavtale?",
    kategori: "Juss",
    blokker: [
      tekst(
        "Arbeidsmiljøloven krever skriftlig avtale i alle arbeidsforhold. Her er § 14-5 sitert ufiltrert fra Lovdata:",
      ),
      {
        type: "raa-sitat",
        tekst:
          "Det skal inngås skriftlig arbeidsavtale i alle arbeidsforhold. Arbeidsgiver skal utforme et utkast til arbeidsavtale i samsvar med § 14-6. Arbeidsgiveren skal sørge for at arbeidsavtalen inngås snarest mulig og senest sju dager etter at arbeidsforholdet begynte.",
        kildeNavn: "Lovdata",
        kildeRef: "Arbeidsmiljøloven § 14-5",
        lenke:
          "https://lovdata.no/lov/2005-06-17-62/§14-5",
      },
      tekst(
        "Slik er prinsippet om råformat-sitering: når presisjon er kritisk — lover, satser, vedtak — får du ordlyden direkte fra kilden. Modellen kan parafrasere rundt sitatet, men ikke i det. Det er forskjellen på en troverdig offentlig tjeneste og en chatbot som «forklarer det med egne ord».",
      ),
    ],
    kilder: [
      {
        navn: "Lovdata — arbeidsmiljøloven",
        url: "https://lovdata.no/lov/2005-06-17-62",
      },
    ],
  },
];
