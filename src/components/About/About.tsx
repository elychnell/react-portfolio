import CatBubble from "../CatBubble"

function About() {
  return (
    <section
      className="scroll-mt-16 py-32 lg:py-36 bg-highlight"
      id="about"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 md:flex-row md:items-center md:gap-16 lg:gap-20">
        <div className="md:flex-1">
          <p className="mb-5 text-base font-semibold tracking-wide text-primary">
            01 / OM MIG
          </p>

          <h2 className="mb-4 max-w-md text-5xl font-extrabold leading-tight text-blacknpm  md:text-6xl">
            Nyfiken på hur bra idéer blir bra webb.
          </h2>
        </div>

        <div className="md:flex-1">
          <p className="mb-6 text-xl leading-8 tracking-[-0.02em] text-closeBlack sm:text-2xl sm:leading-10">
            Jag är frontendstudent med fokus på att bygga användarvänliga
            gränssnitt där form och funktion arbetar tillsammans.
          </p>

          <p className="mb-6 max-w-2xl text-base leading-7 text-primary">
            Under min utbildning arbetar jag med allt från semantisk HTML
            och responsiv CSS till React, TypeScript och API:er. Jag
            uppskattar problemlösning, rena komponenter och detaljer som
            gör en produkt enklare att använda.
          </p>

          <div className="flex flex-wrap gap-2">
            <CatBubble name="React" />
            <CatBubble name="TypeScript" />
            <CatBubble name="CSS" />
            <CatBubble name="HTML" />
            <CatBubble name="Tailwind" />
            <CatBubble name="Git" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About