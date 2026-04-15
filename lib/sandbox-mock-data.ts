export type SandboxEtat = {
  id: string;
  navn: string;
  beskrivelse: string;
  forhåndslagetDokument: string;
  testSporsmal: string;
};

export type SandboxModellSvar = {
  modellId: string;
  modellNavn: string;
  kategori: "frontier" | "norsk-hostet" | "selv-hostet";
  svar: string;
  vurdering: {
    presisjon: number; // 1-5
    kildebruk: number;
    norsktilpasning: number;
  };
  bemerkning?: string;
};

export const sandboxEtater: SandboxEtat[] = [
  {
    id: "skatteetaten",
    navn: "Skatteetaten",
    beskrivelse: "Skatt, avgifter og folkeregister",
    forhåndslagetDokument: "Skatte-ABC 2026 — Kapittel 4: Fradrag.pdf",
    testSporsmal:
      "Hvor mye fradrag kan jeg få for hjemmekontor i 2026 hvis jeg jobber 80 % hjemmefra?",
  },
  {
    id: "nav",
    navn: "NAV",
    beskrivelse: "Trygd, arbeid og ytelser",
    forhåndslagetDokument: "Folketrygdloven kapittel 8 — Sykepenger.pdf",
    testSporsmal:
      "En arbeidsgiver spør: hvor mange arbeidsgiverperiodedager må vi dekke for en deltidsansatt?",
  },
  {
    id: "lanekassen",
    navn: "Lånekassen",
    beskrivelse: "Utdanningsstøtte",
    forhåndslagetDokument: "Forskrift om tildeling av utdanningsstøtte 2025-2026.pdf",
    testSporsmal:
      "En student spør: jeg har 250 000 kr i formue — påvirker det mitt rett til stipend?",
  },
];

export const sandboxResultater: Record<string, SandboxModellSvar[]> = {
  skatteetaten: [
    {
      modellId: "claude-sonnet",
      modellNavn: "Claude Sonnet 4.5",
      kategori: "frontier",
      svar:
        "For 2026 er hjemmekontorfradraget enten en standardsats på 2 350 kr (med 80 % hjemmearbeid forholdsmessig redusert), eller dokumenterte faktiske kostnader. For en ansatt som bruker ett rom utelukkende til arbeid, kan andelen av husleie/strøm/internett trekkes fra basert på rommets areal.",
      vurdering: { presisjon: 5, kildebruk: 4, norsktilpasning: 4 },
      bemerkning: "Sterk på resonnering, men kilden til 2 350 kr-satsen er ikke eksplisitt sitert.",
    },
    {
      modellId: "normistral",
      modellNavn: "NorMistral 7B",
      kategori: "norsk-hostet",
      svar:
        "Du har rett til standardfradrag på 2 350 kr, eller dokumenterte faktiske utgifter. Med 80 % hjemmekontor justeres standardfradraget tilsvarende. Se Skatte-ABC kap. 4 for nøyaktig regning.",
      vurdering: { presisjon: 4, kildebruk: 5, norsktilpasning: 5 },
      bemerkning: "Direkte og kildebevisst. Mindre nyansert, men presis på det viktigste.",
    },
    {
      modellId: "egen-llama",
      modellNavn: "Egen Llama-instans",
      kategori: "selv-hostet",
      svar:
        "Standardfradraget for hjemmekontor er 2 350 kr ved fullt hjemmearbeid. Ved 80 % deltids hjemmearbeid: 80 % × 2 350 = 1 880 kr. Alternativ: dokumenterte faktiske kostnader (husleie/strøm/internett, andel basert på areal).",
      vurdering: { presisjon: 5, kildebruk: 4, norsktilpasning: 4 },
      bemerkning: "Grundig, men språkflyten er litt mekanisk sammenlignet med frontier-modeller.",
    },
  ],
  nav: [
    {
      modellId: "claude-sonnet",
      modellNavn: "Claude Sonnet 4.5",
      kategori: "frontier",
      svar:
        "Arbeidsgiver dekker de første 16 kalenderdagene av et sykefravær (arbeidsgiverperioden), uavhengig av om den ansatte er fulltids- eller deltidsansatt. Jf. folketrygdloven § 8-19.",
      vurdering: { presisjon: 5, kildebruk: 5, norsktilpasning: 5 },
    },
    {
      modellId: "normistral",
      modellNavn: "NorMistral 7B",
      kategori: "norsk-hostet",
      svar:
        "Arbeidsgiverperioden er 16 kalenderdager. Den gjelder uavhengig av stillingsprosent. (Folketrygdloven § 8-19.)",
      vurdering: { presisjon: 5, kildebruk: 5, norsktilpasning: 5 },
    },
    {
      modellId: "egen-llama",
      modellNavn: "Egen Llama-instans",
      kategori: "selv-hostet",
      svar:
        "Du som arbeidsgiver må dekke 16 kalenderdager med sykepenger. Stillingsprosent påvirker beregningen av selve sykepengene, men ikke lengden på arbeidsgiverperioden.",
      vurdering: { presisjon: 5, kildebruk: 4, norsktilpasning: 4 },
    },
  ],
  lanekassen: [
    {
      modellId: "claude-sonnet",
      modellNavn: "Claude Sonnet 4.5",
      kategori: "frontier",
      svar:
        "Formuesgrensen for stipend i studieåret 2025–2026 er 471 124 kr for enslige. Med 250 000 kr ligger du godt under grensen, og formuen påvirker ikke retten til stipend.",
      vurdering: { presisjon: 4, kildebruk: 4, norsktilpasning: 4 },
      bemerkning: "Korrekt på det viktigste, men eksakt sats bør verifiseres mot Lånekassens satser.",
    },
    {
      modellId: "normistral",
      modellNavn: "NorMistral 7B",
      kategori: "norsk-hostet",
      svar:
        "Med 250 000 kr i formue er du godt innenfor grensen for stipend (rundt 470 000 kr for enslige). Formuen påvirker ikke retten din. Sjekk lanekassen.no for eksakte tall i ditt tilfelle.",
      vurdering: { presisjon: 4, kildebruk: 5, norsktilpasning: 5 },
    },
    {
      modellId: "egen-llama",
      modellNavn: "Egen Llama-instans",
      kategori: "selv-hostet",
      svar:
        "Nei, 250 000 kr ligger under formuesgrensen. Du har fortsatt rett til stipend så lenge inntekten din også er under grensen.",
      vurdering: { presisjon: 4, kildebruk: 3, norsktilpasning: 4 },
      bemerkning: "Kort og presist, men nevner ikke hvilken grense som gjelder.",
    },
  ],
};
