import type { Project } from "../../types/types"
import Icon from "../Icon"
import CatBubble from "../CatBubble"

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="max-w-lg justify-self-center flex flex-col gap-6 py-8 px-5 bg-dark rounded-lg shadow-md">
      <img src={project.image} alt={project.title} className="w-full h-94 rounded-lg border border-primary" />
      <h3 className="text-2xl text-center font-bold text-light">{project.title}</h3>
      <p className="text-primary min-h-[190px]">{project.description}</p>
      <div className="mx-auto flex flex-row gap-2 max-w-xs flex-wrap justify-center">
        {project.tags.map(tag => (
          <CatBubble key={tag} name={tag} />
        ))}
      </div>
      <div className="flex flex-row justify-center gap-6">
      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline flex flex-row gap-1">
      <Icon type="github" />  GitHub Repo
      </a>
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline ml-4 flex flex-row gap-1">
         <Icon type="www" /> Live Site
        </a>)}  
      </div>
    </div>
  )
}

export default ProjectCard