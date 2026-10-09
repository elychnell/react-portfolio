import type { Project } from "../../types/types"
import Icon from "../Icon"
import CatBubble from "../CatBubble"

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="max-w-lg justify-self-center flex flex-col gap-5 py-4 px-6 bg-dark rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-light">{project.title}</h3>
      <div className="max-w-md overflow-hidden rounded-xl">
      <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg" />
      </div>
      <p className="text-primary">{project.description}</p>
      <div className="mx-4 flex flex-row gap-2 max-w-md flex-wrap">
        {project.tags.map(tag => (
          <CatBubble key={tag} name={tag} />
        ))}
      </div>
      <div className="flex flex-row gap-4 mt-2">
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