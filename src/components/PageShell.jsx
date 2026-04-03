import { motion } from 'framer-motion'

export function PageShell({ children }) {
  const MotionMain = motion.main

  return (
    <MotionMain
      className="page-shell"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {children}
    </MotionMain>
  )
}
