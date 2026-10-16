import { useState } from "react";
import Icon from "../Icon"
import { motion, AnimatePresence } from "motion/react";

function Navbar() {

const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <header className="fixed top-0 left-0 w-full z-1000 flex items-center justify-between border-b border-primary bg-dark py-3 px-4 sm:px-8 lg:px-10">
    <div className="flex items-center gap-2 text-white">
    <span className="flex size-8 items-center justify-center rounded-full bg-light text-xs font-bold">
    EL
    </span>
    Emil Lychnell
    </div>

    <button 
    type="button"
    aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
    aria-expanded={isMenuOpen}
    aria-controls="mobile-navigation"
    className="lg:hidden"
    onClick={() => setIsMenuOpen(!isMenuOpen)}>
      
   <Icon type="menu" className={`size-8 text-white drop-shadow-md ${isMenuOpen ? "drop-shadow-green-500" : "drop-shadow-black"}`} />
    </button>
    <AnimatePresence>
   {isMenuOpen && (
   <motion.nav
   
      id="mobile-navigation"
      initial={{ x: '150px' }}
      animate={{ x: '0px' }}
      exit={{ x: '150px' }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="absolute right-0.5 top-full origin-topright w-[125px] rounded-lg border border-primary bg-dark p-4 shadow-xl lg:hidden"
   >
   <div className="menu-content flex flex-col gap-4">
   <a href="#home"
   className="flex flex-row gap-2 text-white
         text-shadow-md text-shadow-black
         hover:text-highlight transition-colors duration-200
         focus-visible:outline-none focus-visible:ring-2
         focus-visible:ring-highlight focus-visible:ring-offset-2
         focus-visible:ring-offset-dark"
   onClick={() => setIsMenuOpen(false)}><span className="mb-1">Hem </span><Icon className="size-6 relative drop-shadow-xs drop-shadow-black" type="home"/></a>
   <a href="#about" 
   className="flex flex-row gap-2 text-white
         text-shadow-md text-shadow-black
         hover:text-highlight transition-colors duration-200
         focus-visible:outline-none focus-visible:ring-2
         focus-visible:ring-highlight focus-visible:ring-offset-2
         focus-visible:ring-offset-dark"
   onClick={() => setIsMenuOpen(false)}><span>Om mig </span><Icon className="size-4.75 relative top-0.5 drop-shadow-xs drop-shadow-black" type="person"/></a>
   <a href="#projects" 
   className="flex flex-row gap-2 text-white
         text-shadow-md text-shadow-black
         hover:text-highlight transition-colors duration-200
         focus-visible:outline-none focus-visible:ring-2
         focus-visible:ring-highlight focus-visible:ring-offset-2
         focus-visible:ring-offset-dark"
   onClick={() => setIsMenuOpen(false)}><span>Projekt </span><Icon className="size-5.5 relative top-0.25 drop-shadow-xs drop-shadow-black" type="keyboard" /></a>
   <a href="#contact"
   className="flex flex-row gap-2 text-white
         text-shadow-md text-shadow-black
         hover:text-highlight transition-colors duration-200
         focus-visible:outline-none focus-visible:ring-2
         focus-visible:ring-highlight focus-visible:ring-offset-2
         focus-visible:ring-offset-dark"
   onClick={() => setIsMenuOpen(false)}><span>Kontakt </span><Icon className="size-5.5 relative top-0.25 drop-shadow-xs drop-shadow-black" type="email" /></a>
    </div>
  </motion.nav> 
)}
</AnimatePresence>

    <nav className="hidden lg:flex gap-4 text-sm font-semibold">
      <a href="#home" className="flex flex-row gap-2 text-white
         hover:text-highlight transition-colors duration-200
         text-shadow-md text-shadow-black
         focus-visible:outline-none focus-visible:ring-2
         focus-visible:ring-highlight focus-visible:ring-offset-2
         focus-visible:ring-offset-dark"><span className="mt-0.5">Hem </span><Icon className="size-6 relative -top-0.25" type="home"/></a>
      <a href="#about" className="flex flex-row gap-2 text-white
         hover:text-highlight transition-colors duration-200
         text-shadow-md text-shadow-black
         focus-visible:outline-none focus-visible:ring-2
         focus-visible:ring-highlight focus-visible:ring-offset-2
         focus-visible:ring-offset-dark"><span className="mt-0.5">Om mig </span><Icon className="size-4.75 relative top-0.25" type="person"/></a>
      <a href="#projects" className="flex flex-row gap-2 text-white
         hover:text-highlight transition-colors duration-200
         text-shadow-md text-shadow-black
         focus-visible:outline-none focus-visible:ring-2
         focus-visible:ring-highlight focus-visible:ring-offset-2
         focus-visible:ring-offset-dark"><span className="mt-0.5">Projekt </span><Icon className="size-5.5 relative top-0.125" type="keyboard" /></a>
      <a href="#contact" className="flex flex-row gap-2 text-white
         hover:text-highlight transition-colors duration-200
         text-shadow-md text-shadow-black
         focus-visible:outline-none focus-visible:ring-2
         focus-visible:ring-highlight focus-visible:ring-offset-2
         focus-visible:ring-offset-dark"><span className="mt-0.5">Kontakt </span><Icon className="size-5.5" type="email" /></a>
    </nav>
    </header>
  )
}

export default Navbar