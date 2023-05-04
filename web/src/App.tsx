import { useState } from 'react'
import { Header } from './components/Header'
import { Page } from './components/Pages/Home';
import { GlobalStyle } from './global'

function App() {
  const [ nav, setNav ] = useState('home');
  const [colorScheme, setColorScheme] = useState<string | null>(localStorage.getItem('colorScheme') === null? 'light' : localStorage.getItem('colorScheme'));

  function handleToggleColorScheme(){
    if(colorScheme == 'light') {
      localStorage.setItem("colorScheme", "dark");
      setColorScheme(localStorage.getItem('colorScheme'));
      console.log(colorScheme);
    } else {
      localStorage.setItem("colorScheme", "light");
      setColorScheme(localStorage.getItem('colorScheme'));
      console.log(colorScheme);
    }
  }

  function handleChangeNav(name:string){
    setNav(name);
    
  }

  return (
    <>
      <Header changeNav={handleChangeNav} nav={nav} toggleColor={handleToggleColorScheme} colorScheme={colorScheme} />
      <Page name="main" colorScheme={colorScheme}/>
      <GlobalStyle colorScheme={colorScheme} />
    </>
  )
}

export default App
