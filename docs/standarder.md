# Standarder

For at en hub skal være åpen må grensesnittene være åpne. nrki bygger på
etablerte protokoller der de finnes, og åpne, dokumenterte tillegg der de
ikke gjør det.

## MCP — Model Context Protocol

[MCP](https://modelcontextprotocol.io) er en åpen standard for hvordan
AI-applikasjoner kobler seg til datakilder, verktøy og arbeidsflyter.
nrki bruker MCP som hovedstandard for hvordan offentlige etater
eksponerer sine data.

Eksempel-konfigurasjon for en etat:

```json
{
  "mcpServers": {
    "skatteetaten": {
      "transport": "http",
      "url": "https://api.skatteetaten.no/mcp",
      "auth": "maskinporten",
      "ressurser": ["skattesatser/2026", "fradrag/2026", "frister"],
      "godkjenteModeller": ["norsk-hostet/*", "selv-hostet/*"]
    }
  }
}
```

Etaten eier serveren selv. nrki er bare en klient som spør.

## Datakontrakter

Hver ressurs en etat eksponerer beskrives med en datakontrakt — et
JSON-skjema som dokumenterer hva ressursen er, når den gjelder, og hvor
den kommer fra:

```json
{
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
    }
  },
  "raaformatTilgjengelig": true
}
```

Skjemaet er versjonert og åpent. Etater eier sin egen kontrakt og er
ansvarlige for at den er oppdatert.

## Råformat-sitering med tags

Noen typer innhold tåler ikke å bli omformulert: lovtekst, satser,
partiprogram-utdrag, vedtak. Ved å markere innholdet med en
`<kilde-rå>`-tag forplikter nrki seg til å vise teksten ufiltrert med
kildehenvisning. Modellen kan parafrasere _rundt_ sitatet, men ikke i det.

**Uten tag** (modellen kan omformulere):

> Arbeidsmiljøloven krever at alle ansettelsesforhold skal være skriftlig
> dokumentert i en arbeidsavtale.

**Med tag** (ufiltrert sitat):

```
<kilde-rå id="lovdata:lov-2005-06-17-62-§14-5">
Det skal inngås skriftlig arbeidsavtale i alle arbeidsforhold...
</kilde-rå>
```

Dette er kritisk for juridisk presisjon, partipolitisk balanse og
medisinske/økonomiske faktasvar.

## Hooks-API

Etater kan abonnere på hendelser knyttet til sine ressurser — for
eksempel «noen stilte et spørsmål om vår tjeneste» — for å forbedre
datagrunnlaget over tid:

```ts
nrki.hooks.register({
  ressurs: "skatteetaten/fradrag/*",
  hendelse: "sporsmal-stilt",
  callback: "https://skatteetaten.no/nrki-feedback",
  hemmelighet: process.env.NRKI_HOOK_SECRET,
});
```

Tilbakekall sendes til en URL hos etaten, signert med en delt hemmelighet.
Etaten trenger ikke avsløre noe internt for at hooken skal fungere.

## Modell-godkjenning

Hver datakilde-leverandør angir hvilke modellkategorier deres data kan
brukes med. Dette håndheves i orkestratoren — en modell utenfor godkjent
liste får aldri se rådataene.

Tre kategorier:

- `frontier/*` — frontier-modeller fra amerikanske selskaper (Claude, GPT,
  Gemini)
- `norsk-hostet/*` — åpen-vekt-modeller hos norske/europeiske leverandører
- `selv-hostet/*` — etatens egne instanser

En etat kan f.eks. tillate `norsk-hostet/*` og `selv-hostet/*`, men
nekte `frontier/*`. Eller kreve `selv-hostet/*` for graderte data.

## Versjonering

Alle protokoller versjoneres med semver i URL-en (`/v1/`, `/v2/`).
Brytende endringer krever en hovedversjons-bump og minst 12 måneders
varsel før gammel versjon avvikles.
