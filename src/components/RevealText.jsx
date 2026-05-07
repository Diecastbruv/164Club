import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

export function RevealText({ children, className = '', delay = 0, as = 'div' }) {
  const { ref, inView } = useReveal()
  const Tag = motion[as] || motion.div

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <Tag
        initial={{ y: '100%', opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
      >
        {children}
      </Tag>
    </div>
  )
}

export function RevealFade({ children, className = '', delay = 0 }) {
  const { ref, inView } = useReveal()
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
