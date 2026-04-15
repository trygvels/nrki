export const mcpKonfigEksempel = `{
  "mcpServers": {
    "skatteetaten": {
      "transport": "http",
      "url": "https://api.skatteetaten.no/mcp",
      "auth": "maskinporten",
      "ressurser": [
        "skattesatser/2026",
        "fradrag/2026",
        "frister"
      ],
      "godkjenteModeller": [
        "norsk-hostet/*",
        "selv-hostet/*"
      ]
    }
  }
}`;

export const datakontraktEksempel = `{
  "$schema": "https://nrki.no/schemas/datakontrakt-v1.json",
  "leverandor": "lanekassen",
  "ressurs": "stipend-og-laan/2025-2026",
  "type": "structured",
  "felter": {
    "basisStotteFulltid": {
      "verdi": 151690,
      "valuta": "NOK",
      "gyldigFra": "2025-08-15",
      "gyldigTil": "2026-08-14",
      "kilde": "https://lanekassen.no/satser/2025-2026"
    },
    "soeknadsfristHost": "2025-11-15",
    "soeknadsfristVar": "2026-03-15"
  },
  "raaformatTilgjengelig": true
}`;

export const raaformatUtenTagEksempel = `Bruker: Hva sier arbeidsmiljøloven om skriftlig arbeidsavtale?

nrki: Arbeidsmiljøloven krever at alle ansettelsesforhold skal være
skriftlig dokumentert i en arbeidsavtale. Avtalen skal som hovedregel
inngås før arbeidet starter og inneholde sentrale opplysninger om
ansettelsen. (Modellen har omformulert lovteksten.)`;

export const raaformatMedTagEksempel = `Bruker: Hva sier arbeidsmiljøloven om skriftlig arbeidsavtale?

nrki:

  <kilde-rå id="lovdata:lov-2005-06-17-62-§14-5">
  Det skal inngås skriftlig arbeidsavtale i alle arbeidsforhold.
  Arbeidsgiver skal utforme et utkast til arbeidsavtale i samsvar
  med § 14-6. Arbeidsgiveren skal sørge for at arbeidsavtalen
  inngås snarest mulig og senest sju dager etter at arbeidsforholdet
  begynte.
  </kilde-rå>

Kilde: Arbeidsmiljøloven § 14-5 (Lovdata).
(Lovteksten er sitert ufiltrert og kan ikke omformuleres.)`;

export const hooksEksempel = `// Etaten registrerer en hook som kalles når noen
// stiller spørsmål om deres ressurser.
nrki.hooks.register({
  ressurs: "skatteetaten/fradrag/*",
  hendelse: "sporsmal-stilt",
  callback: "https://skatteetaten.no/nrki-feedback",
  hemmelighet: process.env.NRKI_HOOK_SECRET,
});

// Tilbakekallet kan brukes til å forbedre svar over tid,
// fange manglende informasjon, eller oppdatere FAQ-er.`;
