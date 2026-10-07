
function Navbar() {
  return (
    <header className="flex items-center justify-between gap-4 border-b border-primary bg-primary p-4 text-primary">
    <div className="flex items-center gap-2 text-white">
    <span className="flex size-8 items-center justify-center rounded-full bg-light text-xs font-bold text-white">
    EL
    </span>
    Emil Lychnell
    </div>
    <nav className="flex gap-4 text-sm font-semibold text-white">
      <a href="/">Om mig</a>
      <a href="/about">Projekt</a>
      <a href="/contact">Kontakt</a>
    </nav>
    </header>
  )
}

export default Navbar