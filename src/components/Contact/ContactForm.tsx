function ContactForm() {
  return (
    <form className="flex flex-col gap-2 max-w-md bg-white p-4 rounded shadow-md w-850">
    <input type="text" placeholder="Namn" className="w-full mb-2 p-2 rounded text-black" />
    <input type="email" placeholder="E-post" className="w-full mb-2 p-2 rounded text-black" />
    <input type="tel" placeholder="Telefonnummer" className="w-full mb-2 p-2 rounded text-black" />
    <input type="text" placeholder="Ämne" className="w-full mb-2 p-2 rounded text-black" />
    <textarea placeholder="Meddelande" className="w-full mb-2 p-2 rounded text-black"></textarea>
    <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
      Skicka
    </button>
    </form>
  )
}

export default ContactForm