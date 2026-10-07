import Devcard from "./Devcard"

function Hero() {
  return (
    <div className="flex flex-col gap-4 container mx-auto">
        <h6 className="text-sm font-semibold text-primary">FRONTEND UTVECKLARE I UPPSALA</h6>
        <h1 className="text-2xl font-bold text-light">Hej, jag är <span className="text-primary">Emil</span></h1>
        <h5 className="text-lg text-primary">Frontend Developer</h5>
        <p className="text-primary">Jag studerar till frontendutvecklare och gillar att skapa snabba, tillgängliga och genomtänkta upplevelser för webben</p>
        <a href="/contact" className="mt-4 inline-block rounded bg-primary px-4 py-2 text-white hover:bg-dark">Se mina projekt</a>
        <Devcard />
      </div>
  )
}

export default Hero