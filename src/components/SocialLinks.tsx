import Icon from "./Icon"

interface SocialLinksProps {
  type: 'email' | 'github' | 'linkedin'
  location: 'footer' | 'contact'
}

function SocialLinks({ type, location }: SocialLinksProps) {

const locationClass = location === "contact" ? "text-primary decoration-1 underline-offset-4 " : "text-white text-shadow-xs text-shadow-black hover:text-highlight transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-highlight focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
  
  return (
    type === "email" ? (
    // Email icon
    <a href="mailto:elychnell@gmail.com" aria-label="Link to email" className={`${locationClass} flex items-center gap-2 hover:underline text-sm lg:text-base`}><Icon type="email" className="size-4 lg:size-6" /> elychnell@gmail.com</a>
    ) : type === "github" ? (
    // GitHub icon
    <a href="https://github.com/elychnell" aria-label="Link to GitHub" className={`${locationClass} flex items-center gap-2 hover:underline text-sm lg:text-base`}><Icon type="github" className="size-4  lg:size-6" /> GitHub</a>
   ) : type === "linkedin" ? (
    // LinkedIn link
   <a href="https://www.linkedin.com/in/emil-lychnell-02b805335" aria-label="Link to LinkedIn" className={`${locationClass} flex items-center gap-2 hover:underline text-sm lg:text-base`}><Icon type="linkedin" className="size-4  lg:size-6" /> LinkedIn</a>
) : null
  )
}

export default SocialLinks