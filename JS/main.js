// <-!----- Language Section -->

console.log("i18n loaded");

const translations = {
 nl: {
  home: "Home",
  projects: "Projecten",
  contact: "Contact",

  heroTitle: "Welkom op mijn website!",

  intro1: "Hoi, ik ben Richard, een 19-jarige programmeur uit Nederland.",
  intro2: "Geïnteresseerd in mijn werk? Kijk gerust even rond!",

  contactLangsTitle: "Gesproken talen:",
  progLangsTitle: "Programmeertalen die ik gebruik:",

  langGerman: "Duits",
  langEnglish: "Engels",
  langDutch: "Nederlands",

  label: "Nederlands",
  flag: "../IMG/Flag_of_Netherlands.svg.png",

  contactIntro: "Je kunt mij vinden op de volgende platforms:",
  emailLabel: "Je e-mailadres",
  messageLabel: "Bericht",
  sendBtn: "Verstuur",

  projectsIntro: "Welkom op de projectpagina! Hieronder vind je mijn eerdere projecten.",

  trafficTitle: "Trafiksimulator",
  trafficDesc: "Een project dat oude eenvoudige maar leuke webspelletjes nabootst.",

  cookieTitle: "Cookie Clicker",
  cookieDesc: "Een schoolproject: een cookie clicker-spel ontwikkeld in 10 weken samen met een klasgenoot.",

  churpifyTitle: "Churpify: Twitter-klon",
  churpifyDesc: "Een groepsproject – een MVC-website gebaseerd op een oudere Twitter-klon.",

  portfolioTitle: "Portfolio",
  PortfolioDesc: "De website waarop je je nu bevindt is ook een van mijn projecten. Gemaakt met HTML, TailwindCSS en JavaScript.",

  badWebsiteTitle: "De slechtste website op internet",
  BadWebsiteDesc: "Deze website werd als schoolproject gemaakt, waarbij we bewust een zo slecht mogelijke website binnen twee dagen moesten maken.",

  githubStatsTitle: "GitHub-statistiekenviewer",
  GitHubStatDesc: "Een eenvoudige website die informatie van een GitHub-profiel ophaalt en weergeeft. Gemaakt met React en TailwindCSS.",

  BlackjackTitle: "Blackjack-spel",
  BlackjackDesc: "Een meeslepend Blackjack-spel gebouwd met HTML, CSS en JavaScript. Speel tegen een slimme dealer, ervaar de spanning bij elk kaart en kijk of je 21 kunt bereiken zonder eroverheen te gaan. Ontworpen voor een leuke en spannende spelervaring.",

  AILabTitle: "Sociaal AI Lab",
  AILabDesc: "Deze website werd ontwikkeld voor 'SociaalAI Lab Rotterdam', een project met meerdere samenwerkende partijen. Mijn school was verantwoordelijk voor de programmering. De website bestond al, maar wij kregen de opdracht deze te moderniseren, herschrijven en nieuwe functies toe te voegen."
},

en: {
  home: "Home",
  projects: "Projects",
  contact: "Contact",

  heroTitle: "Welcome to my website!",

  intro1: "Hi, my name is Richard, a 19-year-old programmer from the Netherlands.",
  intro2: "Interested in my work? Feel free to take a look!",

  contactLangsTitle: "Spoken languages:",
  progLangsTitle: "Programming languages I use:",

  langGerman: "German",
  langEnglish: "English",
  langDutch: "Dutch",

  label: "English",
  flag: "../IMG/Flag_of_United_Kingdom.svg.png",

  contactIntro: "You can find me on the following platforms:",
  emailLabel: "Your email address",
  messageLabel: "Message",
  sendBtn: "Send",

  projectsIntro: "Welcome to the projects page! Below you can find my previous projects.",

  trafficTitle: "Traffic Simulator",
  trafficDesc: "A project that mimics old simple but fun web games.",

  cookieTitle: "Cookie Clicker",
  cookieDesc: "A school project: a cookie clicker game developed over 10 weeks together with a classmate.",

  churpifyTitle: "Churpify: Twitter Clone",
  churpifyDesc: "A group project – an MVC website based on an older Twitter clone.",

  portfolioTitle: "Portfolio",
  PortfolioDesc: "The website you are currently on is also one of my projects. Built with HTML, TailwindCSS, and JavaScript.",

  badWebsiteTitle: "The Worst Website on the Internet",
  BadWebsiteDesc: "This website was created as a school project where we were deliberately asked to make the worst possible website in two days.",

  githubStatsTitle: "GitHub Stats Viewer",
  GitHubStatDesc: "A simple website that fetches and displays information from a GitHub profile. Built with React and TailwindCSS.",

  BlackjackTitle: "Blackjack Game",
  BlackjackDesc: "An engaging Blackjack game built with HTML, CSS, and JavaScript. Play against a clever dealer, experience the thrill of each card, and see if you can reach 21 without going over. Designed for a fun and exciting gaming experience.",

  AILabTitle: "Sociaal AI Lab",
  AILabDesc: "This website was developed for 'SociaalAI Lab Rotterdam', a project where multiple parties collaborate. My school was responsible for the programming. The website already existed, but we were tasked with modernizing it, rewriting it, and adding new features."
},

de: {
  home: "Startseite",
  projects: "Projekte",
  contact: "Kontakt",

  heroTitle: "Willkommen auf meiner Website!",

  intro1: "Hallo, ich heiße Richard, ein 19-jähriger Programmierer aus den Niederlanden.",
  intro2: "Interessiert an meiner Arbeit? Schau dich gerne um!",

  contactLangsTitle: "Gesprochene Sprachen:",
  progLangsTitle: "Programmiersprachen, die ich benutze:",

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

  trafficTitle: "Trafiksimulator",
  trafficDesc: "Ein Projekt, das alte, einfache, aber lustige Webspiele nachahmt.",

  cookieTitle: "Cookie Clicker",
  cookieDesc: "Ein Schulprojekt: ein Cookie Clicker-Spiel, das über 10 Wochen zusammen mit einem Klassenkameraden entwickelt wurde.",

  churpifyTitle: "Churpify: Twitter-Klon",
  churpifyDesc: "Ein Gruppenprojekt – eine MVC-Website basierend auf einem älteren Twitter-Klon.",

  portfolioTitle: "Portfolio",
  PortfolioDesc: "Die Website, auf der du dich gerade befindest, ist auch eines meiner Projekte. Erstellt mit HTML, TailwindCSS und JavaScript.",

  badWebsiteTitle: "Die schlechteste Website im Internet",
  BadWebsiteDesc: "Diese Website wurde als Schulprojekt erstellt, bei dem wir absichtlich eine möglichst schlechte Website in zwei Tagen bauen sollten.",

  githubStatsTitle: "GitHub-Statistikviewer",
  GitHubStatDesc: "Eine einfache Website, die Informationen von einem GitHub-Profil abruft und anzeigt. Erstellt mit React und TailwindCSS.",

  BlackjackTitle: "Blackjack-Spiel",
  BlackjackDesc: "Ein fesselndes Blackjack-Spiel, gebaut mit HTML, CSS und JavaScript. Spiele gegen einen schlauen Dealer, erlebe die Spannung bei jeder Karte und sieh, ob du 21 erreichst, ohne darüber zu gehen. Für ein spaßiges und spannendes Spielerlebnis entworfen.",

  AILabTitle: "Sociaal AI Lab",
  AILabDesc: "Diese Website wurde für 'SociaalAI Lab Rotterdam' entwickelt, ein Projekt, bei dem mehrere Parteien zusammenarbeiten. Meine Schule war für die Programmierung verantwortlich. Die Website existierte bereits, aber wir hatten den Auftrag, sie zu modernisieren, neu zu schreiben und neue Funktionen hinzuzufügen."
},

  sv: {
  home: "Hem",
  projects: "Projekt",
  contact: "Kontakt",

  heroTitle: "Välkommen till min webbplats!",

  intro1: "Hej, jag heter Richard, en 19-årig programmerare från Nederländerna.",
  intro2: "Intresserad av mitt arbete? Ta gärna en titt!",

  contactLangsTitle: "Talade språk:",
  progLangsTitle: "Programmeringsspråk jag använder:",

  langGerman: "Tyska",
  langEnglish: "Engelska",
  langDutch: "Nederländska",

  label: "Svenska",
  flag: "../IMG/Flag_of_Sweden.svg.png",

  contactIntro: "Du kan hitta mig på följande plattformar:",
  emailLabel: "Din e-postadress",
  messageLabel: "Meddelande",
  sendBtn: "Skicka",

  projectsIntro:
    "Välkommen till projektsidan! Nedan hittar du mina tidigare projekt.",

  trafficTitle: "Trafiksimulator",
  trafficDesc: "Ett projekt som efterliknar gamla enkla men roliga webbspel.",

  cookieTitle: "Cookie Clicker",
  cookieDesc:
    "Ett skolprojekt: ett cookie clicker-spel utvecklat under 10 veckor tillsammans med en klasskamrat.",

  churpifyTitle: "Churpify: Twitter-klonen",
  churpifyDesc:
    "Ett grupprojekt – en MVC-webbplats baserad på en äldre Twitter-klon.",

  portfolioTitle: "Portfolio",
  PortfolioDesc:
    "Webbplatsen du befinner dig på just nu är också ett av mina projekt. Den är byggd med HTML, TailwindCSS och JavaScript.",

  badWebsiteTitle: "Den sämsta webbplatsen på internet",
  BadWebsiteDesc:
    "Denna webbplats skapades som ett skolprojekt där vi medvetet skulle göra en så dålig webbplats som möjligt på två dagar.",

  githubStatsTitle: "GitHub-statistikvisare",
  GitHubStatDesc:
    "En enkel webbplats som hämtar och visar information från en GitHub-profil. Byggd med React och TailwindCSS.",

  BlackjackTitle: "Blackjack-spel",
  BlackjackDesc:
    "Ett engagerande Blackjack-spel byggt med HTML, CSS och JavaScript. Spela mot en listig dealer, upplev spänningen i varje kort och se om du kan nå 21 utan att gå över. Utformat för en rolig och spännande spelupplevelse.",

  AILabTitle: "Sociaal AI Lab",
  AILabDesc:
    "Denna webbplats utvecklades för 'SociaalAI Lab Rotterdam', ett projekt där flera parter samarbetar. Min skola ansvarade för programmeringen. Webbplatsen fanns redan, men vi fick i uppdrag att modernisera den, skriva om den och lägga till nya funktioner."
},

pl: {
  home: "Strona główna",
  projects: "Projekty",
  contact: "Kontakt",

  heroTitle: "Witamy na mojej stronie!",

  intro1: "Cześć, nazywam się Richard, jestem 19-letnim programistą z Holandii.",
  intro2: "Zainteresowany moją pracą? Zapraszam do zapoznania się!",

  contactLangsTitle: "Języki, którymi mówię:",
  progLangsTitle: "Języki programowania, których używam:",

  langGerman: "Niemiecki",
  langEnglish: "Angielski",
  langDutch: "Niderlandzki",

  label: "Polski",
  flag: "../IMG/Flag_of_Poland.svg.png",

  contactIntro: "Możesz mnie znaleźć na następujących platformach:",
  emailLabel: "Twój adres e-mail",
  messageLabel: "Wiadomość",
  sendBtn: "Wyślij",

  projectsIntro: "Witamy na stronie projektów! Poniżej znajdują się moje wcześniejsze projekty.",

  trafficTitle: "Symulator ruchu",
  trafficDesc: "Projekt naśladujący stare, proste, ale zabawne gry internetowe.",

  cookieTitle: "Cookie Clicker",
  cookieDesc: "Projekt szkolny: gra cookie clicker stworzona w ciągu 10 tygodni razem z kolegą z klasy.",

  churpifyTitle: "Churpify: Klon Twittera",
  churpifyDesc: "Projekt grupowy – strona MVC oparta na starszym klonie Twittera.",

  portfolioTitle: "Portfolio",
  PortfolioDesc: "Strona, na której jesteś, jest również jednym z moich projektów. Zbudowana w HTML, TailwindCSS i JavaScript.",

  badWebsiteTitle: "Najgorsza strona w Internecie",
  BadWebsiteDesc: "Ta strona została stworzona jako projekt szkolny, w którym mieliśmy świadomie zrobić możliwie najgorszą stronę w dwa dni.",

  githubStatsTitle: "Przeglądarka statystyk GitHub",
  GitHubStatDesc: "Prosta strona, która pobiera i wyświetla informacje z profilu GitHub. Zbudowana w React i TailwindCSS.",

  BlackjackTitle: "Gra w Blackjacka",
  BlackjackDesc: "Wciągająca gra w Blackjacka stworzona w HTML, CSS i JavaScript. Graj przeciw sprytnemu dealerowi, poczuj napięcie przy każdej karcie i sprawdź, czy uda ci się osiągnąć 21, nie przekraczając tej wartości. Zaprojektowana dla zabawy i ekscytującej rozgrywki.",

  AILabTitle: "Sociaal AI Lab",
  AILabDesc: "Ta strona została opracowana dla 'SociaalAI Lab Rotterdam', projektu, w którym współpracuje kilka stron. Moja szkoła była odpowiedzialna za programowanie. Strona już istniała, ale zostaliśmy poproszeni o jej modernizację, przepisanie i dodanie nowych funkcji."
},

pt: {
  home: "Início",
  projects: "Projetos",
  contact: "Contato",

  heroTitle: "Bem-vindo ao meu site!",

  intro1: "Olá, meu nome é Richard, sou um programador de 19 anos da Holanda.",
  intro2: "Interessado no meu trabalho? Sinta-se à vontade para dar uma olhada!",

  contactLangsTitle: "Idiomas falados:",
  progLangsTitle: "Linguagens de programação que uso:",

  langGerman: "Alemão",
  langEnglish: "Inglês",
  langDutch: "Holandês",

  label: "Português",
  flag: "../IMG/Flag_of_Portugal.svg.png",

  contactIntro: "Você pode me encontrar nas seguintes plataformas:",
  emailLabel: "Seu endereço de e-mail",
  messageLabel: "Mensagem",
  sendBtn: "Enviar",

  projectsIntro: "Bem-vindo à página de projetos! Abaixo você encontrará meus projetos anteriores.",

  trafficTitle: "Simulador de Tráfego",
  trafficDesc: "Um projeto que imita antigos jogos web simples, mas divertidos.",

  cookieTitle: "Cookie Clicker",
  cookieDesc: "Um projeto escolar: um jogo cookie clicker desenvolvido ao longo de 10 semanas junto com um colega de classe.",

  churpifyTitle: "Churpify: Clone do Twitter",
  churpifyDesc: "Um projeto em grupo – um site MVC baseado em um clone antigo do Twitter.",

  portfolioTitle: "Portfólio",
  PortfolioDesc: "O site em que você está atualmente também é um dos meus projetos. Construído com HTML, TailwindCSS e JavaScript.",

  badWebsiteTitle: "O Pior Site da Internet",
  BadWebsiteDesc: "Este site foi criado como um projeto escolar, no qual fomos deliberadamente solicitados a fazer o pior site possível em dois dias.",

  githubStatsTitle: "Visualizador de Estatísticas do GitHub",
  GitHubStatDesc: "Um site simples que busca e exibe informações de um perfil do GitHub. Construído com React e TailwindCSS.",

  BlackjackTitle: "Jogo de Blackjack",
  BlackjackDesc: "Um envolvente jogo de Blackjack construído com HTML, CSS e JavaScript. Jogue contra um dealer esperto, sinta a emoção de cada carta e veja se consegue chegar a 21 sem ultrapassar. Projetado para uma experiência divertida e emocionante.",

  AILabTitle: "Sociaal AI Lab",
  AILabDesc: "Este site foi desenvolvido para o 'SociaalAI Lab Rotterdam', um projeto em que várias partes colaboram. Minha escola foi responsável pela programação. O site já existia, mas recebemos a tarefa de modernizá-lo, reescrevê-lo e adicionar novos recursos."
},

no: {
  home: "Hjem",
  projects: "Prosjekter",
  contact: "Kontakt",

  heroTitle: "Velkommen til nettstedet mitt!",

  intro1: "Hei, jeg heter Richard, en 19 år gammel programmerer fra Nederland.",
  intro2: "Interessert i arbeidet mitt? Ta gjerne en titt!",

  contactLangsTitle: "Talte språk:",
  progLangsTitle: "Programmeringsspråk jeg bruker:",

  langGerman: "Tysk",
  langEnglish: "Engelsk",
  langDutch: "Nederlandsk",

  label: "Norsk",
  flag: "../IMG/Flag_of_Norway.svg.png",

  contactIntro: "Du kan finne meg på følgende plattformer:",
  emailLabel: "Din e-postadresse",
  messageLabel: "Melding",
  sendBtn: "Send",

  projectsIntro: "Velkommen til prosjekt-siden! Nedenfor finner du mine tidligere prosjekter.",

  trafficTitle: "Trafikksimulator",
  trafficDesc: "Et prosjekt som etterligner gamle enkle, men morsomme nettspill.",

  cookieTitle: "Cookie Clicker",
  cookieDesc: "Et skoleprosjekt: et cookie clicker-spill utviklet over 10 uker sammen med en klassekamerat.",

  churpifyTitle: "Churpify: Twitter-klonen",
  churpifyDesc: "Et gruppeprosjekt – et MVC-nettsted basert på en eldre Twitter-klone.",

  portfolioTitle: "Portfolio",
  PortfolioDesc: "Nettstedet du befinner deg på nå er også et av mine prosjekter. Bygget med HTML, TailwindCSS og JavaScript.",

  badWebsiteTitle: "Den dårligste nettsiden på internett",
  BadWebsiteDesc: "Dette nettstedet ble laget som et skoleprosjekt der vi bevisst skulle lage en så dårlig nettside som mulig på to dager.",

  githubStatsTitle: "GitHub-statistikkviser",
  GitHubStatDesc: "Et enkelt nettsted som henter og viser informasjon fra en GitHub-profil. Bygget med React og TailwindCSS.",

  BlackjackTitle: "Blackjack-spill",
  BlackjackDesc: "Et engasjerende Blackjack-spill bygget med HTML, CSS og JavaScript. Spill mot en lur dealer, opplev spenningen ved hvert kort, og se om du kan nå 21 uten å gå over. Designet for en morsom og spennende spillopplevelse.",

  AILabTitle: "Sociaal AI Lab",
  AILabDesc: "Dette nettstedet ble utviklet for 'SociaalAI Lab Rotterdam', et prosjekt der flere parter samarbeider. Min skole var ansvarlig for programmeringen. Nettstedet eksisterte allerede, men vi fikk i oppdrag å modernisere det, skrive det om og legge til nye funksjoner."
},

bar: {
  home: "Dahoam",
  projects: "Projekte",
  contact: "Kontakt",

  heroTitle: "Griaß di auf meiner Webseitn!",

  intro1: "Servus, i bin da Richard, a 19-jähriger Programmierer aus Niederland.",
  intro2: "Interessierst di fia mei Arbeit? Schau di ruhig a bissl um!",

  contactLangsTitle: "Gredde Sprach'n:",
  progLangsTitle: "Programmiersprachn, de i nutz:",

  langGerman: "Deitsch",
  langEnglish: "Englisch",
  langDutch: "Niederländisch",

  label: "Boarisch",
  flag: "../IMG/Flag_of_Bavaria.svg.png",

  contactIntro: "Du kannst mi auf folgende Plattformen findn:",
  emailLabel: "Dei E-Mail-Adress",
  messageLabel: "Nachricht",
  sendBtn: "Obschickn",

  projectsIntro: "Willkommen auf da Projektseitn! Untn findst meine bisherigen Projekte.",

  trafficTitle: "Verkehrssimulator",
  trafficDesc: "A Projekt, des oide einfache oba lustige Webspui nachmocht.",

  cookieTitle: "Cookie Clicker",
  cookieDesc: "A Schulprojekt: a Cookie-Clicker-Spiel, entwickelt in 10 Wochen mit am Klassenkameradn.",

  churpifyTitle: "Churpify: Twitter-Klon",
  churpifyDesc: "A Gruppenprojekt – a MVC-Webseitn basierend auf am oidn Twitter-Klon.",

  portfolioTitle: "Portfolio",
  PortfolioDesc: "De Webseitn, auf derst grad bist, is aa oans vo meine Projekte. Gmocht mit HTML, TailwindCSS und JavaScript.",

  badWebsiteTitle: "De schlechteste Webseitn im Internet",
  BadWebsiteDesc: "De Webseitn is als Schulprojekt entstandn, wo ma absichtlich in zwoa Tog de schlechteste mögliche Webseitn baun sollten.",

  githubStatsTitle: "GitHub-Statistik-Viewer",
  GitHubStatDesc: "A einfache Webseitn, de Infos vo am GitHub-Profil holt und anzeigt. Gmocht mit React und TailwindCSS.",

  BlackjackTitle: "Blackjack-Spui",
  BlackjackDesc: "A spannends Blackjack-Spui baut mit HTML, CSS und JavaScript. Spui gegn an gscheidn Dealer und schau, ob'd 21 erreichst ohne drüber z'geh.",

  AILabTitle: "Sozial AI Lab",
  AILabDesc: "De Webseitn is fia 'SozialAI Lab Rotterdam' entwickelt worn, a Projekt mit mehrere Partner. Meine Schui war fia d'Programmierung zuständig. De Seitn hod's scho gebn, oba mia hom's modernisiert und erweitert."
},

fy: {
  home: "Thús",
  projects: "Projekten",
  contact: "Kontakt",

  heroTitle: "Wolkom op myn webside!",

  intro1: "Hoi, ik bin Richard, in 19-jierrige programmeur út Nederlân.",
  intro2: "Ynteressearre yn myn wurk? Sjoch dan gerust efkes om!",

  contactLangsTitle: "Sprutsen talen:",
  progLangsTitle: "Programmeartalen dy't ik brûk:",

  langGerman: "Dútsk",
  langEnglish: "Ingelsk",
  langDutch: "Nederlânsk",

  label: "Frysk",
  flag: "../IMG/Flag_of_Friesland.svg.png",

  contactIntro: "Do kinst my fine op de folgjende platfoarms:",
  emailLabel: "Dyn e-mailadres",
  messageLabel: "Berjocht",
  sendBtn: "Ferstjoere",

  projectsIntro: "Wolkom op de projektpagina! Hjirûnder steane myn eardere projekten.",

  trafficTitle: "Ferkearssimulator",
  trafficDesc: "In projekt dat âlde ienfâldige mar leuke webspultsjes neimakket.",

  cookieTitle: "Cookie Clicker",
  cookieDesc: "In skoalprojekt: in cookie-clicker-spul ûntwikkele yn 10 wiken mei in klasgenoat.",

  churpifyTitle: "Churpify: Twitter-kloan",
  churpifyDesc: "In groepsprojekt – in MVC-webside basearre op in âldere Twitter-kloan.",

  portfolioTitle: "Portfolio",
  PortfolioDesc: "De webside dêr’tst no op bist is ek ien fan myn projekten. Makke mei HTML, TailwindCSS en JavaScript.",

  badWebsiteTitle: "De slimste webside op it ynternet",
  BadWebsiteDesc: "Dizze webside waard as skoalprojekt makke, dêr’t wy bewust yn twa dagen in sa min mooglike webside meitsje moasten.",

  githubStatsTitle: "GitHub-statistykviewer",
  GitHubStatDesc: "In ienfâldige webside dy't ynformaasje fan in GitHub-profyl ophellet en toant. Makke mei React en TailwindCSS.",

  BlackjackTitle: "Blackjack-spul",
  BlackjackDesc: "In spannend Blackjack-spul boud mei HTML, CSS en JavaScript. Spylje tsjin in tûke dealer en sjoch oftst 21 helje kinst sûnder deroerhinne te gean.",

  AILabTitle: "Sosjaal AI Lab",
  AILabDesc: "Dizze webside waard ûntwikkele foar 'SosjaalAI Lab Rotterdam', in projekt mei meardere gearwurkjende partijen. Myn skoalle wie ferantwurdlik foar de programmearring."
},

jp: {
  home: "ホーム",
  projects: "プロジェクト",
  contact: "連絡",

  heroTitle: "私のウェブサイトへようこそ！",

  intro1: "こんにちは、私はオランダ出身の19歳のプログラマー、Richardです。",
  intro2: "私の作品に興味がありますか？ぜひご覧ください！",

  contactLangsTitle: "話せる言語:",
  progLangsTitle: "使用しているプログラミング言語:",

  langGerman: "ドイツ語",
  langEnglish: "英語",
  langDutch: "オランダ語",

  label: "日本語",
  flag: "../IMG/Flag_of_Japan.svg.png",

  contactIntro: "以下のプラットフォームで私を見つけることができます:",
  emailLabel: "メールアドレス",
  messageLabel: "メッセージ",
  sendBtn: "送信",

  projectsIntro: "プロジェクトページへようこそ！以下はこれまでのプロジェクトです。",

  trafficTitle: "交通シミュレーター",
  trafficDesc: "昔ながらのシンプルで楽しいウェブゲームを再現したプロジェクトです。",

  cookieTitle: "Cookie Clicker",
  cookieDesc: "学校プロジェクト：クラスメートと10週間かけて開発したCookie Clickerゲームです。",

  churpifyTitle: "Churpify: Twitterクローン",
  churpifyDesc: "グループプロジェクト — 古いTwitterクローンをベースにしたMVCウェブサイトです。",

  portfolioTitle: "ポートフォリオ",
  PortfolioDesc: "現在ご覧になっているこのウェブサイトも私のプロジェクトの一つです。HTML、TailwindCSS、JavaScriptで作成しました。",

  badWebsiteTitle: "インターネット最悪のウェブサイト",
  BadWebsiteDesc: "このウェブサイトは学校プロジェクトとして制作され、2日間でできるだけ酷いサイトを作るという課題でした。",

  githubStatsTitle: "GitHub統計ビューア",
  GitHubStatDesc: "GitHubプロフィールの情報を取得して表示するシンプルなウェブサイトです。ReactとTailwindCSSで作成しました。",

  BlackjackTitle: "ブラックジャックゲーム",
  BlackjackDesc: "HTML、CSS、JavaScriptで作られた没入感のあるブラックジャックゲーム。賢いディーラーと対戦し、21を超えずに勝利を目指しましょう。",

  AILabTitle: "ソーシャルAIラボ",
  AILabDesc: "このウェブサイトは『SociaalAI Lab Rotterdam』向けに開発されました。複数の組織が協力するプロジェクトで、私の学校がプログラミングを担当しました。"
},

su: {
  home: "Главная",
  projects: "Проекты",
  contact: "Контакт",

  heroTitle: "Добро пожаловать на мой сайт, товарищ!",

  intro1: "Здравствуйте, товарищ! Я Ричард, 19-летний программист из Нидерландов.",
  intro2: "Интересуетесь моей работой? Осмотритесь как следует!",

  contactLangsTitle: "Языки народов:",
  progLangsTitle: "Языки программирования, используемые в производстве:",

  langGerman: "Немецкий",
  langEnglish: "Английский",
  langDutch: "Нидерландский",

  label: "Советский",
  flag: "../IMG/Flag_of_the_Soviet_Union.svg.png",

  contactIntro: "Товарища можно найти на следующих платформах:",
  emailLabel: "Адрес электронной почты",
  messageLabel: "Сообщение",
  sendBtn: "Отправить",

  projectsIntro: "Добро пожаловать на страницу проектов! Ниже представлены труды прошлого.",

  trafficTitle: "Симулятор движения",
  trafficDesc: "Проект, воссоздающий старые простые, но весёлые веб-игры.",

  cookieTitle: "Cookie Clicker",
  cookieDesc: "Школьный проект: игра Cookie Clicker, разработанная за 10 недель вместе с товарищем по классу.",

  churpifyTitle: "Churpify: клон Twitter",
  churpifyDesc: "Групповой проект — MVC-сайт на основе старого клона Twitter.",

  portfolioTitle: "Портфолио",
  PortfolioDesc: "Сайт, на котором вы сейчас находитесь, также является одним из моих проектов. Создан с использованием HTML, TailwindCSS и JavaScript.",

  badWebsiteTitle: "Худший сайт интернета",
  BadWebsiteDesc: "Этот сайт был создан как школьный проект, где требовалось намеренно сделать максимально плохой сайт за два дня.",

  githubStatsTitle: "Просмотрщик статистики GitHub",
  GitHubStatDesc: "Простой сайт, отображающий информацию профиля GitHub. Создан с помощью React и TailwindCSS.",

  BlackjackTitle: "Игра Blackjack",
  BlackjackDesc: "Захватывающая игра Blackjack, созданная с использованием HTML, CSS и JavaScript. Сразитесь с умным дилером и попробуйте набрать 21 очко.",

  AILabTitle: "Социальная AI Лаборатория",
  AILabDesc: "Этот сайт был разработан для 'SociaalAI Lab Rotterdam' — проекта с несколькими сотрудничающими организациями. Моя школа отвечала за программирование."
},
cy: {
  home: "Cartref",
  projects: "Prosiectau",
  contact: "Cysylltiad",

  heroTitle: "Croeso i fy gwefan!",

  intro1: "Helo, Richard ydw i, rhaglenydd 19 oed o'r Iseldiroedd.",
  intro2: "Diddordeb yn fy ngwaith? Mae croeso i chi edrych o gwmpas!",

  contactLangsTitle: "Ieithoedd llafar:",
  progLangsTitle: "Ieithoedd rhaglennu rwy'n eu defnyddio:",

  langGerman: "Almaeneg",
  langEnglish: "Saesneg",
  langDutch: "Iseldireg",

  label: "Cymraeg",
  flag: "../IMG/Flag_of_Wales.svg.png",

  contactIntro: "Gallwch ddod o hyd i mi ar y llwyfannau canlynol:",
  emailLabel: "E-bost",
  messageLabel: "Neges",
  sendBtn: "Anfon",

  projectsIntro: "Croeso i'r dudalen prosiectau! Dyma fy mhrosiectau blaenorol.",

  trafficTitle: "Efelychydd Traffig",
  trafficDesc: "Prosiect sy'n ail-greu gemau gwe syml ond hwyliog.",

  cookieTitle: "Cookie Clicker",
  cookieDesc: "Prosiect ysgol: gêm cookie clicker a wnaed dros 10 wythnos gyda chyd-ddisgybl.",

  churpifyTitle: "Churpify: Clôn Twitter",
  churpifyDesc: "Prosiect grŵp – gwefan MVC yn seiliedig ar glôn Twitter hen.",

  portfolioTitle: "Portffolio",
  PortfolioDesc: "Y wefan rydych chi arni ar hyn o bryd yw un o fy mhrosiectau hefyd. Wedi'i adeiladu gyda HTML, TailwindCSS a JavaScript.",

  badWebsiteTitle: "Y We Fwyaf Ofnadwy ar y Rhyngrwyd",
  BadWebsiteDesc: "Prosiect ysgol lle roedd yn rhaid creu'r wefan waethaf posibl mewn dau ddiwrnod.",

  githubStatsTitle: "Gwyliwr Ystadegau GitHub",
  GitHubStatDesc: "Gwefan syml sy'n tynnu data o broffil GitHub. Wedi'i adeiladu gyda React a TailwindCSS.",

  BlackjackTitle: "Gêm Blackjack",
  BlackjackDesc: "Gêm Blackjack hwyliog wedi'i hadeiladu gyda HTML, CSS a JavaScript. Chwarae yn erbyn deliwr craff a cheisiwch gyrraedd 21.",

  AILabTitle: "Lab AI Cymdeithasol",
  AILabDesc: "Datblygwyd y wefan hon ar gyfer 'SociaalAI Lab Rotterdam', prosiect gyda sawl partner yn cydweithio."
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

// --- LOGIN & AUTH ---
function authenticate(username, password) {
    // Demo: hardcoded user
    return username === "admin" && password === "password";
}

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            if (authenticate(username, password)) {
                localStorage.setItem("loggedIn", "true");
                window.location.href = "crud.html";
            } else {
                document.getElementById("loginError").style.display = "block";
            }
        });
    }
});

// --- PROTECT PAGES ---
function requireLogin() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }
}

// Typ-effect voor de homepage
function typeEffect(element, text, speed = 50) {
  element.textContent = ""; // leeg maken
  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Typ-effect functie
function typeEffect(element, text, speed = 50) {
  element.textContent = ""; // eerst leeg maken
  let i = 0;

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Typ-effect integratie met i18n
function updateHeroTitle() {
  const heroElement = document.getElementById("heroTitle");
  const textToType = heroElement.dataset.i18n ? translations[currentLang][heroElement.dataset.i18n] : heroElement.textContent;
  typeEffect(heroElement, textToType, 60);
}

// Start typ-effect bij pagina load
document.addEventListener("DOMContentLoaded", () => {
  updateHeroTitle();
});

// Herstart typ-effect bij taalwissel
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

  // Typ-effect opnieuw starten voor heroTitle
  updateHeroTitle();
}