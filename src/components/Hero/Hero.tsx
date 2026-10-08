import Devcard from "./Devcard"

function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-stretch gap-12 lg:grid-cols-2 mt-10">
      <div>
        <h6 className="text-sm font-semibold text-primary">FRONTEND UTVECKLARE I UPPSALA</h6>
        <h1 className="text-6xl font-bold text-light">Hej, jag är <span className="text-primary">Emil</span></h1>
        <h5 className="mt-3 text-xl font-semibold text-primary">Frontend Developer</h5>
        <p className="mt-4 max-w-xl text-base leading-7 sm:text-lg sm:leading-8 text-primary">Jag studerar till frontendutvecklare och gillar att skapa snabba, tillgängliga och genomtänkta upplevelser för webben</p>
        <a href="/contact" className="mt-4 inline-block rounded-lg bg-primary px-4 py-2 text-white hover:bg-dark">Se mina projekt</a>
        </div>
        <Devcard />
      </section>
  )
}

export default Hero