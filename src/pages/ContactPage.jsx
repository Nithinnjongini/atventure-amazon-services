import { ContactForm } from '../components/ContactForm'
import { PageShell } from '../components/PageShell'
import { SectionIntro } from '../components/SectionIntro'
import { contactContent, contactDetails } from '../data/siteContent'

export function ContactPage() {
  return (
    <PageShell>
      <section className="hero hero--service">
        <div className="hero__content">
          <p className="eyebrow">Contact Us</p>
          <h1>{contactContent.officeHeading}</h1>
          <p className="hero__copy">{contactContent.officeText}</p>
          <div className="contact-detail-list">
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            <a href={contactDetails.directionsUrl} target="_blank" rel="noreferrer">
              {contactDetails.address}
            </a>
          </div>
        </div>
        <div className="hero__media hero__media--stacked">
          <img src="/assets/contact/showroom.jpg" alt="Atventure showroom" />
        </div>
      </section>

      <section className="content-block content-block--split">
        <SectionIntro
          eyebrow="Start the conversation"
          title="Use the form below to draft an email and kick off the right discussion."
          text="The original site used a contact form directly on the page. This version keeps the same intent but uses a Vercel-friendly mailto workflow so the site stays deployable without a backend."
        />
        <ContactForm />
      </section>
    </PageShell>
  )
}
