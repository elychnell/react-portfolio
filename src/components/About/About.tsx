import CatBubble from "../CatBubble"

function About() {
  return (
    <section className="py-12">
    <h6 className="text-sm font-semibold text-primary">01 / OM MIG</h6>
    <h3 className="text-2xl font-bold text-center mb-4">Nyfiken på hur bra idéer blir bra webb.</h3>
    <p className="text-center text-primary text-bold max-w-2xl mx-auto mb-4">Jag är frontendstudent med fokus på att bygga användarvänliga gränssnitt där form och funktion arbetar tillsammans.</p>
    <p className="text-center text-primary text-bold max-w-2xl mx-auto mb-4">Under min utbildning arbetar jag med allt från semantisk HTML och responsiv CSS till React, TypeScript och API:er. Jag uppskattar problemlösning, rena komponenter och detaljer som gör en produkt enklare att använda.</p>
    <div className="flex flex-wrap justify-center gap-2 mt-4">
      <CatBubble name="React" />
      <CatBubble name="TypeScript" />
      <CatBubble name="CSS" />
      <CatBubble name="HTML" />
      <CatBubble name="Tailwind" />
      <CatBubble name="Git" />
      
    </div>
    </section>
  )
}

export default About