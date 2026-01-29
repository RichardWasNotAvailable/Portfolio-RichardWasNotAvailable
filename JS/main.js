  // <-!----- Language Section -->

console.log("i18n loaded");

const translations = {
  en: {
    home: "Home",
    projects: "Projects",
    contact: "Contact",
    heroTitle: "Welcome to my Website!",
    intro1: "Hello, please allow me to introduce myself. I'm Richard, a 19-year-old programmer living in the Netherlands.",
    intro2: "Are you interested in my work? Consider taking a look at my website!",
    contactLangsTitle: "Languages you can contact me in:",
    progLangsTitle: "Programming Languages I Use",

    langGerman: "German",
    langEnglish: "English",
    langDutch: "Dutch",

    label: "English",
    flag: "../IMG/Flag_of_the_United_Kingdom.svg_.png",
    contactIntro: "You can find me on the following platforms:",
emailLabel: "Your Email",
messageLabel: "Message",
sendBtn: "Send",

projectsIntro: "Welcome to the project page! Find my previous projects below.",

trafficTitle: "Traffic Simulator",
trafficDesc: "A project representing old web games that are endless but fun.",

cookieTitle: "Cookie Clicker",
cookieDesc: "A school project cookie clicker game made in 10 weeks with a classmate.",

churpifyTitle: "Churpify: The Twitter Clone",
churpifyDesc: "A group project MVC website based on an old Twitter clone for learning purposes.",

PortfolioDesc: "The website you are currently on is also one of my projects, the website was written using HTML, TailwindCSS and JavaScript.",

BadWebsiteDesc: "This website was part of a school project to make the worst website ever in 2 days time, with lots of ads, and overall just really bad."

    
  },

  nl: {
    home: "Home",
    projects: "Projecten",
    contact: "Contact",
    heroTitle: "Welkom op mijn website!",
    intro1: "Hallo, ik ben Richard, een 19-jarige programmeur uit Nederland.",
    intro2: "Geïnteresseerd in mijn werk? Neem gerust een kijkje!",
    contactLangsTitle: "Talen waarin je contact met mij kunt opnemen:",
    progLangsTitle: "Programmeertalen die ik gebruik",

    langGerman: "Duits",
    langEnglish: "Engels",
    langDutch: "Nederlands",

    label: "Nederlands",
    flag: "../IMG/Flag_of_the_Netherlands.svg.png",
    contactIntro: "Je kunt mij vinden op de volgende platforms:",
emailLabel: "Jouw e-mailadres",
messageLabel: "Bericht",
sendBtn: "Versturen",

projectsIntro: "Welkom op de projectenpagina! Hieronder vind je mijn eerdere projecten.",

trafficTitle: "Verkeerssimulator",
trafficDesc: "Een project dat oude eindeloze maar leuke webgames nabootst.",

cookieTitle: "Cookie Clicker",
cookieDesc: "Een schoolproject: een cookie clicker game gemaakt in 10 weken met een klasgenoot.",

churpifyTitle: "Churpify: De Twitter-kloon",
churpifyDesc: "Een groepsproject MVC-website gebaseerd op een oude Twitter-kloon.",

PortfolioDesc: "De website waar je je nu op is ook 1 van mijn projecten, de website is geschreven door middel van HTML,TailwindCSS en Javascript.",
BadWebsiteDesc: "Deze Website is gemaakt als schoolproject zijnde, met een gebruikerservaring die juist NIET goed is, dit project moest in 2 dagen gemaakt worden."

  },

  de: {
    home: "Startseite",
    projects: "Projekte",
    contact: "Kontakt",
    heroTitle: "Willkommen auf meiner Website!",
    intro1: "Hallo, ich bin Richard, ein 19-jähriger Programmierer aus den Niederlanden.",
    intro2: "Interessiert an meiner Arbeit? Dann schau dich gerne um!",
    contactLangsTitle: "Sprachen, in denen du mich kontaktieren kannst:",
    progLangsTitle: "Programmiersprachen, die ich verwende",

    langGerman: "Deutsch",
    langEnglish: "Englisch",
    langDutch: "Niederländisch",

    label: "Deutsch",
    flag: "../IMG/Flag_of_Germany.svg.png",
    contactIntro: "Du findest mich auf den folgenden Plattformen:",
emailLabel: "Deine E-Mail-Adresse",
messageLabel: "Nachricht",
sendBtn: "Senden",

projectsIntro: "Willkommen auf der Projektseite! Unten findest du meine bisherigen Projekte.",

trafficTitle: "Verkehrssimulator",
trafficDesc: "Ein Projekt, das alte endlose, aber unterhaltsame Webspiele darstellt.",

cookieTitle: "Cookie Clicker",
cookieDesc: "Ein Schulprojekt: ein Cookie-Clicker-Spiel, das in 10 Wochen mit einem Mitschüler erstellt wurde.",

churpifyTitle: "Churpify: Der Twitter-Klon",
churpifyDesc: "Ein Gruppenprojekt (MVC-Website) basierend auf einem alten Twitter-Klon.",

PortfolioDesc: "Die Website, auf der Sie sich gerade befinden, ist ebenfalls eines meiner Projekte. Die Website wurde mit HTML, TailwindCSS und JavaScript erstellt.",
BadWebsiteDesc: "Diese Website entstand im Rahmen eines Schulprojekts, bei dem es darum ging, innerhalb von zwei Tagen die schlechteste Website aller Zeiten zu erstellen – mit vielen Werbeanzeigen und insgesamt einfach nur richtig schlecht."

  }
};

const elements = document.querySelectorAll("[data-i18n]");
const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");
const langLabel = document.getElementById("langLabel");
const langFlag = document.getElementById("langFlag");

let currentLang = localStorage.getItem("lang") || "en";

function setLanguage(lang) {
  elements.forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  langLabel.textContent = translations[lang].label;
  langFlag.src = translations[lang].flag;
  localStorage.setItem("lang", lang);
  currentLang = lang;
}

langBtn.addEventListener("click", () => {
  langMenu.classList.toggle("hidden");
});

document.querySelectorAll(".lang-option").forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
    langMenu.classList.add("hidden");
  });
});

document.addEventListener("click", e => {
  if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.classList.add("hidden");
  }
});

setLanguage(currentLang);

