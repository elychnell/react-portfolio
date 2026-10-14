import SocialLinks from '../SocialLinks'

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 bg-dark p-4 text-white sm:flex-row sm:justify-between">
    <p className="hidden text-sm font-semibold sm:block">© 2026 Emil Lychnell. Byggd med React.</p>

    <div className="flex flex-row gap-4">
    <SocialLinks type="email" location="footer" />
    <SocialLinks type="github" location="footer" />
    <SocialLinks type="linkedin" location="footer" />
    </div>
    </footer>
  )
}

export default Footer