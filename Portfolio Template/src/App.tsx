import { useState } from 'react'
import { Header } from './components/Header'
import { HeaderFixedContext } from './HeaderContext'

function App() {

  return (
    <HeaderFixedContext.Provider value={false}>
      <Header />
    </HeaderFixedContext.Provider>
  )
}

export default App
