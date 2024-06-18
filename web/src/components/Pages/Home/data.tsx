import { BookBookmark, Bus, Certificate } from "phosphor-react";
import eclipseLogo from "../../../assets/images/eclipseLogo.svg";
import portmeLogo from "../../../assets/images/portme40x.svg";


export const ContactsData = [
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
    image: 'Phone',
    link: 'tel:(85) 9 9418-6689',
    type: 'contact'
  },
]


export const CertificationsData = [
  {
    text: 'AWS Academy Cloud Foundation',
    description: 'Amazon Web Services',
    icon: Certificate,
    link: 'https://drive.google.com/file/d/1waOATK8kVy3zBX8xibXEONhijwNkypun/view?usp=share_link',
    type: 'certificate'
  },
  {
    text: 'AWS Educate Getting Started with Storage',
    description: 'Amazon Web Services',
    icon: Certificate,
    link: 'https://hermes.digitalinnovation.one/certificates/7CCB2F4A.pdf',
    type: 'certificate'
  },
  {
    text: 'Trilha NodeJS - Ignite',
    description: 'Rocketseat',
    icon: Certificate,
    link: 'https://drive.google.com/file/d/1T0RHzt5VrEdyCZLRTe2rw-uzO0_zBVzZ/view?usp=sharing',
    type: 'certificate'
  },
  {
    text: 'Trilha ReactJS - Ignite',
    description: 'Rocketseat',
    icon: Certificate,
    link: 'https://drive.google.com/file/d/1lFhrmssiHOq-GvUPKedHAvm_gaokvfG7/view?usp=sharing',
    type: 'certificate'
  },
  {
    text: 'EF SET Certificate - 65/100 (C1 Advanced)',
    description: 'EF Standard English Test (EF SET) ',
    icon: Certificate,
    link: 'https://drive.google.com/file/d/1waf5tXnlwm4zILvJNKV-HZ6rqkJL1CWM/view?usp=sharing',
    type: 'certificate'
  },
]

export const ProfessionalContactsData = [
  {
    text: 'Meu Github',
    description: 'JacoMartins',
    image: 'Github',
    link: 'https://github.com/JacoMartins',
  },
  {
    text: 'LinkedIn',
    description: 'Jacó Martins',
    image: 'Linkedin',
    link: 'https://www.linkedin.com/in/jac%C3%B3-martins-2a9622224/',
  },
]

export const ProjectsSeekers = [
  {
    text: 'Moovooca',
    description: 'Encontre o ônibus perfeito para chegar até a UFC.',
    icon: <Bus size={48} weight='regular' color='#338274' />,
    type: 'project'
  },
  {
    text: 'BookYourself',
    description: 'Um site de reservas para escolas.',
    icon: <BookBookmark size={48} weight='regular' color='#94956B' />,
    type: 'project'
  },
  {
    text: 'Ecos',
    description: 'Simule um sistema operacional em um site com JavaScript.',
    image: eclipseLogo,
    type: 'project'
  },
  {
    text: 'Port.me',
    description: 'Port.me: Crie, Gerencie e Conecte-se!',
    image: portmeLogo,
    type: 'project'
  }
]