# Plattform: nrki som åpen hub for KI i Norge

Den opprinnelige nrki-pitchen handlet om én ting: en allmenn AI-tjeneste for
innbyggere, slik NRK er for nyheter. Dette dokumentet utvider konseptet til
en åpen **plattform** — en hub som kobler norske data, modeller og brukere
sammen på åpne, demokratisk styrte vilkår.

## Hvorfor en hub, og ikke bare en chatbot?

Å bygge én norsk modell og én norsk chat løser bare en liten del av
problemet. Den faktiske KI-fremtiden i Norge vil bestå av:

- mange ulike **modeller** (frontier hos amerikanske leverandører,
  norsk-hostede åpne modeller, etaters egne instanser),
- mange ulike **datakilder** (alt fra Skatteetaten til en kommunes
  byggesakssider),
- mange ulike **brukergrensesnitt** (innbygger-chat, etat-saksbehandler-
  verktøy, embedded widget på en kommunes nettside).

I dag bygger hver enkelt aktør sitt eget — eller velger en privat leverandør
og aksepterer dens vilkår. Det er ineffektivt, fragmentert og lite
sammenlignbart. En åpen plattform med felles standarder gir norsk offentlig
sektor mulighet til å samhandle, bytte ut komponenter, og kvalitetssikre
under én felles styring.

## De tre lagene

```
Brukerlag        innbygger | etat | kommune | utvikler
                       ↕  åpne grensesnitt
Orkestrator      nrki  (kildekode er åpen)
                       ↕  MCP + datakontrakter
Datalag          Skatteetaten, NAV, Lånekassen, Lovdata, kommuner...
                       ↔  modell-API
Modellag         Frontier | Norsk-hostet | Selv-hostet
```

Hvert lag er løst koblet fra de andre. En etat som eksponerer data via MCP
kan velge hvilke modellkategorier den vil tillate. En innbygger som chatter
med nrki kan velge mellom modellene som er godkjent for de relevante
datakildene. En modell-leverandør kan kobles på uten at nrki må
spesialtilpasses.

## Modellagnostisk

nrki binder seg ikke til én modell, og har som programfestet prinsipp at
det aldri skal gjøre det. Hvorfor:

- **Datasuverenitet:** Frontier-modeller fra amerikanske selskaper er
  underlagt CLOUD Act. For mange norske offentlige data er det uakseptabelt.
- **Konkurranse:** Modell-markedet endrer seg hver måned. Å låse seg til én
  leverandør gir leverandøren urimelig makt.
- **Mangfold av behov:** Generelle samtaler trenger annen modell enn
  juridisk presisjon, som trenger annen modell enn samiske
  oversettelser. Hubben bør kunne velge.

Listen over godkjente modeller forvaltes av et fagråd og oppdateres
løpende. Hver modell evalueres på presisjon, kildebruk, norsk språk-
kvalitet, sertifiseringer og jurisdiksjon.

## For offentlige aktører

Hver datakilde-leverandør (etat, kommune) får en standardisert vei inn:

1. Registrer seg via Maskinporten / ID-porten.
2. Eksponer data via en MCP-server (eier ressursen selv).
3. Definer hvilke modellkategorier som har lov å bruke deres data.
4. Test i sandbox — last opp testspørsmål, sammenlign hvordan ulike
   modeller svarer på etatens faktiske materiale, juster før produksjon.

Sandboxen er viktig: ingen etat skal måtte gå live uten å vite hvordan
modellene faktisk svarer på deres innhold.

## For småkommuner

800 av Norges 357 kommuner har under 10 000 innbyggere. De har sjelden egen
IT-utvikling. nrki skal kunne tilby dem en innbygger-AI som er
forhåndsskreddersydd til deres kommune, gratis, og som kan embeddes på
deres nettside med én linje JavaScript:

```html
<script src="https://nrki.no/widget/<kommune>.js" defer></script>
```

Widgeten er forhåndsmatet med kommunens egne sider, og bruker som standard
norsk-hostede modeller for å holde all data innenfor norsk jurisdiksjon.

## Posisjonering: vi konkurrerer ikke

ChatGPT, Claude og Gemini vil sannsynligvis være bedre enn nrki på de
fleste generelle oppgaver i overskuelig fremtid. Det er greit. nrki er
ikke ment å konkurrere på frontier-ytelse. Det vi tilbyr er noe annet:
tillit, sporbarhet, datasuverenitet, og en infrastruktur bygget av
offentlig sektor for offentlig sektor.

For mange bruksområder kan det være riktig å bruke begge: ChatGPT for
kreativ utforskning, nrki for det som må kunne kildebelegges, arkiveres
og forsvares overfor innbyggeren.
