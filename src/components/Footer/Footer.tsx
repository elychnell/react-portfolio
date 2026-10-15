import SocialLinks from '../SocialLinks'

function Footer() {
  return (
    <footer className="flex flex-col items-center gap-3 bg-dark p-4 text-white sm:flex-row sm:justify-between">
    <p className="hidden text-base font-semibold md:block">© 2026 Emil Lychnell. Byggd med React.</p>

    <div className="mx-auto md:mx-0 flex flex-row gap-4">
    <SocialLinks type="email" location="footer" />
    <SocialLinks type="github" location="footer" />
    <SocialLinks type="linkedin" location="footer" />
    </div>
    </footer>
  )
}

export default Footer