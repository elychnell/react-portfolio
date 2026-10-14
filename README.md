# React Portfolio

En personlig portfolio-webbplats som byggts som en del av mina frontendutvecklingsstudier på Medieinstitutet.

Portfolion är en responsiv React-applikation av typen Single Page Application (SPA) som presenterar mina projekt, kompetenser  
och kontaktuppgifter. Projektet är byggt med React, TypeScript och Tailwind CSS och kommer att vidareutvecklas under utbildningens  
gång för att så småningom användas som min professionella portfolio.

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

Det ursprungliga designkonceptet skapades i Figma innan utvecklingen  
påbörjades, med layouter för både dator och mobil.

**Figma-design:** [Designkonceptet i Figma](https://www.figma.com/make/K3sKH5Sa7179BQvtFCyKwI/Portfolio-Website-Wireframe)

Figma-resultatet används som designunderlag och inspiration,  
men den färdiga implementationen har utvecklats självständigt.

## Ändringar under arbetets gång

Under arbetets gång har designen anpassats på flera ställen. Figma-skissen har i princip  
fungerat som en grund att utgå ifrån, snarare än en exakt mall för den färdiga webbplatsen.

Den färdiga sidan behåller den grundläggande layouten, typsnittet och delar av textinnehållet  
från konceptet, men har fått ett eget färgtema. Projektkorten har också fått en annan struktur.  

Utöver detta har jag lagt till dekorationer, ikoner och animationer som inte fanns med i det ursprungliga konceptet.

Komponenterna `DevCard` och `CatBubble` är särskilt inspirerade av det ursprungliga designkonceptet,  
men har modifierats och anpassats till den färdiga webbplatsens utseende.

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


## Publicerad webbplats: 
[Öppna portfolion på Vercel](https://react-portfolio-delta-livid.vercel.app/)

## Projektkrav

Projektet utgår från en skoluppgift där kraven omfattar en  
React-baserad SPA-portfolio med följande funktioner och tekniker:

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

Sidan är uppdelad i återanvändbara komponenter med tydliga ansvarsområden. I `src/App.tsx` sätts sidans huvudsektioner samman.  
Den dekorativa komponenten `Ghost` ligger separat från det huvudsakliga sidinnehållet.

Projektsektionen är uppdelad i `Projects`, `ProjectFilter` och `ProjectCard`. `Projects` ansvarar för filtrering och val av expanderat projekt,  
medan de andra komponenterna hanterar presentationen av filtmenyn respektive projektkorten.

Kontaktdelen använder den separata komponenten `ContactForm`, och `SocialLinks` återanvänds för kontaktuppgifter och profilänkar.  
Komponenter som `Icon`, `CatBubble` och `Decoration` används på flera ställen för att hålla utseendet konsekvent och undvika onödig duplicering.

Projektinformationen ligger separat i `src/data/projects.ts` och följer typen `Project` i `src/types/types.ts`.  
Själva filstrukturen är indelad i mappar för respektive del av sidan och de komponenter som används på flera ställen ligger direkt i `src/components`.  
Det gör det enklare att uppdatera projektens innehåll utan att behöva ändra komponenternas struktur.

## State-hantering

Jag har försökt placera state så nära den funktionalitet som använder det som möjligt  
och skickar vidare värden och funktioner med props när flera komponenter behöver samarbeta.

I `Projects` används `selectedTags`, en array med valda tekniktaggar, för att hantera projektfiltret.  
När en tagg väljs skapas en ny array, och när en tagg avmarkeras används `.filter()` för att ta bort den.  
Om inga taggar är valda visas alla projekt. Vid flera val visas projekt som matchar minst en av taggarna.  

Samma komponent använder `selectedProjectId` för att hålla reda på vilket projektkort som är expanderat.  
Den synliga projektlistan räknas fram från projektdata och aktuella val vid rendering i stället för att sparas i ett separat state.

I `ContactForm` samlas formulärets värden i ett `formData`-objekt. Separata state-värden används för valideringsfel  
och för att hålla reda på om formuläret har godkänts. På så sätt kan varje fält visa sitt eget felmeddelande.

Den dekorativa komponenten `Ghost` har eget state för position och animation, eftersom dessa värden bara används där.

## Reflektion

Under arbetet med portfolion har jag fått öva på att bygga en React-applikation med återanvändbara komponenter, TypeScript och separat datahantering.  
Jag har också fått fundera en del på hur jag ska dela upp komponenterna och var olika delar av funktionaliteten hör hemma.

State-hanteringen har varit en av de delar jag fått tänka mest på. Projektfiltret ska kunna hantera flera val samtidigt, och projektkorten ska kunna  
expanderas utan att alla kort påverkas på fel sätt. Jag har därför fått fundera på var state ska ligga och hur jag kan låta komponenterna samarbeta  
med hjälp av props. Kontaktformuläret har varit ett annat tillfälle att jobba med state, framför allt när det gäller formulärvärden och validering.

Animationerna med Motion har varit lite av en utmaning. Det var framför allt när jag kombinerade layoutförändringar med transform- och opacitetsanimationer som resultatet ibland  
blev ryckigt. Jag fick testa mig fram och justera delays för att dela upp animationen i flera steg. Det tog lite tid, men till slut fick jag till ett resultat som jag var ganska nöjd med.

Jag använde också Lighthouse för att kontrollera hur sidan presterade. Där upptäckte jag bland annat att bilderna var onödigt stora. Jag lärde mig även att resultatet  
blir missvisande om man testar utvecklingsversionen i stället för en produktionsbuild. Efter att ha optimerat bilderna och testat igen förbättrades prestandapoängen avsevärt.

Tillgängligheten var ytterligare ett område jag behövde se över. Jag fick justera färgkontrasten för text och viktiga interaktiva element för att nå WCAG AA.  
Några rent dekorativa element behöll sina ursprungliga färger eftersom de inte fyller samma funktion.

### Vad jag skulle göra annorlunda

Eftersom Tailwind var nytt för mig började jag med desktop-layouten, vilket kändes enklare när jag skulle lära mig hur klasserna fungerade.  
I efterhand tror jag att det som vanligt hade varit smidigare att börja med mobilversionen och sedan bygga vidare därifrån.

Jag skulle också ha optimerat bilderna tidigare i projektet i stället för att upptäcka problemen först när jag körde Lighthouse.  
Det hade varit bättre att bestämma lämpliga bildstorlekar redan från början.

Med animationerna hade jag nog också vunnit på att ta en sak i taget. Jag försökte kombinera flera animationstyper ganska tidigt,  
vilket gjorde det svårare att förstå vad som orsakade problemen. Det går att göra mycket med Motion, men det finns nog en poäng med att gå innan man springer.

### ## Användning av AI-verktyg

Figma AI användes för att ta fram ett första designkoncept utifrån en prompt. Verktyget genererade även en implementation med React  
och Tailwind CSS, men den genererade koden användes inte direkt i projektet. `DevCard` och `CatBubble` komponenterna är inspirerad  
av det visuella konceptet från Figma-exemplet, men har anpassats till min egen design.

ChatGPT användes som stöd vid felsökning och för att diskutera tekniska lösningar inom React, state-hantering och animationer.  
Jag använde det även för att hitta verktyg för att kontrollera färgkontrast och komprimera bilder.

GitHub Copilots autokomplettering var till stor hjälp i början av utvecklingen. När projektet växte upplevde jag däremot att förslagen  
blev mindre relevanta och ibland inte passade in alls. Det blev en påminnelse om vikten av att granska och förstå kodförslag innan man accepterar dem.

Jag märkte något liknande med ChatGPT. Ju längre projektet kom, desto oftare upplevde jag att tidigare beslut och delar av sammanhanget  
inte togs med i förslagen. Ibland föreslogs också mer komplicerade lösningar än vad som behövdes. Samtidigt har ChatGPT varit ett bra  
verktyg för att förklara specifika delar av koden, inte minst Tailwind-klasser, och hjälpa mig att förstå hur de fungerar.