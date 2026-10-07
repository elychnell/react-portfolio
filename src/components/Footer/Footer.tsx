import SocialLinks from '../SocialLinks'

function Footer() {
  return (
    <footer className="bg-dark text-white p-4 flex flex-row items-center justify-between gap-1">
     <p>© 2025 Emil Lychnell. Byggd med React.</p>
     <div className="flex flex-row gap-4">
     <SocialLinks type="github" />
     <SocialLinks type="linkedin" />
     </div>
    </footer>
  )
}

export default Footer