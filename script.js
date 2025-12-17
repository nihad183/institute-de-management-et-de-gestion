// عناصر الترجمة
const translations = {
  FR: {
    home: "Accueil",
    about: "À propos",
    programs: "Programmes",
    admissions: "Admissions",
    contact: "Contact",
    "home-title": "Bienvenue à l'Institut",
    "home-text": "Nous offrons des programmes de gestion et de management de qualité.",
    "about-title": "À propos de nous",
    "about-text": "Notre institut a été fondé en 2000 pour former les futurs leaders.",
    "vertical-word": "CROISSANCE",
    "hero-title": "Construire votre avenir académique avec confiance",
    "hero-text": "Un établissement d’enseignement offrant des programmes de haute qualité, encadrés par des éducateurs expérimentés, dans un environnement d’apprentissage moderne et adapté aux exigences d’aujourd’hui.",
    "hero-btn1": "Découvrir nos programmes",
    "hero-btn2": "Nous contacter",
    "about-title": "À propos de nous",
    "dynamic-text": "Bienvenue dans notre établissement",
    "about-text1": "Nous sommes un établissement d’enseignement innovant, engagé à accompagner les étudiants à travers une éducation de qualité et des méthodes pédagogiques modernes.",
    "about-text2": "Notre mission est de préparer les apprenants aux défis du monde réel tout en favorisant l’esprit critique et l’apprentissage tout au long de la vie.",
    "card1-title": "Excellence académique",
    "card1-text": "Des programmes de haute qualité axés sur les compétences et les applications concrètes.",
    "card2-title": "Éducateurs experts",
    "card2-text": "Des enseignants hautement qualifiés, dédiés à la réussite des étudiants.",
    "card3-title": "Installations modernes",
    "card3-text": "Des salles de classe modernes et des ressources pédagogiques avancées.",
    "card4-title": "Accompagnement des étudiants",
    "card4-text": "Un suivi personnalisé et un accompagnement pédagogique et académique complet.",
    "services-title": "Nos services",
    "service1-title": "Programmes académiques personnalisés",
    "service1-text": "Des programmes d’apprentissage sur mesure conçus pour répondre aux besoins de chaque apprenant.",
    "service2-title": "Formateurs experts",
    "service2-text": "Des instructeurs certifiés disposant d’une solide expérience académique et pratique.",
    "service3-title": "Installations modernes",
    "service3-text": "Des salles de classe interactives équipées d’outils pédagogiques modernes.",
    "service4-title": "Spécialisations diversifiées",
    "service4-text": "Nous offrons des opportunités de formation et de développement des compétences dans plusieurs domaines, en adéquation avec les exigences de l’avenir.",
    "contact-circle": "CONTACT",
    "contact1-title": "Coordonnées",
    "contact1-text": "Email : info@school.com\nTéléphone : +213 XX XX XX XX\nAdresse : Oran, Algérie",
    "contact2-title": "Informations de l’établissement",
    "contact-link1": "Calendrier scolaire",
    "contact-link2": "Liste du personnel",
    "contact-link3": "Conseil d’administration",
    "contact-link4": "Actualités",
    "contact3-title": "Notre communauté",
    "contact3-text": "RMGC Holding",
    "links-title": "Nos liens"
  },
  EN: {
  },
  EN: {
    home: "Home",
    about: "About Us",
    programs: "Programs",
    admissions: "Admissions",
    contact: "Contact",
    "home-title": "Welcome to the Institute",
    "home-text": "We offer quality management and business programs.",
    "about-title": "About Us",
    "about-text": "Our institute was founded in 2000 to train future leaders.",
    "vertical-word": "GROWTH",
    "hero-title": "Build your academic future with confidence",
    "hero-text": "An educational institution offering high-quality programs, guided by experienced educators, in a modern learning environment suited to today’s requirements.",
    "hero-btn1": "Discover our programs",
    "hero-btn2": "Contact us", 
    "about-title": "About Us",
    "dynamic-text": "Welcome to our institution",
    "about-text1": "We are an innovative educational institution, committed to guiding students through quality education and modern teaching methods.",
    "about-text2": "Our mission is to prepare learners for real-world challenges while fostering critical thinking and lifelong learning.",
    "card1-title": "Academic Excellence",
    "card1-text": "High-quality programs focused on skills and practical applications.",
    "card2-title": "Expert Educators",
    "card2-text": "Highly qualified teachers dedicated to student success.",
    "card3-title": "Modern Facilities",
    "card3-text": "Modern classrooms and advanced educational resources.",
    "card4-title": "Student Support",
    "card4-text": "Personalized guidance and comprehensive academic support.",
    "services-title": "Our Services",
    "service1-title": "Customized Academic Programs",
    "service1-text": "Tailored learning programs designed to meet each learner’s needs.",
    "service2-title": "Expert Trainers",
    "service2-text": "Certified instructors with strong academic and practical experience.",
    "service3-title": "Modern Facilities",
    "service3-text": "Interactive classrooms equipped with modern educational tools.",
    "service4-title": "Diverse Specializations",
    "service4-text": "We offer training and skill development opportunities in multiple fields, aligned with future requirements.",
    "contact-circle": "CONTACT",
    "contact1-title": "Contact Details",
    "contact1-text": "Email: info@school.com\nPhone: +213 XX XX XX XX\nAddress: Oran, Algeria",
    "contact2-title": "Institution Information",
    "contact-link1": "Academic Calendar",
    "contact-link2": "Staff List",
    "contact-link3": "Board of Directors",
    "contact-link4": "News",
    "contact3-title": "Our Community",
    "contact3-text": "RMGC Holding",
    "links-title": "Our Links"

  }
};

function setLanguage(lang) {
  for (let id in translations[lang]) {
    const element = document.getElementById(id);
    if (element) {
      if (id === "vertical-word") {
        element.innerHTML = "";
        translations[lang][id].split("").forEach(char => {
          const span = document.createElement("span");
          span.textContent = char;
          element.appendChild(span);
        });
      } else {
        element.textContent = translations[lang][id];
      }
    }
  }
}



const langToggle = document.getElementById('langToggle');
let currentLang = 'FR'; 

langToggle.addEventListener('click', (e) => {
  e.preventDefault();
  if (currentLang === 'FR') {
    currentLang = 'EN';
    langToggle.textContent = 'FR'; 
  } else {
    currentLang = 'FR';
    langToggle.textContent = 'EN';
  }
  setLanguage(currentLang);
});

