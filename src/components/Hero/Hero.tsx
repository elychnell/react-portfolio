import Devcard from "./Devcard"
import Decoration from "../Decoration"

function Hero() {
  return (
    <section className="scroll-mt-24 mx-auto grid max-w-[88rem] items-stretch gap-12 lg:grid-cols-2 mt-10 py-20 rounded-lg" id="home">
      <div className="max-w-full">
        <p className="text-base font-semibold text-primary tracking-wide">FRONTEND UTVECKLARE I UPPSALA</p>
        <h1 className="text-8xl font-extrabold text-light tracking-tight">Hej, jag är <span className="text-primary">Emil.</span></h1>
        <h2 className="mt-3 text-2xl font-semibold text-primary">Frontend Developer</h2>
        <p className="mt-4 max-w-xl text-base leading-7 sm:text-lg sm:leading-8 text-primary">Jag studerar till frontendutvecklare och gillar att skapa snabba, tillgängliga och genomtänkta upplevelser för webben</p>
        <a href="#projects" className="mt-4 inline-block rounded-4xl bg-primary px-4 py-2 text-white hover:bg-light">Se mina projekt</a>
        <Decoration type="bigthing" className="pt-25 w-155 h-auto text-primary" />
      </div>
        <Devcard />
      </section>
  )
}

export default Hero