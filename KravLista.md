# Uppgiftskrav

## Uppgiftskrav på G-nivå

### 1. Planering

- [X] Gör en Figma-skiss av sidan, för både mobil och desktop, innan ni kodar.
- [ ] Den färdiga sidan ska följa skissen.
- [ ] Ändringar under arbetets gång är okej, men beskriv dem i `README.md`.

### 2. Struktur och komponenter

- [ ] Dela upp appen i rimliga, återanvändbara komponenter med en tydlig struktur.
- [X] Använd props för att skicka data.
- [X] Spara projektdatan separat, t.ex. `data/projects.ts`.
- [ ] Rendera projektdatan med `.map()` och korrekta `key`.
- [ ] Minst 6 projekt visas som boxar/kort.

### 3. Innehåll

- [ ] Portfolion innehåller minst sektionerna:
  - [ ] Hem
  - [ ] Om mig
  - [ ] Projekt
  - [ ] Kontakt
- [ ] En navigation som länkar till sektionerna, t.ex. `#projekt`.
- [ ] Kontaktsektionen visar kontaktuppgifter, t.ex.:
  - [ ] E-post
  - [ ] GitHub
  - [ ] LinkedIn
- [ ] Kontaktformuläret är ett VG-krav.

### 4. State och interaktivitet

- [ ] Minst två meningsfulla användningar av `useState`, varav en ska filtrera projektlistan.
- [ ] Filtret väljer en teknik-tagg i taget, plus ett val som visar alla projekt, t.ex. "Alla".
- [ ] Andra exempel på meningsfull state:
  - [ ] Mobilmeny
  - [ ] Ljust/mörkt tema
  - [ ] Expanderbar "Läs mer"
- [ ] Den filtrerade listan ska räknas fram vid rendering, inte sparas i ett eget state.

### 5. Styling och animation

- [ ] En enhetlig visuell profil med färger, typografi och avstånd.
- [ ] Använd CSS Modules, Tailwind eller välstrukturerad CSS.
- [ ] Helt responsiv från ca 360px upp till desktop-bredd.
- [ ] Minst en animation eller transition som förbättrar upplevelsen.
- [ ] Animationen kan göras med CSS eller Motion.

### 6. Kvalitet och leverans

- [ ] Inga fel eller React-varningar i konsolen.
- [ ] Driftsatt på Vercel.
- [ ] `README.md` innehåller:
  - [ ] Projektbeskrivning och tech stack
  - [ ] Hur man kör projektet lokalt
  - [ ] Länk till live-sidan
  - [ ] Länk till Figma-skissen


## Uppgiftskrav på VG-nivå

> Allt som G-nivån innefattar, med följande tillägg, utfört med hög kvalitet och självständighet.

### 7. Kontaktformulär med kontrollerade inputs

- [ ] Formulärets värden hanteras av ett state med ett objekt, t.ex.:
  ```ts
  { name, email, phone, subject, message }