import CatBubble from "../CatBubble"

type FilterProps = {
  handleTagClick: (tag: string) => void
  selectedTags: string[]
}

function ProjectFilter({ handleTagClick, selectedTags }: FilterProps) {

  const isTagSelected = (tag: string) => selectedTags.includes(tag)

  return (
    <div className="flex flex-row gap-1 flex-wrap my-3 mt-8">
  <button className={isTagSelected("React") ? "bg-primary text-white" : "bg-light text-dark"} onClick={() => handleTagClick("React")}>
    <CatBubble name="React" />
  </button>

  <button className={isTagSelected("TypeScript") ? "bg-primary text-white" : "bg-light text-dark"} onClick={() => handleTagClick("TypeScript")}>
    <CatBubble name="TypeScript" />
  </button>

  <button className={isTagSelected("API") ? "bg-primary text-white" : "bg-light text-dark"} onClick={() => handleTagClick("API")}>
    <CatBubble name="API" />
  </button>
  <button className={isTagSelected("Node.js") ? "bg-primary text-white" : "bg-light text-dark"} onClick={() => handleTagClick("Node.js")}>
    <CatBubble name="Node.js" />
  </button>
</div>
  )
}

export default ProjectFilter