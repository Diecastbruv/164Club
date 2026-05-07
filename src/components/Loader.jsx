import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Loader({ onDone }) {
  const [count, setCount] = useState(0)
  const [exit, setExit] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => { setExit(true); setTimeout(onDone, 900) }, 400)
          return 100
        }
        return Math.min(prev + Math.floor(Math.random() * 10) + 2, 100)
      })
    }, 55)
    return () => clearInterval(interval)
  }, [onDone])

  return (
    <AnimatePresence>
      {!exit && (
        <motion.div
          key="loader"
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] bg-[#080808] flex flex-col items-center justify-center scanlines"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-center mb-12"
          >
            <p className="font-jp text-bone leading-none" style={{ fontSize: '5rem' }}>
              1:64
            </p>
            <p className="font-mono text-[9px] tracking-ultra text-red-bright mt-2">CLUB</p>
          </motion.div>

          {/* Japanese loading text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="font-jp-light text-[11px] text-ash/30 tracking-widest mb-6"
          >
            ロード中...
          </motion.p>

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-end gap-1 mb-4"
          >
            <span className="font-mono text-lg text-bone/40 tabular-nums w-14 text-right"
              style={{ color: count > 80 ? 'var(--red-bright)' : undefined }}>
              {Math.min(count, 100)}
            </span>
            <span className="font-mono text-[9px] text-ash/20 mb-1">%</span>
          </motion.div>

          {/* Progress bar */}
          <div className="w-48 h-px bg-white/5 relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-red"
              style={{ width: `${Math.min(count, 100)}%`, transition: 'width 0.1s linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
