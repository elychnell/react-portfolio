import type { Project } from "../types/types"

export const projects: Project[] = [
  {
    id: 1,
    title: "Regn.nu (WIP)",
    description: "Det finns inget dåligt väder, bara dåliga kläder. Regn.nu är en enkel sida för att visa var vädret är där du befinner dig just nu. Sidan använder sig av en väder-API för att hämta information om vädret och visar det på ett enkelt sätt. Talar om när det antgligen kommer att börja regna eller snöa där du är. Sidan föreslår även kläder som passar vädret under dagen. Sidan är fortfarande under utveckling.",
    tags: ["TypeScript","SCSS", "API", "Geolocation", "Vite"],
    image: 'src/assets/img/project1.jpg',
    repoUrl: 'https://github.com/elychnell/regn-nu',
    liveUrl: 'https://elychnell.github.io/regn-nu/'
  },
  {
     id: 2,
     title: "Temple of Five",
     description: "The Temple of Five är ett digitalt escape room där spelaren löser fem elementbaserade utmaningar, var och en med sin egen spelmekanik. Jag utvecklade Earth Room från grunden, inklusive spellogik och timerfunktionalitet, och bidrog även till integration, felsökning och testning som en del av teamet.",
     tags: ["TypeScript", "HTML", "SCSS", "Vite"],
     image: "src/assets/img/templeOfFive.png",
     repoUrl: "https://github.com/elychnell/Temple-Of-Five",
     liveUrl: "https://elychnell.github.io/Temple-Of-Five/"
  },
  {
    id: 3,
    title: "Keyboard Warrior-Legacy",
    description: "Keyboard Warrior är ett webbaserat skrivspel där spelaren tränar skrivhastighet och precision genom olika typing challenges. Den ursprungliga versionen byggdes med PHP, MySQL, JavaScript och jQuery och utvecklades vidare med användarkonton, vänsystem, statistik och multiplayerfunktionalitet. Projektet är idag bevarat som en legacy-version och används som grund för en modernare omskrivning.",
    tags: ["JavaScript", "jQuery", "HTML", "CSS", "PHP", "MySQL"],
    image: 'src/assets/img/project2.jpg',
    repoUrl: 'https://github.com/elychnell/keyboardWarrior-Legacy',
    liveUrl: ''
  },
  {
   id: 4,
    title: "Keyboard Warrior (WIP)",
    description: "Keyboard Warrior är en modern omskrivning av mitt tidigare skrivspel. Målet är att bygga om applikationen med TypeScript, WebSockets, Express och PostgreSQL med fokus på en mer skalbar arkitektur och realtidsbaserad multiplayer. Projektet är fortfarande under utveckling.",
    tags: ["TypeScript", "WebSockets", "Node.js", "Express", "PostgreSQL"],
    image: 'src/assets/img/project3.jpg',
    repoUrl: 'https://github.com/elychnell/keyboard-warrior',
    liveUrl: 'https://elychnell.github.io/keyboard-warrior/'
  },
  {
  id: 5,
  title: "Book Review API",
  description: "Ett REST API byggt med Node.js och Express där användare kan hantera böcker och recensioner. Projektet utvecklades som ett grupparbete med fokus på API-struktur, routes, datahantering och backendutveckling.",
  tags: ["Node.js", "Express", "API"],
  image: 'src/assets/img/project5.jpg',
  repoUrl: 'https://github.com/elychnell/Gruppuppgift-API-utveckling',
  liveUrl: 'https://gruppuppgift-api-utveckling.vercel.app/'
},{
  id: 6,
  title: "React Portfolio",
  description: "Min personliga portfolio byggd med React och TypeScript. Projektet fokuserar på återanvändbara komponenter, genomtänkt state-hantering, responsiv design och interaktiva funktioner. Portfolion utvecklas löpande under min frontendutbildning och är tänkt att användas som mitt professionella portfolio.",
  tags: ["React", "TypeScript", "Tailwind", "Vite"],
  image: 'src/assets/img/project4.jpg',
  repoUrl: 'https://github.com/elychnell/react-portfolio',
  liveUrl: '...' 
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