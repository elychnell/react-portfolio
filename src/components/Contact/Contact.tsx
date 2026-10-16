import ContactForm from './ContactForm'
import SocialLinks from '../SocialLinks'
import Decoration from '../Decoration'

function Contact() {
  return (
    <section className="scroll-mt-14 bg-highlight w-full min-h-[60vh]" id="contact">
      <div className="mx-auto flex max-w-[92rem] flex-col items-start gap-8 px-4 py-16 sm:px-6 md:flex-row md:gap-0 lg:px-8 lg:py-24">
      <div className="flex-shrink-0">
      <p className="text-base sm:text-lg lg:text-xl 2xl:text-2xl font-semibold text-primary tracking-wide">03 / KONTAKT</p>
      <h2 className="text-4xl sm:text-6xl md:text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold leading-tight">Har du en idé?<br />Hör av dig.</h2>
      <p className="mt-4 text-base sm:text-xl md:text-base lg:text-lg xl:text-xl 2xl:text-2xl xl:max-w-[330px] lg:max-w-[300px] md:max-w-[265px] 2xl:max-w-[400px] max-w-md leading-7 sm:leading-8 text-primary">
        Jag är alltid öppen för nya kontakter, samarbeten och möjligheter att lära mig mer.
      </p>
      <div className="mt-4">
      <SocialLinks type="email" location="contact" />
      <SocialLinks type="github" location="contact" />
      <SocialLinks type="linkedin" location="contact" />
      </div>
      </div>
      <Decoration type="arrow" className="mx-auto w-full max-w-[230px] md:max-w-[clamp(130px,calc(70.3125vw-410px),310px)] lg:max-w-[310px] xl:max-w-[350px] 2xl:max-w-[400px] h-auto text-primary rotate-90 px-4 md:px-0 md:rotate-0 pt-10 pb-10 md:pt-10 lg:pt-25" />
      <div className="mx-auto min-w-[320px] sm:min-w-[440px] md:mx-0 md:min-w-[310px] md:pl-2 lg:pl-0 lg:min-w-[350px] xl:min-w-[430px] 2xl:min-w-[500px]">
      <ContactForm />
      </div>
      </div>
    </section>
  )
}

export default Contact