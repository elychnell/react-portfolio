import Icon from "./Icon"

interface SocialLinksProps {
  type: 'email' | 'github' | 'linkedin'
  location: 'footer' | 'contact'
}

function SocialLinks({ type, location }: SocialLinksProps) {

const textColor = location === "contact" ? "text-primary " : "text-white"
  
  return (
    type === "email" ? (
    // Email icon
    <a href="mailto:elychnell@gmail.com" className={`${textColor} flex items-center gap-2 hover:underline`}><Icon type="email" className="size-6" /> elychnell@gmail.com</a>
    ) : type === "github" ? (
    // GitHub icon
    <a href="https://github.com/elychnell" className={`${textColor} flex items-center gap-2 hover:underline`}><Icon type="github" className="size-6" /> GitHub</a>
   ) : type === "linkedin" ? (
    // LinkedIn link
   <a href="https://www.linkedin.com/in/emil-lychnell-02b805335" className={`${textColor} flex items-center gap-2 hover:underline`}><Icon type="linkedin" className="size-6" /> LinkedIn</a>
) : null
  )
}

export default SocialLinks