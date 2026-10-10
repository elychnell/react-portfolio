import type { FormData } from '../../types/types'
import { useState } from 'react'


const initialFormData: FormData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  }

type FormErrors = Partial<Record<keyof FormData, string>>;

function ContactForm() {

const [errors, setErrors] = useState<FormErrors>({});
const [formData, setFormData] = useState(initialFormData)
const [isSubmitted, setIsSubmitted] = useState(false);

function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

function validateForm(): FormErrors {
  const newErrors: FormErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = 'Namn är obligatoriskt.';
  }

  if (!formData.subject.trim()) {
    newErrors.subject = 'Ämne är obligatoriskt.';
  }

  if (!formData.phone.trim()) {
    newErrors.phone = 'Telefonnummer är obligatoriskt.'; 
  } else if (!/^[+\d\s()-]+$/.test(formData.phone)) {
  newErrors.phone = 'Telefonnumret innehåller ogiltiga tecken.';
  }

  if (!formData.email.trim()) {
    newErrors.email = 'E-post är obligatoriskt.';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'E-postadressen är ogiltig.';
  }

  if (!formData.message.trim()) {
    newErrors.message = 'Meddelande är obligatoriskt.';
  }

  return newErrors;
}


function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true);
      setFormData(initialFormData);
      console.log('Form submitted:', formData);
      // ADD EMAIL SENDING FUNCTIONALITY HERE
    } else {
    setErrors(newErrors);
    setIsSubmitted(false);
    }
  }

  return (
    <form onSubmit={(e) => handleFormSubmit(e)} className="flex flex-col gap-2 max-w-md bg-white p-4 rounded shadow-md w-850">
    <div className="relative">
    <input
    id="name"
    name="name"
    type="text"
    placeholder=" "
    className="peer w-full rounded border border-gray-300 bg-white px-3 pb-2 pt-5 text-black focus:border-primary focus:outline-none"
    aria-invalid={Boolean(errors.name)}
    aria-describedby={errors.name ? "name-error" : undefined}
    value={formData.name}
    onChange={handleChange} />
    <label htmlFor="name" className="pointer-events-none absolute left-3 top-1/2
               -translate-y-1/2 text-gray-500
               transition-all duration-200
               peer-focus:top-2 peer-focus:translate-y-0
               peer-focus:text-xs
               peer-[:not(:placeholder-shown)]:top-2
               peer-[:not(:placeholder-shown)]:translate-y-0
               peer-[:not(:placeholder-shown)]:text-xs">Namn</label>
    </div>
    {errors.name && (<p id="name-error" className="mt-1 text-sm text-red-600" role="alert">{errors.name}</p>)}
    
    <div className="relative">
    <input
    id="email"
    name="email"
    type="email"
    placeholder=" "
    className="peer w-full rounded border border-gray-300 bg-white px-3 pb-2 pt-5 text-black focus:border-primary focus:outline-none"
    aria-invalid={Boolean(errors.email)}
    aria-describedby={errors.email ? "email-error" : undefined}
    value={formData.email}
    onChange={handleChange} />
    <label htmlFor="email" className="pointer-events-none absolute left-3 top-1/2
               -translate-y-1/2 text-gray-500
               transition-all duration-200
               peer-focus:top-2 peer-focus:translate-y-0
               peer-focus:text-xs
               peer-[:not(:placeholder-shown)]:top-2
               peer-[:not(:placeholder-shown)]:translate-y-0
               peer-[:not(:placeholder-shown)]:text-xs">E-post</label>
    </div>
    {errors.email && (<p id="email-error" className="mt-1 text-sm text-red-600" role="alert">{errors.email}</p>)}
    
    <div className="relative">
    <input
    id="phone"
    name="phone"
    type="tel"
    placeholder=" "
    className="peer w-full rounded border border-gray-300 bg-white px-3 pb-2 pt-5 text-black focus:border-primary focus:outline-none"
    aria-invalid={Boolean(errors.phone)}
    aria-describedby={errors.phone ? "phone-error" : undefined}
    value={formData.phone} onChange={handleChange} />
    <label htmlFor="phone" className="pointer-events-none absolute left-3 top-1/2
               -translate-y-1/2 text-gray-500
               transition-all duration-200
               peer-focus:top-2 peer-focus:translate-y-0
               peer-focus:text-xs
               peer-[:not(:placeholder-shown)]:top-2
               peer-[:not(:placeholder-shown)]:translate-y-0
               peer-[:not(:placeholder-shown)]:text-xs">Telefonnummer</label>
    </div>
    {errors.phone && (<p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">{errors.phone}</p>)}
    
    <div className="relative">
    <input
    id="subject"
    name="subject" type="text" placeholder=" "
    className="peer w-full rounded border border-gray-300 bg-white px-3 pb-2 pt-5 text-black focus:border-primary focus:outline-none"
    aria-invalid={Boolean(errors.subject)}
    aria-describedby={errors.subject ? "subject-error" : undefined}
    value={formData.subject} onChange={handleChange} />
    <label htmlFor="subject" className="pointer-events-none absolute left-3 top-1/2
               -translate-y-1/2 text-gray-500
               transition-all duration-200
               peer-focus:top-2 peer-focus:translate-y-0
               peer-focus:text-xs
               peer-[:not(:placeholder-shown)]:top-2
               peer-[:not(:placeholder-shown)]:translate-y-0
               peer-[:not(:placeholder-shown)]:text-xs">Ämne</label>
    </div>
    {errors.subject && (<p id="subject-error" className="mt-1 text-sm text-red-600" role="alert">{errors.subject}</p>)}
    
    <div className="relative">
    <textarea 
    id="message"
    name="message"
    placeholder=" "
    className="peer w-full rounded border border-gray-300 bg-white px-3 pb-2 pt-5 text-black focus:border-primary focus:outline-none"
    aria-invalid={Boolean(errors.message)}
    aria-describedby={errors.message ? "message-error" : undefined}
    value={formData.message} onChange={handleChange}></textarea>
    <label htmlFor="message"
    className="pointer-events-none absolute left-3 top-2 text-xs text-gray-500 transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs">Meddelande</label>
    </div>
    {errors.message && (<p id="message-error" className="mt-1 text-sm text-red-600" role="alert">{errors.message}</p>)}
    
    <button type="submit" className="bg-primary text-white p-2 rounded hover:bg-highlight">Skicka</button>
    {isSubmitted && <p role="status" className="mt-1 text-sm text-green-700">Meddelandet har skickats!</p>}
    </form>
  )
}

export default ContactForm