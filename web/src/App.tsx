import { useState } from 'react'
import { Header } from './components/Header'
import { Page } from './components/Pages/Home';
import { GlobalStyle } from './global'

function App() {

  const [ nav, setNav ] = useState('home');

  function handleChangeNav(name:string,){
    setNav(name);
    console.log(nav);
  }

  return (
    <>
      <Header changeNav={handleChangeNav} nav={nav} />
      <Page name="main">

      </Page>
      <GlobalStyle />
    </>
  )
}

export default App
