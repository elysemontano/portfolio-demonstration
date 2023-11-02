import React from 'react'
import Welcome from './components/Welcome'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Nav from './components/Nav'
import './App.css'

const App = () => {
  return (
    <>
      <Nav />
      <Welcome />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App