import type { Project } from "../types/types"

export const projects: Project[] = [
  {
    id: 1,
    title: "Regn.nu (WIP)",
    description: "Det finns inget dåligt väder, bara dåliga kläder. Regn.nu är en enkel sida för att visa vad vädret är där du befinner dig just nu. Sidan använder sig av en väder-API för att hämta information om vädret och visar det på ett enkelt sätt. Talar om när det troligtvis kommer att börja regna eller snöa där du är. Sidan föreslår även kläder som passar vädret under dagen. Sidan är fortfarande under utveckling.",
    longDescription: "En viktig del av projektet är hanteringen av användarens position. Om webbläsaren tillåter geolocation används koordinaterna för att hämta väderinformation för användarens plats. Jag har även byggt stöd för att hitta närliggande orter när positionen inte är tillgänglig. Projektet har gett mig praktisk erfarenhet av TypeScript, API-integration, asynkron datahantering och att kombinera flera datakällor i ett användarvänligt gränssnitt. Jag utvecklar fortfarande projektet och förbättrar funktionaliteten löpande.",
    tags: ["TypeScript","SCSS", "API", "Geolocation", "Vite"],
    image: '/img/project1.webp',
    repoUrl: 'https://github.com/elychnell/regn-nu',
    liveUrl: 'https://elychnell.github.io/regn-nu/'
  },
  {
     id: 2,
     title: "Temple of Five",
     description: "The Temple of Five är ett digitalt escape room där spelaren löser fem elementbaserade utmaningar, var och en med sin egen spelmekanik. Jag utvecklade Earth Room från grunden, inklusive spellogik och timerfunktionalitet, och bidrog även till integration, felsökning och testning som en del av teamet.",
     longDescription: "Mitt huvudsakliga ansvarsområde var Earth Room, där jag utvecklade spelmekaniken och timerfunktionaliteten från grunden. Utöver detta arbetade jag med integrationen mellan teamets olika delar samt felsökning och testning. Projektet gav mig erfarenhet av att utveckla interaktiv funktionalitet i TypeScript och att samarbeta kring en gemensam kodbas där komponenterna behöver fungera tillsammans.",
     tags: ["TypeScript", "HTML", "SCSS", "Vite"],
     image: "/img/templeOfFive.webp",
     repoUrl: "https://github.com/elychnell/Temple-Of-Five",
     liveUrl: "https://elychnell.github.io/Temple-Of-Five/"
  },
  {
    id: 3,
    title: "Keyboard Warrior-Legacy",
    description: "Keyboard Warrior är ett webbaserat skrivspel där spelaren tränar skrivhastighet och precision genom olika typing challenges. Den ursprungliga versionen byggdes med PHP, MySQL, JavaScript och jQuery och utvecklades vidare med användarkonton, vänsystem, statistik och multiplayerfunktionalitet. Projektet är idag bevarat som en legacy-version och används som grund för en modernare omskrivning.",
    longDescription: "Projektet har vuxit från ett enklare skrivspel till en applikation med användarkonton, vänsystem, statistik och multiplayerfunktionalitet. Den äldre kodbasen bygger på JavaScript och jQuery i frontend samt PHP och MySQL på serversidan. Jag behåller versionen som en fungerande referens för den modernare omskrivningen. Det gör det möjligt att jämföra den ursprungliga lösningen med en ny arkitektur och identifiera vad som kan förbättras.",
    tags: ["JavaScript", "jQuery", "HTML", "CSS", "PHP", "MySQL"],
    image: '/img/project2.webp',
    repoUrl: 'https://github.com/elychnell/keyboardWarrior-Legacy',
    liveUrl: ''
  },
  {
   id: 4,
    title: "Keyboard Warrior (WIP)",
    description: "Keyboard Warrior är en modern omskrivning av mitt tidigare skrivspel. Målet är att bygga om applikationen med TypeScript, WebSockets, Express och PostgreSQL med fokus på en mer skalbar arkitektur och realtidsbaserad multiplayer. Projektet är fortfarande under utveckling.",
    longDescription: "Målet med omskrivningen är att modernisera både frontend och backend och skapa en stabil grund för realtidsbaserad multiplayer. TypeScript används för frontendutvecklingen, medan WebSockets ska hantera kommunikationen i realtid. Express och PostgreSQL ingår i den planerade serverarkitekturen. Jag använder den äldre versionen som utgångspunkt och utvecklar den nya lösningen stegvis, med fokus på tydligare struktur, separation mellan klient och server samt bättre möjligheter att vidareutveckla spelet.",
    tags: ["TypeScript", "WebSockets", "Node.js", "Express", "PostgreSQL"],
    image: '/img/project3.webp',
    repoUrl: 'https://github.com/elychnell/keyboard-warrior',
    liveUrl: ''
    /* Live länk kommer snart på Render/Neon (WIP) */
  },
  {
  id: 5,
  title: "Book Review API",
  description: "Ett REST API byggt med Node.js och Express där användare kan hantera böcker och recensioner. Projektet utvecklades som ett grupparbete med fokus på API-struktur, routes, datahantering och backendutveckling.",
  longDescription: "I det här grupparbetet låg fokus på att bygga ett REST API med Node.js och Express för hantering av böcker och recensioner. Arbetet omfattade API-struktur, routes och datahantering. Projektet gav mig praktisk erfarenhet av hur en backend exponerar funktionalitet genom endpoints och hur olika delar av en applikation behöver samverka. Det gav också en bättre förståelse för samspelet mellan frontend och backend.",
  tags: ["Node.js", "Express", "API"],
  image: '/img/bookAPI.webp',
  repoUrl: 'https://github.com/elychnell/Gruppuppgift-API-utveckling',
  liveUrl: 'https://gruppuppgift-api-utveckling.vercel.app/'
},{
  id: 6,
  title: "React Portfolio",
  description: "Min personliga portfolio byggd med React och TypeScript. Projektet fokuserar på återanvändbara komponenter, genomtänkt state-hantering, responsiv design och interaktiva funktioner. Portfolion utvecklas löpande under min frontendutbildning och är tänkt att användas som mitt professionella portfolio.",
  longDescription: "Jag bygger portfolion som en del av min frontendutbildning och använder den samtidigt för att utveckla mina kunskaper i React och TypeScript. Projektet innehåller återanvändbara komponenter, filtrering av projekt utifrån tekniktaggar och interaktiva projektkort med expanderat läge. Jag arbetar även med responsiv layout, Tailwind CSS och animationer med Motion. Eftersom portfolion är tänkt att användas i mitt framtida jobbsökande utvecklar jag den löpande med fokus på tydlig presentation, användarvänlighet och kod som är enkel att underhålla.",
  tags: ["React", "TypeScript", "Tailwind", "Vite"],
  image: '/img/project4.webp',
  repoUrl: 'https://github.com/elychnell/react-portfolio',
  liveUrl: 'https://react-portfolio-delta-livid.vercel.app/' 
  }
  
]

export const filterTags = [
  "React",
  "TypeScript",
  "JavaScript",
  "CSS",
  "SCSS",
  "Tailwind",
  "Vite",
  "API",
  "Node.js",
]