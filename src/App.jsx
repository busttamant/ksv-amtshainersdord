import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { Home } from "./pages/Home";
import { Footer } from './components/Footer';
import { Mannschaft } from './pages/Mannschaft';
import { SpielPlan } from './pages/SpielPlan';
import { Sponsoren } from './pages/Sponsoren';
import { MitgliedWerden } from './pages/MitgliedWerden';
import { Kontakt } from './pages/Kontakt';
import { Vermietung } from './pages/Vermietung';
import { Historie } from './pages/Historie';
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mannschaft' element={<Mannschaft />} />
        <Route path='/spielplan' element={<SpielPlan />} />
        <Route path='/sponsoren' element={<Sponsoren />} />
        <Route path='/mitgliedwerden' element={<MitgliedWerden />} />
        <Route path='/kontakt' element={<Kontakt />} />
        <Route path='/vermietung' element={<Vermietung />} />
        <Route path='/historie' element={<Historie />} />

      </Routes >
      <Footer />
    </>
  )
}
export default App

