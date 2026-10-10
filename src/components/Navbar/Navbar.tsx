import Icon from "../Icon"

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between gap-4 border-b border-primary bg-primary py-4 px-50">
    <div className="flex items-center gap-2 text-white">
    <span className="flex size-8 items-center justify-center rounded-full bg-light text-xs font-bold">
    EL
    </span>
    Emil Lychnell
    </div>
    <nav className="flex gap-4 text-sm font-semibold">
      <a href="#home" className="flex flex-row gap-2 text-white hover:text-highlight"><span className="mt-0.5">Hem </span><Icon className="size-6 relative -top-0.25" type="home"/></a>
      <a href="#about" className="flex flex-row gap-2 text-white hover:text-highlight"><span className="mt-0.5">Om mig </span><Icon className="size-4.75 relative top-0.25" type="person"/></a>
      <a href="#projects" className="flex flex-row gap-2 text-white hover:text-highlight"><span className="mt-0.5">Projekt </span><Icon className="size-5.5 relative top-0.125" type="keyboard" /></a>
      <a href="#contact" className="flex flex-row gap-2 text-white hover:text-highlight"><span className="mt-0.5">Kontakt </span><Icon className="size-5.5" type="email" /></a>
    </nav>
    </header>
  )
}

export default Navbar