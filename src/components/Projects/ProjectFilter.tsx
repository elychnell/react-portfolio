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
    <div className="bg-dark border border-primary shadow-2xl shadow-highlight rounded-2xl px-2 py-1 flex flex-row gap-1 flex-wrap my-4 mx-auto max-w-[90em] justify-center">
      {filterTags.map(tag => (
    <button
    key={tag}
    className={`
    rounded-full border transition-colors duration-200
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-highlight
    focus-visible:ring-offset-2
    focus-visible:ring-offset-dark
    ${
      isTagSelected(tag)
        ? "bg-light border-highlight text-white"
        : "bg-dark border-primary text-highlight hover:bg-lighter hover:border-light hover:text-white"
    }
    `}
    onClick={() => handleTagClick(tag)}
    >
    <CatBubble className="border-0 bg-transparent text-inherit" name={tag} />
    </button>
    ))}

  <button
  className="
    rounded-full border border-primary
    bg-dark text-highlight
    transition-colors duration-200
    hover:bg-lighter hover:border-light hover:text-white
    focus-visible:outline-none
    focus-visible:ring-2 focus-visible:ring-highlight
    focus-visible:ring-offset-2
    focus-visible:ring-offset-dark"
    onClick={handleClear}>
    <CatBubble className="border-0 bg-transparent text-inherit" name="Rensa" />
  </button>
</div>
  )
}

export default ProjectFilter