import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export function TestimonialCarousel({ items }) {
  const [index, setIndex] = useState(0)
  const MotionArticle = motion.article

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length)
    }, 5500)

    return () => window.clearInterval(timer)
  }, [items.length])

  const activeItem = items[index]

  return (
    <section className="testimonial-shell">
      <div className="testimonial-controls">
        <button type="button" onClick={() => setIndex((index - 1 + items.length) % items.length)}>
          Back
        </button>
        <div className="testimonial-dots" aria-label="Testimonials">
          {items.map((item, itemIndex) => (
            <button
              key={item.author}
              type="button"
              className={itemIndex === index ? 'is-active' : ''}
              onClick={() => setIndex(itemIndex)}
              aria-label={`Show testimonial from ${item.author}`}
            />
          ))}
        </div>
        <button type="button" onClick={() => setIndex((index + 1) % items.length)}>
          Next
        </button>
      </div>

      <AnimatePresence mode="wait">
        <MotionArticle
          key={activeItem.author}
          className="testimonial-card"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.35 }}
        >
          <p className="testimonial-quote">“{activeItem.quote}”</p>
          <div>
            <p className="testimonial-author">{activeItem.author}</p>
            <p className="testimonial-role">{activeItem.role}</p>
          </div>
        </MotionArticle>
      </AnimatePresence>
    </section>
  )
}
