import type { Project } from "../../types/types"
import Icon from "../Icon"
import CatBubble from "../CatBubble"
import { AnimatePresence, motion } from "motion/react";
import { Maximize2, Minimize2 } from "lucide-react";
import { useRef, useState } from "react";

function ProjectCard({
  project,
  selectedProjectId,
  setSelectedProjectId,
}: {
  project: Project;
  selectedProjectId: number | null;
  setSelectedProjectId: (id: number | null) => void;
}) {

const isExpanded = selectedProjectId === project.id;
const [secondAnimation, setSecondAnimation] = useState(false);
const cardRef = useRef<HTMLLIElement>(null);
const [xOffset, setXOffset] = useState(0);

  return (
    <motion.li ref={cardRef}
      layout
      onLayoutAnimationComplete={() => {
      if (!isExpanded || secondAnimation) return;

      const card = cardRef.current;
      const parent = card?.parentElement;

      if (!card || !parent) return;

      const cardRect = card.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();

      const offset =
      parentRect.left + parentRect.width / 2 -
      (cardRect.left + cardRect.width / 2);

      setXOffset(offset);
      setSecondAnimation(true);
      }}
      animate={{
      x: secondAnimation ? xOffset : 0,
      y: secondAnimation ? 55 : 0,
      scale: secondAnimation ? 1.25 : 1,
      }}
      initial={false}
      exit={{
      opacity: 0,
      transition: { duration: 0.25, ease: "easeInOut" },
      }}
      transition={{
      x: {
      duration: secondAnimation ? 1.4 : 0,
      ease: "easeInOut",
      },
      y: {
      duration: secondAnimation ? 1.4 : 0,
      ease: "easeInOut",
      },
      scale: {
      duration: secondAnimation ? 1.4 : 0,
      ease: "easeInOut",
      },
      opacity: {
      duration: 0.55,
      ease: "easeInOut",
      delay: isExpanded ? 0.65 : 0,
      },
      layout: {
      duration: 0.55,
      ease: "easeInOut",
      },
      }}
      className={`relative list-none w-full justify-self-center flex flex-col gap-2 pt-6 pb-4 pl-7 pr-8 bg-dark rounded-lg shadow-md ${
      isExpanded ? "max-w-[285px] mb-40 lg:max-w-3xl max-h-[1200px] min-h-[200px] lg:min-h-[900px]" : "max-w-lg min-h-[470px] lg:min-h-[670px]"
      }`}
      >
      <div className="w-full flex gap-1 items-start">
      <img src={project.image} alt={project.title} className="h-64 lg:h-94 w-full rounded-lg border border-primary object-cover" />
      <button
      type="button"
      onClick={() => {
      if (isExpanded) {
      setSecondAnimation(false);
      setSelectedProjectId(null);
      return;
      } else {
      setSelectedProjectId(project.id);
      }
      }}
      aria-expanded={isExpanded}
      aria-label={isExpanded ? "Minimera projekt" : "Expandera projekt"}
      className="text-closeWhite relative bottom-5 shrink-0"
      >
      
      {isExpanded ? <Minimize2 /> : <Maximize2 />}
      </button>
      </div>
          
      <h3 className={`text-closeWhite text-center font-bold ${isExpanded ? "text-xl" : "text-2xl"}`}>{project.title}</h3>
      <p className={`text-whiteGreen ${isExpanded ? "text-sm" : "text-base line-clamp-4"}`}>{project.description}</p>
      <AnimatePresence initial={false}>
      {isExpanded && (
      <motion.div
      key="details"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="overflow-hidden"
      >
      {<p className="text-whiteGreen text-sm">{project.longDescription}</p>}
      </motion.div>
      )}
      </AnimatePresence>
      <div className="mx-auto flex flex-row gap-2 max-w-xs flex-wrap justify-center">
        {project.tags.map(tag => (
          <CatBubble key={tag} name={tag} />
        ))}
      </div>
      <div className="flex flex-row justify-center gap-1 lg:gap-6">
      <a href={project.repoUrl} target="_blank" aria-label="Link to GitHub repository" rel="noopener noreferrer" className="text-closeWhite flex flex-row gap-1 decoration-1 underline-offset-4 hover:underline">
      <Icon type="github" className="size-4 relative top-1 lg:size-6 lg:top-0" />  GitHub Repo
      </a>
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" aria-label="Link to live site" rel="noopener noreferrer" className="text-base text-closeWhite ml-4 flex flex-row gap-1 decoration-1 underline-offset-4 hover:underline">
         <Icon type="www" className="size-5 relative top-1 lg:size-6 lg:top-0" /> Live Site
        </a>)}  
      </div>
    </motion.li>
  )
}

export default ProjectCard