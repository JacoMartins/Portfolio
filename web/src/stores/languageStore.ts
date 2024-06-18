interface languageStoreInterface {
  name: string;
  title: string;
  "portuguese": {
    presentingSection: {
      welcome: string;
      description: string;
      goodbye: string;
      contactMe: string;
      downloadResume: string;
    };
    aboutMeSection: {
      title: string;
      description: string;
      skills: string[];
    };
    skillsSection: {
      basic: string;
      beginner: string;
      intermediate: string;
      skilled: string;
      expert: string;
    };
  };
  "english": {
    welcome: string;
    goodbye: string;
    contactMe: string;
    downloadResume: string;
    aboutMe: {
      title: string;
      description: string;
      skills: string[];
    };
    skills: {
      basic: string;
      beginner: string;
      intermediate: string;
      skilled: string;
      expert: string;
    };
  };
}

export const languageStore: languageStoreInterface = {
  name: "Jacó Martins",
  title: "Web Developer",
  portuguese: {
    presentingSection: {
      welcome: "Prazer, ",
      description: "Sou um desenvolvedor web e estudante de Ciência da Computação na Unifanor Wyden.",
      goodbye: "Obrigado por visitar meu site!",
      contactMe: "Entrar em contato",
      downloadResume: "Baixar currículo"
    },
    aboutMeSection: {
      title: "Sobre mim",
      description: "Sou um jovem-adulto de 18 anos, brasileiro, natural de Fortaleza capital cearense, atualmente cursando Ciência da Computação na Unifanor Wyden.",
      skills: [
        "Desenvolvedor Web",
        "Experiente em PHP, JavaScript e Python",
        "Tenho conhecimentos em design de interfaces de usuário (UX/UI)",
        "Conhecimentos sólidos em Redes de Computadores",
        "Fluente em Inglês e entendo um pouco de Espanhol"
      ]
    },
    skillsSection: {
      basic: "básico em",
      beginner: "iniciante em",
      intermediate: "intermediário em",
      skilled: "experiente em",
      expert: "especialista em"
    }
  },
  english: {
    welcome: "Greetings, ",
    goodbye: "Thank you for visiting my website!",
    contactMe: "Contact me",
    downloadResume: "Download my resumè",
    aboutMe: {
      title: "About me",
      description: "I am an 18-year-old young adult, Brazilian, born in Fortaleza, the capital of Ceará, currently studying Computer Science at Unifanor Wyden.",
      skills: [
        "Web Developer",
        "Experienced in PHP, JavaScript and Python",
        "I have knowledge in user interface design (UX/UI)",
        "Solid knowledge in Computer Networks",
        "Fluent in English and understand a little Spanish"
      ]
    },
    skills: {
      basic: "basic in",
      beginner: "beginner in",
      intermediate: "intermediate in",
      skilled: "skilled in",
      expert: "expert in"
    }
  }
}

export default languageStore;