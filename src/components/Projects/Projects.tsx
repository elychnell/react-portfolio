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
    <section className="bg-light text-dark py-20 px-4" id="projects">
      <div className="container mx-auto">
        <h6 className="text-sm font-semibold text-primary">02 / UTVALDA ARBETEN</h6>
        <h1 className="text-6xl font-extrabold text-primary">Mina projekt</h1>
        <p className="text-primary">Ett urval av projekt från min utbildning och egen tid — från små gränssnitt till fullstack-applikationer.</p>
      </div>
      <ProjectFilter handleTagClick={handleTagClick} handleClear={handleClear} selectedTags={selectedTags} />
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 max-w-[90em] mx-auto mt-4">
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