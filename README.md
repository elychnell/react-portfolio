# React Portfolio

En personlig portfolio-webbplats som byggts som en del av mina frontendutvecklingsstudier på Medieinstitutet.
Portfolion är en responsiv React-applikation av typen Single Page Application (SPA) som presenterar mina projekt, kompetenser och kontaktuppgifter.
Projektet är byggt med React, TypeScript och Tailwind CSS och kommer att vidareutvecklas under utbildningens gång för att så småningom användas som min professionella portfolio.

## Teknikstack

- React
- TypeScript
- Vite
- Tailwind CSS
- Git & GitHub
- Vercel
- Figma
- Motion (Framer Motion)

## Funktioner

- Responsiv portfolio som består av en enda sida
- Navigering mellan olika sidsektioner
- Projektpresentation med återanvändbara projektkort
- Tekniktaggar för varje projekt
- Filtrering av projekt med stöd för flera val
- Responsiv mobilnavigering
- Kontrollerat kontaktformulär med validering
- Bekräftelsemeddelande vid godkänd validering
- Responsiv design för mobil, surfplatta och dator
- CSS-övergångar och avancerade animationer
- Framer Motion för att lägga till animationer och övergångar
- Kontaktformuläret demonstrerar frontendvalidering och skickar inget riktigt mejl.

## Projekt

Portfolion presenterar för närvarande sex projekt:

- **Regn.nu** – Väder- och nederbördsinformation med hjälp av SMHI:s API
- **Temple of Five** – Grupprojekt i form av ett digitalt escape room
- **Keyboard Warrior – Legacy** – Den ursprungliga versionen av ett webbaserat skrivspel
- **Keyboard Warrior (WIP)** – En modern omskrivning av skrivspelet under utveckling
- **Book Review API** – REST API byggt med Node.js och Express
- **React Portfolio** – Den här portfolio-webbplatsen

Projektlistan kommer att uppdateras i takt med att jag utvecklar fler projekt under utbildningen.

## Design

Det ursprungliga designkonceptet skapades i Figma innan utvecklingen påbörjades, med layouter för både dator och mobil.

**Figma-design:**  
[Designkonceptet i Figma](https://www.figma.com/make/K3sKH5Sa7179BQvtFCyKwI/Portfolio-Website-Wireframe)

Figma-resultatet används som designunderlag och inspiration, men den färdiga implementationen har utvecklats självständigt.

Under arbetets gång har designen anpassats på flera ställen. Devcard-komponenten använder exempelvis ett porträtt i stället för initialerna
i Figma-exemplet, och den yttre inramningen har förenklats. Projektsektionen har också utvecklats med teknikfilter och expanderbara projektkort.

## Köra projektet lokalt

Klona repot och installera beroendena:

```bash
git clone https://github.com/elychnell/react-portfolio.git
cd react-portfolio
npm install
```

Starta utvecklingsservern:

```bash
npm run dev
```

Applikationen blir då tillgänglig på den lokala utvecklingsadress som Vite visar i terminalen.

## Publicerad webbplats

[Öppna portfolion på Vercel](https://react-portfolio-delta-livid.vercel.app/)

## Projektkrav

Projektet utgår från en skoluppgift där kraven omfattar en React-baserad SPA-portfolio med följande funktioner och tekniker:

- React och TypeScript med Vite
- Återanvändbara komponenter och props
- Projektdata lagrad separat och renderad med `.map()`
- Minst sex projekt
- Sektionerna Home, About, Projects och Contact
- Responsiv design
- Projektfiltrering
- Meningsfull användning av React state
- Minst en animation eller övergång
- GitHub-repo
- Publicering via Vercel
- Skisser i Figma för dator och mobil

### Krav för väl godkänt (VG)

Projektet utvecklas med VG-kraven i åtanke, bland annat:

- Kontrollerat kontaktformulär
- Objektbaserad state för formulärdata
- Validering och felmeddelanden för enskilda fält
- Bekräftelsemeddelande efter godkänd validering
- Genomtänkt placering av state
- Filtrering av projekt med stöd för flera val
- Animerade gränssnittsinteraktioner
- Reflektion kring komponentstruktur och state-arkitektur


## Komponentarkitektur

Applikationen är uppdelad i återanvändbara komponenter med tydliga ansvarsområden. I `src/App.tsx` sätts sidans huvudsektioner samman: `Navbar`, `Hero`, `About`, `Projects`, `Contact` och `Footer`.
Den dekorativa komponenten `Ghost` ligger separat från det huvudsakliga sidinnehållet.

Projektsektionen är uppdelad i `Projects`, `ProjectFilter` och `ProjectCard`. `Projects` ansvarar för filtrering och val av expanderat projekt,
medan de andra komponenterna hanterar presentationen av filtret respektive projektkorten. Data och funktioner skickas vidare genom props.

Kontaktsektionen använder den separata komponenten `ContactForm`, och `SocialLinks` återanvänds för kontaktuppgifter och profilänkar.
Komponenter som `Icon`, `CatBubble` och `Decoration` används på flera ställen för att hålla utseendet konsekvent och undvika onödig duplicering.

Projektinformationen ligger separat i `src/data/projects.ts` och följer typen `Project` i `src/types/types.ts`.
Det gör det enklare att uppdatera projektens innehåll utan att behöva ändra komponenternas struktur.

## State-hantering

Jag har försökt placera state så nära den funktionalitet som använder det som möjligt och skickar vidare värden och funktioner med props när flera komponenter behöver samarbeta.

I `Projects` används `selectedTags`, en array med valda tekniktaggar, för att hantera projektfiltret.
När en tagg väljs skapas en ny array, och när en tagg avmarkeras används `.filter()` för att ta bort den.
Om inga taggar är valda visas alla projekt. Vid flera val visas projekt som matchar minst en av taggarna.

Samma komponent använder `selectedProjectId` för att hålla reda på vilket projektkort som är expanderat.
Den synliga projektlistan räknas fram från projektdata och aktuella val vid rendering i stället för att sparas i ett separat state.

I `ContactForm` samlas formulärets värden i ett `formData`-objekt. Separata state-värden används för valideringsfel
och för att hålla reda på om formuläret har godkänts. På så sätt kan varje fält visa sitt eget felmeddelande.

Den dekorativa komponenten `Ghost` har eget state för position och animation, eftersom dessa värden bara används där.

## Reflektion

Arbetet med portfolion har gett mig praktisk erfarenhet av att bygga en React-applikation med återanvändbara komponenter,
TypeScript och separat datahantering. Jag har fått en bättre förståelse för hur komponenternas ansvarsområden kan delas upp
och hur props används för att låta olika delar av applikationen samarbeta.

En viktig del av arbetet har varit state-hanteringen. Projektfiltret kombinerar flera val, medan de expanderbara projektkorten
kräver att information om det valda projektet delas mellan komponenter. Kontaktformuläret har samtidigt gett mig erfarenhet av
kontrollerade inputs, validering och individuella felmeddelanden.

Jag har också lärt mig mer om animationer med Motion. Det har varit särskilt utmanande att kombinera layoutförändringar med
transform- och opacitetsanimationer utan att gränssnittet upplevs ryckigt. Genom att testa olika lösningar har jag fått en
bättre förståelse för hur animationer kan påverka layouten.

Jag använde Lighthouse för att utvärdera sidan och upptäckte bland annat att bildfilerna var onödigt stora.
Jag lärde mig också att en utvecklingsbuild inte ger en rättvis bild av sidans prestanda och att Lighthouse
därför bör köras mot en produktionsbuild. Genom att optimera bilderna och testa en produktionsbuild förbättrades prestandapoängen avsevärt.

Tillgängligheten krävde också en del arbete med färgkontraster.
Jag justerade kontrasten för text och viktiga interaktiva element för att uppfylla WCAG AA.
Några rent dekorativa element behöll sina ursprungliga färger.


### Vad jag skulle göra annorlunda

Om jag började om skulle jag testa responsiviteten mer systematiskt redan från början, i stället för att huvudsakligen finjustera layouten på desktop.
Jag tror att eftersom tailwind var nytt för mig så kändes det enklare att lära sig och testa desktop-layouten först,
men det hade nog varit bättre att börja med mobilversionen och sedan bygga ut den.

Jag skulle också optimera bilderna tidigare och bestämma lämpliga bilddimensioner innan de lades in i projektet.

För de mer avancerade animationerna skulle jag planera animationens olika steg tydligare och börja med en enklare
lösning innan jag kombinerade flera animationstyper. Det hade sannolikt gjort felsökningen enklare och sparat tid.

Det går att göra mycket med motion men det finns nog en poäng med att gå innan man springer.

### Användning av AI-verktyg

Figma AI användes för att ta fram ett första designkoncept utifrån en prompt. Verktyget genererade även en implementation med React och Tailwind CSS, men den genererade koden användes inte direkt i projektet. `DevCard` är inspirerad av det visuella konceptet från Figma-exemplet, men har anpassats till min egen design. Bland annat har jag ersatt initialerna med ett porträtt och förenklat den yttre inramningen.

ChatGPT användes som stöd vid felsökning och för att diskutera och förstå tekniska lösningar inom React, state-hantering och animationer.
Jag använde det även för att hitta verktyg för att kontrollera färgkontrast och komprimera bilder.

GitHub Copilots autokomplettering var till stor hjälp i början av utvecklingen. När projektet växte upplevde jag däremot att förslagen blev mindre relevanta
och ibland inte passade den befintliga lösningen. Det har återigen gjort mig mer medveten om vikten av att granska och förstå kodförslag i stället för att acceptera dem automatiskt.