import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Ghost from './components/Ghost/Ghost'
import type { FormData } from './types/types'

function App() {

const initialFormData: FormData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  }
  
  const [formData, setFormData] = useState(initialFormData)

  return (
    <>
    <Ghost />

  <main id="page-content">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact formData={formData} setFormData={setFormData} />
    <Footer />
  </main>
    </>
  )
}

export default App
