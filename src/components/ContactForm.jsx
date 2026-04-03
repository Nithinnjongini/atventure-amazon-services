import { useState } from 'react'
import { contactDetails } from '../data/siteContent'

const defaultState = {
  name: '',
  email: '',
  focus: 'Amazon marketplace growth',
  message: '',
}

export function ContactForm() {
  const [form, setForm] = useState(defaultState)
  const [status, setStatus] = useState('')

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const subject = encodeURIComponent(`Atventure Amazon Services inquiry: ${form.focus}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nFocus: ${form.focus}\n\nMessage:\n${form.message}`,
    )

    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`
    setStatus('Your email app should open with a pre-filled message.')
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" value={form.name} onChange={updateField} required />
      </label>
      <label>
        Email
        <input name="email" type="email" value={form.email} onChange={updateField} required />
      </label>
      <label>
        Primary need
        <select name="focus" value={form.focus} onChange={updateField}>
          <option>Amazon marketplace growth</option>
          <option>Advertising and retail media</option>
          <option>Catalog and detail page optimization</option>
          <option>Retail foundations and omnichannel planning</option>
        </select>
      </label>
      <label>
        Message
        <textarea
          name="message"
          value={form.message}
          onChange={updateField}
          rows="5"
          placeholder="Tell us about your brand, category, and growth goals."
          required
        />
      </label>
      <button className="button button--solid" type="submit">
        Build My Draft Email
      </button>
      {status ? <p className="form-status">{status}</p> : null}
    </form>
  )
}
