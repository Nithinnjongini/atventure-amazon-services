import { PageShell } from '../components/PageShell'
import { SectionIntro } from '../components/SectionIntro'
import { valuesContent } from '../data/siteContent'

export function ValuesPage() {
  return (
    <PageShell>
      <section className="page-hero">
        <SectionIntro
          eyebrow="Our Values"
          title="The operating principles behind the partnership."
          text="The source site captured these in five words. We preserved them and gave each one more room to set the tone of the brand."
          align="center"
        />
      </section>

      <section className="values-grid">
        {valuesContent.map((value) => (
          <article key={value.title} className="value-card">
            <p className="eyebrow">{value.title}</p>
            <p>{value.detail}</p>
          </article>
        ))}
      </section>
    </PageShell>
  )
}
