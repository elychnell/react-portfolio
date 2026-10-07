import ProjectFilter from "./ProjectFilter"
import ProjectList from "./ProjectList"

function Projects() {
  return (
    <section className="bg-light text-dark py-20 px-4">
      <div className="container mx-auto">
        <h6 className="text-sm font-semibold text-primary">02 / UTVALDA ARBETEN</h6>
        <h1 className="text-2xl font-bold text-light">Mina projekt</h1>
        <p className="text-primary">Ett urval av projekt från min utbildning och egen tid — från små gränssnitt till fullstack-applikationer.</p>
      </div>
      <ProjectFilter />
      <ProjectList />
    </section>
  )
}

export default Projects