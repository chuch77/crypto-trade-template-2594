import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en' | 'fr' | 'de' | 'it' | 'pt' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.title': 'Desarrollador Full Stack Junior',
    'hero.subtitle': 'Graduado hace 2 meses con 5 proyectos de e-commerce desarrollados y pasión por crear soluciones web innovadoras.',
    'hero.viewProjects': 'Ver Proyectos',
    'hero.contact': 'Contáctame',
    'hero.frontend': 'React, TypeScript, Tailwind CSS para crear interfaces modernas y responsivas.',
    'hero.backend': 'Node.js, Express, bases de datos para crear APIs robustas y escalables.',
    'hero.ecommerce': 'Experiencia en tiendas online, sistemas de pago y gestión de inventarios.',
    'projects.title': 'Mis Proyectos de E-commerce',
    'projects.subtitle': 'Explora los proyectos web que he desarrollado, desde e-commerce hasta plataformas fintech, cada uno con tecnologías modernas y funcionalidades completas.',
    'projects.learnMore': 'Learn more',
    'features.title': 'Como desarrollador full stack junior, domino tecnologías modernas para crear aplicaciones web completas, desde el frontend hasta el backend y bases de datos.',
    'features.frontend.title': 'Frontend Development',
    'features.frontend.desc': 'Desarrollo de interfaces modernas y responsivas con React, TypeScript, Tailwind CSS y Next.js para crear experiencias de usuario excepcionales.',
    'features.backend.title': 'Backend Development', 
    'features.backend.desc': 'Creación de APIs robustas y escalables con Node.js, Express, bases de datos SQL y NoSQL para aplicaciones web completas.',
    'features.ecommerce.title': 'E-commerce Solutions',
    'features.ecommerce.desc': 'Especialización en desarrollo de tiendas online con sistemas de pago, gestión de inventarios y paneles de administración.',
    'features.fullstack.title': 'Full Stack Integration',
    'features.fullstack.desc': 'Integración completa de frontend y backend, deployment en la nube y optimización de rendimiento para aplicaciones escalables.',
    'whywrlds.title': 'Stack Tecnológico',
    'whywrlds.subtitle': 'Tecnologías que Domino',
    'whywrlds.description': 'Explora las principales tecnologías que utilizo en mis proyectos, desde frameworks frontend hasta bases de datos y herramientas de desarrollo.',
    'contact.title': 'Contáctame',
    'contact.subtitle': '¿Tienes un proyecto en mente? Contáctame y hablemos sobre cómo puedo ayudarte a crear soluciones web innovadoras.',
    'contact.name': 'Jesús Eliud Soto Méndez',
    'contact.role': 'Desarrollador Full Stack Junior',
    'tech.swipe': 'Desliza horizontalmente para ver más ejemplos →',
    'tech.react.title': 'React & TypeScript',
    'tech.react.desc': 'Desarrollo de aplicaciones web modernas con React, TypeScript y hooks para crear interfaces dinámicas y mantenibles.',
    'tech.node.title': 'Node.js & Express',
    'tech.node.desc': 'Creación de APIs REST y GraphQL con Node.js, Express y middleware personalizado para aplicaciones escalables.',
    'tech.db.title': 'Bases de Datos',
    'tech.db.desc': 'Experiencia con MongoDB, PostgreSQL y MySQL para diseño de esquemas y optimización de consultas.',
    'tech.devops.title': 'DevOps & Deploy',
    'tech.devops.desc': 'Deployment en AWS, Docker, CI/CD con GitHub Actions para automatización y escalabilidad.',
    'tech.testing.title': 'Testing & QA',
    'tech.testing.desc': 'Jest, Cypress, testing unitario e integración para garantizar calidad del código.',
    'tech.analytics.title': 'Analytics & SEO',
    'tech.analytics.desc': 'Google Analytics, SEO optimization y performance monitoring para mejores resultados.',
    'methodology.title': 'Cómo trabajo en mis proyectos',
    'methodology.subtitle': 'Utilizo metodologías ágiles y las mejores prácticas de desarrollo para crear aplicaciones web robustas, escalables y mantenibles con tecnologías modernas.',
    'methodology.planning.title': 'Planificación y Diseño',
    'methodology.planning.desc': 'Análisis de requerimientos y diseño de arquitectura escalable',
    'methodology.agile.title': 'Desarrollo Ágil',
    'methodology.agile.desc': 'Implementación iterativa con metodologías ágiles y buenas prácticas',
    'methodology.testing.title': 'Testing y Deploy',
    'methodology.testing.desc': 'Pruebas exhaustivas y despliegue en producción con CI/CD',
    'methodology.project.title': 'Proyecto de Desarrollo',
    'methodology.iterative.title': 'Desarrollo Iterativo',
    'methodology.iterative.desc': 'Trabajo de forma iterativa para entregar valor continuo y adaptarme a los cambios',
    'methodology.phases.planning': 'Planificación',
    'methodology.phases.development': 'Desarrollo',
    'methodology.phases.testing': 'Testing',
    'methodology.phases.review': 'Revisión',
    'methodology.feedback': 'Feedback continuo integrado en cada etapa',
    'methodology.improvement': 'Mejora continua',
    'methodology.ready.title': 'Listo para Producir',
    'methodology.ready.desc': 'Preparado para escalar, optimizar y lanzar',
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Desarrollador Full Stack Junior apasionado por crear soluciones web innovadoras y escalables',
    'about.months': '2 meses',
    'about.months.desc': 'Graduado como desarrollador full stack, listo para aportar valor desde el primer día',
    'about.projects': '5 proyectos',
    'about.projects.desc': 'E-commerce completos desarrollados con tecnologías modernas y mejores prácticas',
    'about.technologies': '10+ tecnologías',
    'about.technologies.desc': 'Dominio de stack completo: React, Node.js, bases de datos, deployment y más',
    'about.contribute.title': 'Lo que Puedo Aportar a tu Empresa',
    'about.contribute.subtitle': 'Como desarrollador junior, traigo energía, conocimientos actualizados y ganas de crecer profesionalmente',
    'about.modern.title': 'Tecnologías Modernas',
    'about.modern.desc': 'Conocimiento actualizado en React, TypeScript, Node.js y las últimas tendencias del desarrollo web.',
    'about.learning.title': 'Aprendizaje Rápido',
    'about.learning.desc': 'Capacidad de adaptarme rápidamente a nuevas tecnologías y metodologías de trabajo.',
    'about.complete.title': 'Proyectos Completos',
    'about.complete.desc': 'Experiencia desarrollando aplicaciones full stack desde cero hasta producción.',
    'about.commitment.title': 'Compromiso y Dedicación',
    'about.commitment.desc': 'Motivación para crecer profesionalmente y contribuir al éxito del equipo.',
    'about.contact': 'Contáctame para conocer más sobre mi experiencia'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.title': 'Junior Full Stack Developer',
    'hero.subtitle': 'Graduated 2 months ago with 5 e-commerce projects developed and passion for creating innovative web solutions.',
    'hero.viewProjects': 'View Projects',
    'hero.contact': 'Contact Me',
    'hero.frontend': 'React, TypeScript, Tailwind CSS to create modern and responsive interfaces.',
    'hero.backend': 'Node.js, Express, databases to create robust and scalable APIs.',
    'hero.ecommerce': 'Experience in online stores, payment systems and inventory management.',
    'projects.title': 'My Web Projects',
    'projects.subtitle': 'Explore the web projects I have developed, from e-commerce to fintech platforms, each with modern technologies and complete functionalities.',
    'projects.learnMore': 'Learn more',
    'features.title': 'As a junior full stack developer, I master modern technologies to create complete web applications, from frontend to backend and databases.',
    'features.frontend.title': 'Frontend Development',
    'features.frontend.desc': 'Development of modern and responsive interfaces with React, TypeScript, Tailwind CSS and Next.js to create exceptional user experiences.',
    'features.backend.title': 'Backend Development',
    'features.backend.desc': 'Creation of robust and scalable APIs with Node.js, Express, SQL and NoSQL databases for complete web applications.',
    'features.ecommerce.title': 'E-commerce Solutions',
    'features.ecommerce.desc': 'Specialization in online store development with payment systems, inventory management and administration panels.',
    'features.fullstack.title': 'Full Stack Integration',
    'features.fullstack.desc': 'Complete frontend and backend integration, cloud deployment and performance optimization for scalable applications.',
    'whywrlds.title': 'Technology Stack',
    'whywrlds.subtitle': 'Technologies I Master',
    'whywrlds.description': 'Explore the main technologies I use in my projects, from frontend frameworks to databases and development tools.',
    'contact.title': 'Contact Me',
    'contact.subtitle': 'Do you have a project in mind? Contact me and let\'s talk about how I can help you create innovative web solutions.',
    'contact.name': 'Jesús Eliud Soto Méndez',
    'contact.role': 'Junior Full Stack Developer',
    'tech.swipe': 'Swipe horizontally to see more examples →',
    'tech.react.title': 'React & TypeScript',
    'tech.react.desc': 'Development of modern web applications with React, TypeScript and hooks to create dynamic and maintainable interfaces.',
    'tech.node.title': 'Node.js & Express',
    'tech.node.desc': 'Creation of REST and GraphQL APIs with Node.js, Express and custom middleware for scalable applications.',
    'tech.db.title': 'Databases',
    'tech.db.desc': 'Experience with MongoDB, PostgreSQL and MySQL for schema design and query optimization.',
    'tech.devops.title': 'DevOps & Deploy',
    'tech.devops.desc': 'Deployment on AWS, Docker, CI/CD with GitHub Actions for automation and scalability.',
    'tech.testing.title': 'Testing & QA',
    'tech.testing.desc': 'Jest, Cypress, unit and integration testing to ensure code quality.',
    'tech.analytics.title': 'Analytics & SEO',
    'tech.analytics.desc': 'Google Analytics, SEO optimization and performance monitoring for better results.',
    'methodology.title': 'How I work on my projects',
    'methodology.subtitle': 'I use agile methodologies and development best practices to create robust, scalable and maintainable web applications with modern technologies.',
    'methodology.planning.title': 'Planning and Design',
    'methodology.planning.desc': 'Requirements analysis and scalable architecture design',
    'methodology.agile.title': 'Agile Development',
    'methodology.agile.desc': 'Iterative implementation with agile methodologies and best practices',
    'methodology.testing.title': 'Testing and Deploy',
    'methodology.testing.desc': 'Comprehensive testing and production deployment with CI/CD',
    'methodology.project.title': 'Development Project',
    'methodology.iterative.title': 'Iterative Development',
    'methodology.iterative.desc': 'I work iteratively to deliver continuous value and adapt to changes',
    'methodology.phases.planning': 'Planning',
    'methodology.phases.development': 'Development',
    'methodology.phases.testing': 'Testing',
    'methodology.phases.review': 'Review',
    'methodology.feedback': 'Continuous feedback integrated at each stage',
    'methodology.improvement': 'Continuous improvement',
    'methodology.ready.title': 'Ready to Produce',
    'methodology.ready.desc': 'Prepared to scale, optimize and launch',
    'about.title': 'About Me',
    'about.subtitle': 'Junior Full Stack Developer passionate about creating innovative and scalable web solutions',
    'about.months': '2 months',
    'about.months.desc': 'Graduated as a full stack developer, ready to add value from day one',
    'about.projects': '5 projects',
    'about.projects.desc': 'Complete e-commerce developed with modern technologies and best practices',
    'about.technologies': '10+ technologies',
    'about.technologies.desc': 'Full stack mastery: React, Node.js, databases, deployment and more',
    'about.contribute.title': 'What I Can Bring to Your Company',
    'about.contribute.subtitle': 'As a junior developer, I bring energy, updated knowledge and desire to grow professionally',
    'about.modern.title': 'Modern Technologies',
    'about.modern.desc': 'Updated knowledge in React, TypeScript, Node.js and the latest web development trends.',
    'about.learning.title': 'Fast Learning',
    'about.learning.desc': 'Ability to quickly adapt to new technologies and work methodologies.',
    'about.complete.title': 'Complete Projects',
    'about.complete.desc': 'Experience developing full stack applications from scratch to production.',
    'about.commitment.title': 'Commitment and Dedication',
    'about.commitment.desc': 'Motivation to grow professionally and contribute to team success.',
    'about.contact': 'Contact me to learn more about my experience'
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'hero.title': 'Développeur Full Stack Junior',
    'hero.subtitle': 'Diplômé il y a 2 mois avec 5 projets e-commerce développés et passion pour créer des solutions web innovantes.',
    'hero.viewProjects': 'Voir Projets',
    'hero.contact': 'Me Contacter'
  },
  de: {
    'nav.home': 'Startseite',
    'nav.about': 'Über Mich',
    'nav.projects': 'Projekte',
    'nav.contact': 'Kontakt',
    'hero.title': 'Junior Full Stack Entwickler',
    'hero.subtitle': 'Vor 2 Monaten abgeschlossen mit 5 entwickelten E-Commerce-Projekten und Leidenschaft für innovative Web-Lösungen.',
    'hero.viewProjects': 'Projekte Ansehen',
    'hero.contact': 'Kontaktiere Mich'
  },
  it: {
    'nav.home': 'Home',
    'nav.about': 'Chi Sono',
    'nav.projects': 'Progetti',
    'nav.contact': 'Contatto',
    'hero.title': 'Sviluppatore Full Stack Junior',
    'hero.subtitle': 'Laureato 2 mesi fa con 5 progetti e-commerce sviluppati e passione per creare soluzioni web innovative.',
    'hero.viewProjects': 'Vedi Progetti',
    'hero.contact': 'Contattami'
  },
  pt: {
    'nav.home': 'Início',
    'nav.about': 'Sobre Mim',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'hero.title': 'Desenvolvedor Full Stack Júnior',
    'hero.subtitle': 'Formado há 2 meses com 5 projetos e-commerce desenvolvidos e paixão por criar soluções web inovadoras.',
    'hero.viewProjects': 'Ver Projetos',
    'hero.contact': 'Entre em Contato'
  },
  zh: {
    'nav.home': '首页',
    'nav.about': '关于我',
    'nav.projects': '项目',
    'nav.contact': '联系',
    'hero.title': '初级全栈开发者',
    'hero.subtitle': '两个月前毕业，已开发5个电商项目，热衷于创建创新的网络解决方案。',
    'hero.viewProjects': '查看项目',
    'hero.contact': '联系我'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};