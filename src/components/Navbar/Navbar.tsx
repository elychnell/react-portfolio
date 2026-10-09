import Icon from "../Icon"

function Navbar() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-primary bg-primary py-4 px-50">
    <div className="flex items-center gap-2 text-white">
    <span className="flex size-8 items-center justify-center rounded-full bg-light text-xs font-bold">
    EL
    </span>
    Emil Lychnell
    </div>
    <nav className="flex gap-4 text-sm font-semibold">
      <a href="#about" className="flex flex-row gap-2 text-white hover:text-highlight">Om mig <Icon type="person"/></a>
      <a href="#projects" className="flex flex-row gap-2 text-white hover:text-highlight">Projekt <Icon type="keyboard" /></a>
      <a href="#contact" className="flex flex-row gap-2 text-white hover:text-highlight">Kontakt <Icon type="email" /></a>
    </nav>
    </header>
  )
}

export default Navbar