export type Kategori = "frontier" | "norsk-hostet" | "selv-hostet";

export type Modell = {
  id: string;
  navn: string;
  leverandor: string;
  kategori: Kategori;
  hostingSted: string;
  cloudActRisiko: boolean;
  sertifiseringer: string[];
  notater: string;
};

export const kategoriBeskrivelse: Record<
  Kategori,
  { tittel: string; beskrivelse: string }
> = {
  frontier: {
    tittel: "Frontier-modeller",
    beskrivelse:
      "De største, mest kapable modellene i verden. Drives av amerikanske selskaper. Best på generell ytelse, men brukerdata kan bli underlagt amerikansk jurisdiksjon (CLOUD Act).",
  },
  "norsk-hostet": {
    tittel: "Norsk-hostet, åpen vekt",
    beskrivelse:
      "Åpne modeller (Llama, Mistral, NorMistral m.fl.) hostet hos norske eller europeiske leverandører utenfor amerikansk jurisdiksjon. Lavere ytelse enn frontier, men full datasuverenitet.",
  },
  "selv-hostet": {
    tittel: "Selv-hostet hos organisasjonen",
    beskrivelse:
      "Modellen kjører hos organisasjonen selv (egen sky eller lokalt). Maksimal kontroll, men krever IT-kompetanse å drifte. Aktuelt for store etater og forskningsinstitusjoner.",
  },
};

export const modeller: Modell[] = [
  {
    id: "claude-sonnet",
    navn: "Claude Sonnet 4.5",
    leverandor: "Anthropic",
    kategori: "frontier",
    hostingSted: "USA / EU (AWS)",
    cloudActRisiko: true,
    sertifiseringer: ["SOC 2 Type II", "ISO 27001"],
    notater:
      "Sterk på resonnering og lange kontekster. Tilgjengelig i EU-region, men eier er amerikansk.",
  },
  {
    id: "gpt-5",
    navn: "GPT-5",
    leverandor: "OpenAI / Microsoft Azure",
    kategori: "frontier",
    hostingSted: "USA / EU (Azure)",
    cloudActRisiko: true,
    sertifiseringer: ["SOC 2", "ISO 27001", "HIPAA"],
    notater: "Bredt brukt. Azure-tilbud i EU, men underlagt CLOUD Act.",
  },
  {
    id: "gemini-pro",
    navn: "Gemini 2.5 Pro",
    leverandor: "Google",
    kategori: "frontier",
    hostingSted: "USA / EU (GCP)",
    cloudActRisiko: true,
    sertifiseringer: ["SOC 2", "ISO 27001"],
    notater: "Multimodal kapasitet. Samme jurisdiksjons-utfordringer.",
  },
  {
    id: "mistral-large",
    navn: "Mistral Large",
    leverandor: "Mistral AI (FR) hos Sky.no",
    kategori: "norsk-hostet",
    hostingSted: "Oslo (Sky.no)",
    cloudActRisiko: false,
    sertifiseringer: ["ISO 27001", "ISO 27018"],
    notater: "Fransk modell hostet i Norge. EU-eierskap, ingen CLOUD Act.",
  },
  {
    id: "normistral",
    navn: "NorMistral 7B",
    leverandor: "Nasjonalbiblioteket / NoricGPT",
    kategori: "norsk-hostet",
    hostingSted: "Norge",
    cloudActRisiko: false,
    sertifiseringer: ["Åpen vekt"],
    notater: "Trent på norsk tekstkorpus. Mindre, men nært norsk språk og kontekst.",
  },
  {
    id: "llama-3-norsk",
    navn: "Llama 3 70B",
    leverandor: "Meta (vekt) hos norsk operatør",
    kategori: "norsk-hostet",
    hostingSted: "Norge / EU",
    cloudActRisiko: false,
    sertifiseringer: ["Åpen vekt", "ISO 27001"],
    notater:
      "Åpne modellvekter, hostet av norsk leverandør. Ingen data forlater EU.",
  },
  {
    id: "egen-llama",
    navn: "Egen Llama-instans",
    leverandor: "Etaten selv",
    kategori: "selv-hostet",
    hostingSted: "Etatens egne servere",
    cloudActRisiko: false,
    sertifiseringer: ["Etatens egne"],
    notater:
      "Full kontroll, ingen ekstern tilgang. Krever GPU-infrastruktur og driftskompetanse.",
  },
  {
    id: "egen-mistral",
    navn: "Egen Mistral-instans",
    leverandor: "Organisasjonen selv",
    kategori: "selv-hostet",
    hostingSted: "Privat sky / on-prem",
    cloudActRisiko: false,
    sertifiseringer: ["Organisasjonens egne"],
    notater: "Egnet for forskningsinstitusjoner og store etater.",
  },
];
