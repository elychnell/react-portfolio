import { useState } from "react"
import ProjectFilter from "./ProjectFilter"
import ProjectCard from "./ProjectCard"
import { projects } from "../../data/projects"
import Decoration from "../Decoration"
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

function Projects() {
const [selectedTags, setSelectedTags] = useState<string[]>([])
const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)

const filteredProjects = projects.filter(project => {
  // If no tags are selected, show all projects
  if (selectedTags.length === 0) {
    return true
  }
  // Check if the project has any of the selected tags
  return selectedTags.some(tag => project.tags.includes(tag))
})

const visibleProjects = filteredProjects.filter(project =>
  selectedProjectId !== null
    ? project.id === selectedProjectId
    : true
)

const handleClear = () => {
  setSelectedTags([])
  setSelectedProjectId(null)
}

const handleTagClick = (tag: string) => {
    setSelectedTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])
}

  return (
    <section className="scroll-mt-16 bg-light text-dark py-14 px-4 flex flex-col items-center justify-center w-full" id="projects">
      <div className="flex flex-row gap-[25em] items-between justify-center mb-4 flex-wrap">
        <div>
        <p className="text-base font-semibold text-highlight tracking-wide">02 / UTVALDA ARBETEN</p>
        <h2 className="text-6xl font-extrabold text-black">Mina projekt</h2>
        </div>
        <p className="text-base text-black max-w-[24em] mt-9">Ett urval av projekt från min utbildning och egen tid — från små gränssnitt till fullstack-applikationer.</p>
      </div>
      <Decoration type="heart" className="relative top-3 mx-auto w-120 h-auto text-black" />
      {selectedProjectId === null ? (<ProjectFilter handleTagClick={handleTagClick} handleClear={handleClear} selectedTags={selectedTags} />) : (<div className="h-6 my-4" aria-hidden="true" />)}
      <LayoutGroup>
  <motion.ul
    layout={false}
    className={`items-start overflow-anchor-none list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto max-w-[90em] ${
  selectedProjectId !== null ? "min-h-[1032px]" : ""
}`}
  >
    <AnimatePresence mode="popLayout">
      {visibleProjects.map(project => (
        <ProjectCard
          key={project.id}
          project={project}
          selectedProjectId={selectedProjectId}
          setSelectedProjectId={setSelectedProjectId}
        />
      ))}
    </AnimatePresence>
  </motion.ul>
</LayoutGroup>

      <Decoration type="thing" className="relative top-10 mx-auto w-120 h-auto text-black" />
    </section>
  )
}

export default Projects