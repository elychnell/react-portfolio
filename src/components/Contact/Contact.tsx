import ContactForm from './ContactForm'
import SocialLinks from '../SocialLinks'
import type { FormData } from '../../types/types'

function Contact(contactProps: { formData: FormData, setFormData: (formData: FormData) => void }) {
  return (
    <section className="bg-[#ECF39E] flex flex-row gap-4 text-white py-20 px-4" id="contact">
      <div className="flex-shrink-0">
      <h6 className="text-sm font-semibold text-primary">KONTAKT</h6>
      <SocialLinks type="email" location="contact" />
      <SocialLinks type="github" location="contact" />
      <SocialLinks type="linkedin" location="contact" />
      </div>
      <ContactForm formData={contactProps.formData} setFormData={contactProps.setFormData} />
    </section>
  )
}

export default Contact