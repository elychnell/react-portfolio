import type { Project } from "../../types/types"
import CatBubble from "../CatBubble"


/* 
id: 1,
    title: "Regn.nu",
    description: "...",
    tags: ["TypeScript", "API"],
    image: '../assets/img/project1.jpg',
    repoUrl: 'https://github.com/elychnell/regn-nu',
    liveUrl: ''
*/

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="max-w-md justify-self-center flex flex-col gap-2 py-2 px-6 bg-dark rounded-lg shadow-md">
      <h3 className="text-lg font-bold text-light">{project.title}</h3>
      <div className="max-w-md overflow-hidden rounded-xl">
      <img src={project.image} alt={project.title} className="w-full h-auto rounded-lg" />
      </div>
      <p className="text-primary">{project.description}</p>
      <div className="flex flex-row gap-2">
        {project.tags.map(tag => (
          <CatBubble key={tag} name={tag} />
        ))}
      </div>
      <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline">
        GitHub Repo
      </a>
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-primary underline ml-4">
          Live Site
        </a>
      )}  
    </div>
  )
}

export default ProjectCard