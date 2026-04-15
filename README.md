# nrki — Norsk Riks-KI

> Et forslag om en norsk offentlig, trygg og upartisk AI-tjeneste for alle i
> Norge — inspirert av NRKs rolle for allmennkringkasting.

Dette repoet inneholder konseptforslag og en landingsside for **nrki**. Siden
er publisert på [nrki.no](https://nrki.no).

## Kort sagt

- AI er i ferd med å bli infrastruktur — på linje med strøm og internett.
- I dag er de mest brukte AI-tjenestene eid av private, utenlandske selskaper.
- Nordmenn fortjener en AI-tjeneste som er trygg, upartisk, offentlig eid,
  forankret i verifiserte norske kilder — og gratis for alle i Norge.
- Slik NRK er for nyhetene, kan nrki være for kunstig intelligens.

## To pitcher i ett

nrki er beskrevet på to plan:

1. **Den allmenne AI-tjenesten** — `/` og `/om`. NRK-parallellen, ment for
   innbyggeren. Trygg, upartisk, gratis, offentlig.
2. **Plattformen** — `/plattform`. Den utvidede pitchen: nrki som åpen
   hub for KI i norsk offentlig sektor. Modellagnostisk, MCP-basert,
   sandbox for etater, embed-widget for små kommuner.

## Hva ligger i repoet?

```
.
├── README.md                   ← Denne filen
├── docs/
│   ├── visjon.md               ← Den lange pitchen (allmenn-tjenesten)
│   ├── prinsipper.md           ← De seks prinsippene, utdypet
│   ├── arkitektur.md           ← Skissert teknisk tilnærming
│   ├── dataintegrasjon.md      ← Hvordan offentlige etater kan bidra
│   ├── plattform.md            ← Plattform-pitchen, lang versjon
│   ├── standarder.md           ← MCP, datakontrakter, råformat-tags, hooks
│   └── for-kommuner.md         ← Onboarding-guide for små kommuner
├── app/                        ← Next.js App Router
│   ├── page.tsx                ← Forsiden (allmenn-pitchen)
│   ├── om/                     ← Lengre vision
│   ├── demo/                   ← Scripted chat-demo
│   ├── plattform/              ← Plattform-siden (hub-konseptet)
│   └── login/                  ← Passord-gate
├── components/
│   ├── plattform/              ← Komponenter for plattform-siden
│   └── (delte)                 ← Hero, Nav, Footer, ScriptedChat osv.
└── lib/
    ├── demo-samtaler.ts        ← Kuraterte Q&A for hoveddemoen
    ├── kommune-demo-samtaler.ts ← Q&A for kommune-embed-widget
    ├── modeller.ts             ← Modellkatalog
    ├── sandbox-mock-data.ts    ← Mock-data for sandbox-flowen
    └── standarder-eksempler.ts ← Kode-snippets for /plattform
```

## Kjør siden lokalt

```bash
npm install
npm run dev
```

Siden kjører på [http://localhost:3000](http://localhost:3000).

## Status

Dette er et konseptforslag, ikke en offisiell statlig tjeneste. All kode og
alt innhold er publisert under åpen lisens. Innspill og bidrag er velkomne —
[åpne et issue](https://github.com/trygvels/nrki/issues) eller send en pull
request.

## Lisens

MIT for kode. Tekstinnhold (inkludert `/docs`) er publisert under
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
