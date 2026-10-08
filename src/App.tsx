import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Ghost from './components/Ghost/Ghost'

function App() {

  const initialFormData = {
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
    <Contact />
    <Footer />
  </main>
    </>
  )
}

export default App
