export function SectionIntro({ eyebrow, title, text, align = 'left' }) {
  return (
    <div className={`section-intro section-intro--${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p className="section-copy">{text}</p> : null}
    </div>
  )
}
