
function Navbar() {
  return (
    <header>
    <div className="">
    <span className="flex size-8 items-center justify-center rounded-full bg-[#5364ed] text-xs font-bold text-white transition-transform group-hover:rotate-6">
    EL
    </span>
    Emil Lychnell
    </div>
    <nav>
      <a href="/">Om mig</a>
      <a href="/about">Projekt</a>
      <a href="/contact">Kontakt</a>
    </nav>
    </header>
  )
}

export default Navbar