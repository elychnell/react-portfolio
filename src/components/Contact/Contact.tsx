import ContactForm from './ContactForm'
import SocialLinks from '../SocialLinks'
import type { FormData } from '../../types/types'
import Decoration from '../Decoration'

function Contact(contactProps: { formData: FormData, setFormData: (formData: FormData) => void }) {
  return (
    <section className="bg-highlight w-full" id="contact">
      <div className="mx-auto flex max-w-[92rem] flex-row items-start justify-between py-10 sm:px-6 lg:px-8">
      <div className="flex-shrink-0">
      <h6 className="text-base font-semibold text-primary tracking-wide">03 / KONTAKT</h6>
      <h2 className="sm:text-5xl text-4xl font-semibold leading-tight">Har du en idé?<br />Hör av dig.</h2>
      <p className="mt-4 text-base max-w-md leading-7 sm:text-xl sm:leading-8 text-primary">
        Jag är alltid öppen för nya kontakter, samarbeten och möjligheter att lära mig mer.
      </p>
      <div className="mt-4">
      <SocialLinks type="email" location="contact" />
      <SocialLinks type="github" location="contact" />
      <SocialLinks type="linkedin" location="contact" />
      </div>
      </div>
      <Decoration type="arrow" className="pt-25 w-100 h-auto text-primary" />
      <ContactForm formData={contactProps.formData} setFormData={contactProps.setFormData} />
      </div>
    </section>
  )
}

export default Contact