import type { FormData } from '../../types/types'

function ContactForm(formProps: { formData: FormData, setFormData: (formData: FormData) => void }) {

function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    formProps.setFormData({ ...formProps.formData, [name]: value });
  }

function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log('Form submitted:', formProps.formData);
    // ADD EMAIL SENDING FUNCTIONALITY HERE
  }

  return (
    <form onSubmit={(e) => handleFormSubmit(e)} className="flex flex-col gap-2 max-w-md bg-white p-4 rounded shadow-md w-850">
    <input name="name" type="text" placeholder="Namn" className="w-full mb-2 p-2 rounded text-black" value={formProps.formData.name} onChange={handleChange} />
    <input name="email" type="email" placeholder="E-post" className="w-full mb-2 p-2 rounded text-black" value={formProps.formData.email} onChange={handleChange} />
    <input name="phone" type="tel" placeholder="Telefonnummer" className="w-full mb-2 p-2 rounded text-black" value={formProps.formData.phone} onChange={handleChange} />
    <input name="subject" type="text" placeholder="Ämne" className="w-full mb-2 p-2 rounded text-black" value={formProps.formData.subject} onChange={handleChange} />
    <textarea name="message" placeholder="Meddelande" className="w-full mb-2 p-2 rounded text-black" value={formProps.formData.message} onChange={handleChange}></textarea>
    <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
      Skicka
    </button>
    </form>
  )
}

export default ContactForm