# nrki — Norsk Riks Kunstig Intelligens

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

## Hva ligger i repoet?

```
.
├── README.md                   ← Denne filen
├── docs/
│   ├── visjon.md               ← Den lange pitchen
│   ├── prinsipper.md           ← De seks prinsippene, utdypet
│   ├── arkitektur.md           ← Skissert teknisk tilnærming
│   └── dataintegrasjon.md      ← Hvordan offentlige etater kan bidra
├── app/                        ← Next.js App Router (sidene)
├── components/                 ← React-komponenter
└── lib/demo-samtaler.ts        ← Kuraterte Q&A som vises i demoen
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
