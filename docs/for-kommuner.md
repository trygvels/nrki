# nrki for små kommuner

Norge har 357 kommuner. Litt over halvparten har færre enn 10 000
innbyggere. Disse kommunene har sjelden egen IT-utvikling, men har
nøyaktig samme behov som de store: innbyggerne deres trenger
informasjon om byggesak, skole, helse, åpningstider, og alle de andre
hverdagstingene en kommune steller med.

I dag løses dette ofte med:

- en utdatert FAQ ingen finner frem til
- en chatbot med dårlig norsk fra en kommersiell leverandør, til 6
  000 kr per måned
- ingenting

nrki kan tilby et fjerde alternativ: en innbygger-KI som er gratis,
forhåndsskreddersydd til kommunens egne sider, og som kan embeddes på
kommunens nettside med én linje kode.

## Slik fungerer det

1. **Bestilling.** Kommuneansvarlig logger inn med ID-porten, velger
   kommunens nettside, og velger modellkategori (norsk-hostet er
   anbefalt og standardvalg).
2. **Indeksering.** nrki crawler kommunens nettsider og bygger en
   søkbar indeks. Tar fra noen minutter til noen timer avhengig av
   størrelse.
3. **Embed.** Kommunen får en JavaScript-snutt:

   ```html
   <script src="https://nrki.no/widget/<kommune>.js" defer></script>
   ```

   Lim inn på siden, ferdig.

4. **Bruk.** Innbyggerne ser en chat-bobbel nede til høyre. Klikker de
   på den, kan de stille spørsmål om kommunale tjenester. Svarene er
   forankret i kommunens egne sider, med kildehenvisning.

## Hvorfor norsk-hostet er anbefalt

Modellkategorien `norsk-hostet` (Mistral hos sky.no, NorMistral, Llama
hos norsk leverandør) sikrer at all chat-data forblir innenfor norsk
jurisdiksjon. For en kommune er dette viktig fordi:

- innbyggere kan stille personlige spørsmål om byggesak, helse,
  økonomi
- kommunen er ansvarlig for personvernet
- frontier-modeller er underlagt CLOUD Act, som potensielt kan kreve
  utlevering til amerikanske myndigheter

`norsk-hostet`-modellene er noe svakere enn frontier på generell ytelse,
men presterer godt på den typen praktiske kommunale spørsmål en
innbygger faktisk stiller.

## Hva koster det?

Gratis for offentlige aktører. Plattformen er finansiert over
statsbudsjettet, på samme måte som andre offentlige
infrastrukturtjenester. Kommunens eneste utgift er den lille innsatsen
det tar å lime inn embed-snippet og holde kommunens egne sider
oppdaterte.

## Hva med større kommuner?

Større kommuner med egen IT-utvikling kan også bruke widget-løsningen,
men har i tillegg muligheten til å bygge egne integrasjoner mot
kommunens fagsystemer via MCP. Se [`docs/standarder.md`](standarder.md)
for tekniske detaljer.
