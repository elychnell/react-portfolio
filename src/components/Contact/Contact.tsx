import ContactForm from './ContactForm'
import SocialLinks from '../SocialLinks'
import Decoration from '../Decoration'

function Contact() {
  return (
    <section className="scroll-mt-14 bg-highlight w-full min-h-[60vh]" id="contact">
      <div className="mx-auto flex max-w-[92rem] flex-col items-start gap-8 px-4 py-16 sm:px-6 md:flex-row lg:px-8 lg:py-24">
      <div className="flex-shrink-0">
      <p className="text-base sm:text-lg font-semibold text-primary tracking-wide">03 / KONTAKT</p>
      <h2 className="text-4xl sm:text-6xl font-semibold leading-tight">Har du en idé?<br />Hör av dig.</h2>
      <p className="mt-4 text-base sm:text-xl max-w-md leading-7 sm:leading-8 text-primary">
        Jag är alltid öppen för nya kontakter, samarbeten och möjligheter att lära mig mer.
      </p>
      <div className="mt-4">
      <SocialLinks type="email" location="contact" />
      <SocialLinks type="github" location="contact" />
      <SocialLinks type="linkedin" location="contact" />
      </div>
      </div>
      <Decoration type="arrow" className="mx-auto w-full max-w-[230px] md:max-w-[400px] h-auto text-primary rotate-90 px-4 md:rotate-0 pt-10 pb-10 md:pt-25" />
      <div className="mx-auto min-w-[320px] sm:min-w-[440px] md:mx-0 lg:mx-0">
      <ContactForm />
      </div>
      </div>
    </section>
  )
}

export default Contact