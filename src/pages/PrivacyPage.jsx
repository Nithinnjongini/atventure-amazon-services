import { PageShell } from '../components/PageShell'
import { SectionIntro } from '../components/SectionIntro'
import { privacySections } from '../data/siteContent'

export function PrivacyPage() {
  return (
    <PageShell>
      <section className="page-hero">
        <SectionIntro
          eyebrow="Privacy Policy"
          title="Effective as of July 25, 2017"
          text="This page preserves the structure and substance of the original Atventure Retail Group privacy content in a cleaner reading layout."
          align="center"
        />
      </section>

      <section className="privacy-stack">
        {privacySections.map((section) => (
          <article key={section.title} className="privacy-card">
            <h2>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets ? (
              <ul className="privacy-list">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </section>
    </PageShell>
  )
}
