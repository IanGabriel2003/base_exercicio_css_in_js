import React from 'react'

import ListaVagas from './containers/ListaVagas'
import Hero from './components/Hero'
import Header from './components/Cabecalho'

import { Global } from './styles'

function App() {
  return (
    <>
      <Global />
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
