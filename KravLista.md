# Uppgiftskrav

## Uppgiftskrav på G-nivå

### 1. Planering

- [x] Gör en Figma-skiss av sidan, för både mobil och desktop, innan ni kodar.
- [x] Den färdiga sidan ska följa skissen.
- [ ] Ändringar under arbetets gång är okej, men beskriv dem i `README.md`.

### 2. Struktur och komponenter

- [x] Dela upp appen i rimliga, återanvändbara komponenter med en tydlig struktur.
- [x] Använd props för att skicka data.
- [x] Spara projektdatan separat, t.ex. `data/projects.ts`.
- [x] Rendera projektdatan med `.map()` och korrekta `key`.
- [x] Minst 6 projekt visas som boxar/kort.

### 3. Innehåll

- [x] Portfolion innehåller minst sektionerna:
  - [x] Hem
  - [x] Om mig
  - [x] Projekt
  - [x] Kontakt
- [x] En navigation som länkar till sektionerna, t.ex. `#projekt`.
- [x] Kontaktsektionen visar kontaktuppgifter:
  - [x] E-post
  - [x] GitHub
  - [x] LinkedIn
- [x] Kontaktformuläret är ett VG-krav.

### 4. State och interaktivitet

- [x] Minst två meningsfulla användningar av `useState`, varav en ska filtrera projektlistan.
- [x] Filtret väljer en teknik-tagg i taget, plus ett val som visar alla projekt, t.ex. "Alla".
- [ ] Andra exempel på meningsfull state:
  - [ ] Mobilmeny
  - [ ] Ljust/mörkt tema
  - [ ] Expanderbar "Läs mer"
- [x] Den filtrerade listan ska räknas fram vid rendering, inte sparas i ett eget state.

### 5. Styling och animation

- [x] En enhetlig visuell profil med färger, typografi och avstånd.
- [x] Använd CSS Modules, Tailwind eller välstrukturerad CSS.
- [ ] Helt responsiv från ca 360px upp till desktop-bredd.
- [x] Minst en animation eller transition som förbättrar upplevelsen.
- [x] Animationen kan göras med CSS eller Motion.

### 6. Kvalitet och leverans

- [ ] Inga fel eller React-varningar i konsolen.
- [ ] Driftsatt på Vercel.
- [ ] `README.md` innehåller:
  - [x] Projektbeskrivning och tech stack
  - [x] Hur man kör projektet lokalt
  - [ ] Länk till live-sidan
  - [x] Länk till Figma-skissen


## Uppgiftskrav på VG-nivå

> Allt som G-nivån innefattar, med följande tillägg, utfört med hög kvalitet och självständighet.

### 7. Kontaktformulär med kontrollerade inputs

- [x] Formulärets värden hanteras av ett state med ett objekt, t.ex.:

    ```ts
    {
      name,
      email,
      phone,
      subject,
      message
    }
    ```

- [x] Formuläret innehåller:
  - [x] Input för namn
  - [x] Input för e-post
  - [x] Input för telefon
  - [x] Input för ämne
  - [x] Textarea för meddelande
  - [x] Skicka-knapp

- [x] Alla fält är obligatoriska.
- [x] Felhantering sker via state.
- [x] Om ett värde saknas visas ett felmeddelande bredvid tillhörande fält.
- [x] När valideringen är godkänd visas ett success-meddelande om att mejlet är skickat.
- [x] Inget riktigt mejl behöver skickas.

### 8. Genomtänkt state-design

- [x] State ligger i den närmaste gemensamma föräldern till de komponenter som använder det.

#### Multi-select-filter

- [x] Projektfiltret tillåter flera valda taggar samtidigt.
- [x] De valda taggarna sparas som en array i state.
- [x] Taggar läggs till genom att skapa en ny array.
- [x] Taggar tas bort genom att skapa en ny array med `.filter()`.
- [x] Om inga taggar är valda visas alla projekt.
- [x] Det finns en knapp för att rensa filtret.
- [x] Ni väljer själva om ett projekt ska matcha någon eller alla valda taggar.
- [x] Multi-select-filtret ersätter filtret på G-nivå.

### 9. Avancerad animation

För VG krävs en mer avancerad animation än en enkel hover/transition.

Exempel:

- [ ] Stegvisa animationer när man scrollar.
- [ ] Layout-animationer när projekten filtreras.
- [ ] Animerad öppning och stängning av element, t.ex.:
  - [ ] Mobilmeny
  - [ ] "Läs mer"
  - [ ] Modal
- [ ] `AnimatePresence` kan användas.

### 10. Reflektion

README ska innehålla en reflektion på cirka 200–400 ord.

Reflektionen ska bland annat ta upp:

- [ ] Förklaring av komponentarkitekturen.
- [ ] Förklaring av beslut kring state.
- [ ] Vad ni skulle göra annorlunda.
- [x] Eventuell användning av AI-verktyg:
  - [x] Vilka AI-verktyg användes?
  - [x] Vad användes de till?
  - [x] Vilken kod/idé skapades med hjälp av AI?
  - [x] Vad användes inte från AI-genererad kod?

### 11. Kvalitet

- [ ] All funktionalitet fungerar utan fel.
- [ ] Inga React-varningar eller fel i konsolen.
- [x] Komponenten är uppdelad på ett tydligt och återanvändbart sätt.
- [x] Props används där det är lämpligt.
- [x] State ligger på rätt nivå i komponentträdet.
- [ ] Kod och filstruktur är lätt att förstå och underhålla.
- [ ] Projektet fungerar på både mobil och desktop.
- [ ] Projektet är driftsatt på Vercel.
- [ ] README är komplett och uppdaterad.