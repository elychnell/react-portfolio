import './App.css'
import { useState } from 'react'

import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/ContactForm'
import Footer from './components/Footer'

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
    <div className="bg-[#ECF39E] text-white">
    <Navbar />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>
  )
}

export default App
