import SocialLinks from '../SocialLinks'

function Footer() {
  return (
    <footer className="bg-dark text-white p-4 flex flex-row items-center justify-between gap-1">
     <p className="text-base font-semibold">© 2026 Emil Lychnell. Byggd med React.</p>
     <div className="flex flex-row gap-4">
     <SocialLinks type="email" location="footer" />
     <SocialLinks type="github" location="footer" />
     <SocialLinks type="linkedin" location="footer" />
     </div>
    </footer>
  )
}

export default Footer