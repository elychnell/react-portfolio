interface CatBubbleProps {
  name: string;
  className?: string;
}

function CatBubble({ name, className }: CatBubbleProps) {
  return (
  <span className={`rounded-full border px-3 py-1 text-sm font-medium ${className ?? 'border-[#151824]/12 bg-white'}`}>{name}</span>
  )
}

export default CatBubble