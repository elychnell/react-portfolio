interface CatBubbleProps {
  name: string;
  className?: string;
}

function CatBubble({ name, className }: CatBubbleProps) {
  return (
  <span className={`rounded-full border px-1.5 md:text-xs lg:px-3 py-0.5 lg:py-1 text-xs lg:text-sm font-medium ${className ?? 'border-[#151824]/12 bg-white'}`}>{name}</span>
  )
}

export default CatBubble