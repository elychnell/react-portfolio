import './App.css'
import { useState } from 'react'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'


function App() {

  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  }

  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [formData, setFormData] = useState(initialFormData)

  return (
    <div className="">
    <Navbar />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
