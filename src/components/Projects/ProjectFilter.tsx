import CatBubble from "../CatBubble"
import { filterTags } from "../../data/projects"

type FilterProps = {
  handleTagClick: (tag: string) => void
  handleClear: () => void
  selectedTags: string[]
}

function ProjectFilter({ handleTagClick, handleClear, selectedTags }: FilterProps) {

  const isTagSelected = (tag: string) => selectedTags.includes(tag)

  return (
    <div className="flex flex-row gap-1 flex-wrap my-4 mx-auto max-w-[90em] justify-center">
      {filterTags.map(tag => (
    <button
    key={tag}
    className={isTagSelected(tag) ? "bg-primary text-white" : "bg-light text-dark"}
    onClick={() => handleTagClick(tag)}
    >
    <CatBubble name={tag} />
    </button>
    ))}

  <button className="" onClick={handleClear}>
    <CatBubble name="Rensa" />
  </button>
</div>
  )
}

export default ProjectFilter