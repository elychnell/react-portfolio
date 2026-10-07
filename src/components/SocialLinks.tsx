import Icon from "./Icon"

interface SocialLinksProps {
  type: 'email' | 'github' | 'linkedin'
}

function SocialLinks({ type }: SocialLinksProps) {
  return (
    type === "email" ? (
    // Email icon
    <a href="mailto:elychnell@gmail.com" className="text-primary flex items-center gap-2 hover:underline"><Icon type="email" /> elychnell@gmail.com</a>
    ) : type === "github" ? (
    // GitHub icon
    <a href="https://github.com/elychnell" className="text-primary flex items-center gap-2 hover:underline"><Icon type="github" /> GitHub</a>
   ) : type === "linkedin" ? (
    // LinkedIn link
   <a href="https://www.linkedin.com/in/emil-lychnell-02b805335" className="text-primary flex items-center gap-2 hover:underline"><Icon type="linkedin" /> LinkedIn</a>
) : null
  )
}

export default SocialLinks