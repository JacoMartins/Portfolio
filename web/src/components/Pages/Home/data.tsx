import { BookBookmark, Bus, WhatsappLogo } from "phosphor-react";
import eclipseLogo from "../../../assets/images/eclipseLogo.svg";
import portmeLogo from "../../../assets/images/portme40x.svg";

export const frontEndSummary = [
  {
    infoTitle: 'HTML5 - Experiente',
    value: '100%'
  },

  {
    infoTitle: 'CSS3 - Experiente',
    value: '100%'
  },

  {
    infoTitle: 'Javascript - Experiente',
    value: '100%'
  },

  {
    infoTitle: 'React JS - Experiente',
    value: '100%'
  },

  {
    infoTitle: 'Next JS - Experiente',
    value: '100%'
  },
];

export const backEndSummary = [
  {
    infoTitle: 'Node JS - Experiente',
    value: '100%'
  },

  {
    infoTitle: 'Banco de Dados (SQL) - Experiente',
    value: '100%'
  },

  {
    infoTitle: 'Python Flask - Intermediário',
    value: '100%'
  }
];

export const languagesSummary = [
  {
    infoTitle: 'Inglês - Avançado',
    value: '65%'
  },

  {
    infoTitle: 'Espanhol - Iniciante',
    value: '33%'
  },

  {
    infoTitle: 'Português - Nativo',
    value: '100%'
  }
];

export const UxUiSummary = [
  {
    infoTitle: 'Engenharia de Interfaces - Experiente',
    value: '100%'
  }
];

export const contacts = [
  {
    text: 'Linkedin',
    description: 'Jacó Martins',
    image: 'Linkedin',
    link: 'https://www.linkedin.com/in/jac%C3%B3-martins-2a9622224/',
    type: 'contact'
  },
  {
    text: 'Instagram',
    description: '@jaco.in',
    image: 'Instagram',
    link: 'https://www.instagram.com/jaco.in/',
    type: 'contact'
  },
  {
    text: 'Whatsapp',
    description: '(85) 9 9418-6689',
    icon: WhatsappLogo,
    link: 'tel:(85) 9 9418-6689',
    type: 'contact'
  },
]


export const cert = [
  {
    text: 'AWS Academy Cloud Foundation',
    description: 'Amazon Web Services',
    image: 'Cert',
    link: 'https://drive.google.com/file/d/1waOATK8kVy3zBX8xibXEONhijwNkypun/view?usp=share_link',
    type: 'portfolio'
  },

  {
    text: 'AWS Educate Getting Started with Storage',
    description: 'Amazon Web Services',
    image: 'Cert',
    link: 'https://hermes.digitalinnovation.one/certificates/7CCB2F4A.pdf',
    type: 'portfolio'
  },

  {
    text: 'Trilha NodeJS - Ignite',
    description: 'Rocketseat',
    image: 'Cert',
    link: 'https://drive.google.com/file/d/1T0RHzt5VrEdyCZLRTe2rw-uzO0_zBVzZ/view?usp=sharing',
    type: 'portfolio'
  },

  {
    text: 'Trilha ReactJS - Ignite',
    description: 'Rocketseat',
    image: 'Cert',
    link: 'https://drive.google.com/file/d/1lFhrmssiHOq-GvUPKedHAvm_gaokvfG7/view?usp=sharing',
    type: 'portfolio'
  },

  {
    text: 'EF SET Certificate - 65/100 (C1 Advanced)',
    description: 'EF Standard English Test (EF SET) ',
    image: 'Cert',
    link: 'https://drive.google.com/file/d/1waf5tXnlwm4zILvJNKV-HZ6rqkJL1CWM/view?usp=sharing',
    type: 'portfolio'
  },
]

export const prof = [
  {
    text: 'Meu Github',
    description: 'JacoMartins',
    image: 'Github',
    link: 'https://github.com/JacoMartins',
    type: 'portfolio'
  },

  {
    text: 'LinkedIn',
    description: 'Jacó Martins',
    image: 'Linkedin',
    link: 'https://www.linkedin.com/in/jac%C3%B3-martins-2a9622224/',
    type: 'portfolio'
  },
]

export const projects = [
  {
    text: 'Moovooca',
    description: 'Encontre o ônibus perfeito para chegar até a UFC.',
    icon: <Bus size={48} weight='regular' color='#338274' />,
    type: 'projects'
  },
  {
    text: 'BookYourself',
    description: 'Um site de reservas para escolas.',
    icon: <BookBookmark size={48} weight='regular' color='#94956B' />,
    type: 'projects'
  },
  {
    text: 'Ecos',
    description: 'Simule um sistema operacional em um site com JavaScript.',
    image: eclipseLogo,
    type: 'projects'
  },
  {
    text: 'Port.me',
    description: 'Port.me: Crie, Gerencie e Conecte-se!',
    image: portmeLogo,
    type: 'projects'
  }
]