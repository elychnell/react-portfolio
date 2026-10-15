import Devcard from "./Devcard"
import Decoration from "../Decoration"

function Hero() {
  return (
    <section className="scroll-mt-24 mx-auto grid w-full max-w-[88rem] grid-cols-1 items-stretch gap-8 px-4 mt-3 lg:mt-10 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-20" id="home">
      <div className="w-full min-w-0 order-last lg:order-none lg:mt-0">
        <p className="text-[1rem] md:text-base font-semibold text-primary tracking-wide">FRONTEND UTVECKLARE I UPPSALA</p>
        <h1 className="text-[2.9rem] sm:text-6xl lg:text-8xl font-extrabold text-light tracking-tight text-shadow-xs text-shadow-black">Hej, jag är <span className="text-primary text-shadow-md text-shadow-dark">Emil.</span></h1>
        <h2 className="mt-0 md:mt-3 text-xl md:text-2xl font-semibold text-primary">Frontend Developer</h2>
        <p className="mt-1 md:mt-4 max-w-xl text-base leading-7 sm:text-lg sm:leading-8 text-primary">Jag studerar till frontendutvecklare och gillar att skapa snabba, tillgängliga och genomtänkta upplevelser för webben</p>
        <a href="#projects" className="mt-4 inline-block rounded-4xl bg-primary px-4 py-2 text-white text-shadow-xs text-shadow-black hover:bg-light">Se mina projekt</a>
        <Decoration type="bigthing" className="pt-8 sm:pt-20 w-full max-w-[620px] h-auto text-primary drop-shadow-md drop-shadow-highlight" />
      </div>
        <Devcard />
      </section>
  )
}

export default Hero