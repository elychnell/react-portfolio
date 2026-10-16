import CatBubble from "../CatBubble"

function About() {
  return (
    <section
      className="scroll-mt-16 py-16 md:py-18 lg:py-36 bg-highlight"
      id="about"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:gap-8 px-6 lg:flex-row lg:items-start md:gap-6 lg:gap-8">
        <div className="md:flex-1">
          <p className="text-base mb-1 sm:text-lg md:mb-4 lg:mb-0 lg:text-xl xl:text-2xl font-semibold tracking-wide text-primary">
            01 / OM MIG
          </p>

          <h2 className="max-w-md text-4xl sm:text-[2.8rem] font-extrabold leading-tight text-black lg:text-6xl">
            Nyfiken på hur bra idéer blir bra webb.
          </h2>
        </div>

        <div className="lg:flex-1">
          <p className="mb-6 text-xl leading-8 tracking-[-0.02em] text-closeBlack sm:text-2xl sm:leading-10">
            Jag är frontendstudent med fokus på att bygga användarvänliga
            gränssnitt där form och funktion arbetar tillsammans.
          </p>

          <p className="mb-6 max-w-2xl text-base leading-7 text-primary text-shadow-2xs text-shadow-black-100">
            Under min utbildning arbetar jag med allt från semantisk HTML
            och responsiv CSS till React, TypeScript och API:er. Jag
            uppskattar problemlösning, rena komponenter och detaljer som
            gör en produkt enklare att använda.
          </p>

          <div className="flex flex-wrap gap-2 xs:mx-auto sm:mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
            <CatBubble name="HTML" className="shadow-md shadow-primary border-[#151824]/12 bg-white" />
            <CatBubble name="CSS" className="shadow-md shadow-primary border-[#151824]/12 bg-white" />
            <CatBubble name="JavaScript" className="shadow-md shadow-primary border-[#151824]/12 bg-white" />
            <CatBubble name="TypeScript" className="shadow-md shadow-primary border-[#151824]/12 bg-white" />
            <CatBubble name="React" className="shadow-md shadow-primary border-[#151824]/12 bg-white" />
            <CatBubble name="Tailwind" className="shadow-md shadow-primary border-[#151824]/12 bg-white" />
            <CatBubble name="SCSS" className="shadow-md shadow-primary border-[#151824]/12 bg-white" />
            <CatBubble name="Git" className="shadow-md shadow-primary border-[#151824]/12 bg-white" />
            <CatBubble name="API:er" className="shadow-md shadow-primary border-[#151824]/12 bg-white" />
            <CatBubble name="Node.js" className="shadow-md shadow-primary border-[#151824]/12 bg-white" />
            <CatBubble name="Express" className="shadow-md shadow-primary border-[#151824]/12 bg-white" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About