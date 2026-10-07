interface CatBubbleProps {
  name: string;
}

function CatBubble({ name }: CatBubbleProps) {
  return (
    <span className="rounded-full border border-[#151824]/12 px-4 py-2 text-sm font-medium">{name}</span>
  )
}

export default CatBubble