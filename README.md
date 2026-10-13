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

## Projekt

Portfolion presenterar för närvarande sex projekt:

- **Regn.nu** – Väder- och nederbördsinformation med hjälp av SMHI:s API
- **Phonebook** – Kontaktadministrationsapplikation byggd med React och TypeScript
- **Keyboard Warrior** – Skrivspel byggt med TypeScript, Express och PostgreSQL
- **Book Review API** – REST API byggt med Node.js och Express
- **Temple of Five** – Grupprojekt
- **React Portfolio** – Det här portfolio-projektet

Projektlistan kommer att uppdateras i takt med att jag utvecklar fler projekt under utbildningen.

## Design

Det ursprungliga designkonceptet skapades i Figma innan utvecklingen påbörjades, med layouter för både dator och mobil.

**Figma-design:**  
[Visa designkonceptet i Figma](https://www.figma.com/make/K3sKH5Sa7179BQvtFCyKwI/Portfolio-Website-Wireframe)

Figma-resultatet används enbart som inspiration och som designunderlag för projektet.
Eventuella större förändringar som görs under utvecklingen kommer att dokumenteras här.

**den genererade koden används inte i det här projektet**.

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

[Vercel länk](https://react-portfolio-delta-livid.vercel.app/)

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

## Reflektion

*Fylls i när projektet är färdigt.*

Jag använde Figma AI för att snabbt ta fram ett första designkoncept utifrån en detaljerad prompt.
Det genererade resultatet innehöll även en komplett implementation med React och Tailwind CSS


Reflektionen kommer att behandla komponentarkitekturen,
beslut kring state-hantering, vad jag skulle göra annorlunda
i efterhand samt hur AI-verktyg har använts under projektets gång.