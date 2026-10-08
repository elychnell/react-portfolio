interface CatBubbleProps {
  name: string;
}

function CatBubble({ name }: CatBubbleProps) {
  return (
    <span className="rounded-full border border-[#151824]/12 px-3 py-1 text-sm font-medium bg-white">{name}</span>
  )
}

export default CatBubble