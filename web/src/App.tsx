import { useState } from 'react'
import { Header } from './components/Header'
import { Page } from './components/Pages/Home';
import { GlobalStyle } from './global'

export type Page = 'home' | 'projects';
export type Parts = 'home' | 'aboutMe' | 'habilities' | 'contacts' | 'projects' | 'portfolio';

const body = {
  pages: [
    {
      id: "home",
      title: "Início",
    },
    {
      id: "skills",
      title: "Habilidades",
    },
    {
      id: "projects",
      title: "Projetos"
    },
    {
      id: "portfolio",
      title: "Portfólio"
    }
  ],
  sections: [
    {
      id: "home",
      title: "Início",
    },
    {
      id: "aboutMe",
      title: "Sobre mim",
    },
    {
      id: "skills",
      title: "Habilidades",
    },
    {
      id: "contacts",
      title: "Contatos",
    },
    {
      id: "projects",
      title: "Projetos",
    },
    {
      id: "portfolio",
      title: "Portfólio",
    }
  ],
};

function App() {
  const [language, setLanguage] = useState(localStorage.getItem('colorScheme') ? 'light' : localStorage.getItem('colorScheme'));
  const [page, setPage] = useState<Page>('home');	
  const [navFocus, setNavFocus] = useState<Parts>('home');
  const [curriculo, setCurriculo] = useState('gdriveurl');

  function handleToggleLanguage() {
    if (language == 'light') {
      localStorage.setItem("Language", "dark");
      setLanguage(localStorage.getItem('Language'));
    } else {
      localStorage.setItem("Language", "light");
      setLanguage(localStorage.getItem('Language'));
    }
  }

  function handleChangeNavFocus(userFocus: Parts) {
    setNavFocus(userFocus);
  }

  return (
    <>
      <Header changeNavFocus={handleChangeNavFocus} page={page} navFocus={navFocus} handleToggleLanguage={handleToggleLanguage} language={language} />
      <Page name="main" language='english' />
      <GlobalStyle />
    </>
  )
}

export default App
