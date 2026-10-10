import { useState } from "react"
import ProjectFilter from "./ProjectFilter"
import ProjectCard from "./ProjectCard"
import { projects } from "../../data/projects"

function Projects() {
const [selectedTags, setSelectedTags] = useState<string[]>([])

const filteredProjects = projects.filter(project => {
  // If no tags are selected, show all projects
  if (selectedTags.length === 0) {
    return true
  }
  // Check if the project has any of the selected tags
  return selectedTags.some(tag => project.tags.includes(tag))
})

const handleClear = () => {
  setSelectedTags([])
}

const handleTagClick = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])
}

  return (
    <section className="scroll-mt-16 bg-light text-dark py-20 px-4 flex flex-col items-center justify-center w-full" id="projects">
      <div className="flex flex-row gap-[25em] items-between justify-center mb-4 flex-wrap">
        <div>
        <h6 className="text-base font-semibold text-primary tracking-wide">02 / UTVALDA ARBETEN</h6>
        <h1 className="text-6xl font-extrabold text-primary">Mina projekt</h1>
        </div>
        <p className="text-base text-primary max-w-[24em] mt-9">Ett urval av projekt från min utbildning och egen tid — från små gränssnitt till fullstack-applikationer.</p>
      </div>
      <ProjectFilter handleTagClick={handleTagClick} handleClear={handleClear} selectedTags={selectedTags} />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[90em] mx-auto mt-4">
      {filteredProjects.map(project => (
      <ProjectCard
      key={project.id}
      project={project}
      />
      
))}
      </ul>
    </section>
  )
}

export default Projects