import ContactForm from './ContactForm'
import SocialLinks from '../SocialLinks'
import type { FormData } from '../../types/types'

function Contact(contactProps: { formData: FormData, setFormData: (formData: FormData) => void }) {
  return (
    <section className="bg-highlight w-full" id="contact">
      <div className="mx-auto flex max-w-4xl flex-row items-start justify-between py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex-shrink-0">
      <h6 className="text-base font-semibold text-primary">03 / KONTAKT</h6>
      <SocialLinks type="email" location="contact" />
      <SocialLinks type="github" location="contact" />
      <SocialLinks type="linkedin" location="contact" />
      </div>
      <ContactForm formData={contactProps.formData} setFormData={contactProps.setFormData} />
      </div>
    </section>
  )
}

export default Contact