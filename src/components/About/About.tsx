import CatBubble from "../CatBubble"
import Decoration from "../Decoration"

function About() {
  return (
    <section className="scroll-mt-16 py-25 bg-highlight" id="about">
    <div className="flex flex-row items-center justify-center">
    <div>
    <h6 className="mx-4 text-base font-semibold text-primary tracking-wide">01 / OM MIG</h6>
    <h3 className="text-6xl font-extrabold text-center mb-4 max-w-md">Nyfiken på hur bra idéer blir bra webb.</h3>
    </div>
    <div>
    <p className="mx-20 max-w-2xl text-xl leading-8 tracking-[-0.02em] text-[#343847] sm:text-2xl sm:leading-10">Jag är frontendstudent med fokus på att bygga användarvänliga gränssnitt där form och funktion arbetar tillsammans.</p>
    <p className="text-center text-primary text-bold max-w-2xl mx-auto mb-4">Under min utbildning arbetar jag med allt från semantisk HTML och responsiv CSS till React, TypeScript och API:er. Jag uppskattar problemlösning, rena komponenter och detaljer som gör en produkt enklare att använda.</p>
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      <CatBubble name="React" />
      <CatBubble name="TypeScript" />
      <CatBubble name="CSS" />
      <CatBubble name="HTML" />
      <CatBubble name="Tailwind" />
      <CatBubble name="Git" />
    </div>
    </div>
    </div>
    <Decoration type="thing" className="relative top-15 mx-auto w-110 h-auto text-primary" />
    </section>
  )
}

export default About