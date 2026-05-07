import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { RevealText, RevealFade } from '../components/RevealText'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.email || !form.message) return
    setSent(true)
  }

  const Field = ({ id, label, type = 'text', multiline = false }) => {
    const Tag = multiline ? 'textarea' : 'input'
    return (
      <div className="relative border-b border-white/10 pb-4 group">
        <label
          htmlFor={id}
          className={`block font-mono text-[9px] tracking-widest mb-3 transition-colors duration-300 ${
            focused === id ? 'text-bone/60' : 'text-ash/30'
          }`}
        >
          {label}
        </label>
        <Tag
          id={id}
          type={type}
          rows={multiline ? 4 : undefined}
          value={form[id]}
          onChange={e => setForm({ ...form, [id]: e.target.value })}
          onFocus={() => setFocused(id)}
          onBlur={() => setFocused(null)}
          className="w-full bg-transparent text-bone font-light text-sm outline-none resize-none placeholder:text-ash/20"
          placeholder={multiline ? 'Say something...' : ''}
        />
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: focused === id ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-bone/40 origin-left"
        />
      </div>
    )
  }

  return (
    <PageWrapper>
      <div className="min-h-screen pt-32 pb-40 px-8 md:px-16 flex flex-col">
        <div className="max-w-5xl mx-auto w-full flex-1 grid md:grid-cols-2 gap-20 lg:gap-40 items-start">
          {/* Left */}
          <div>
            <RevealFade>
              <p className="font-mono text-[10px] tracking-ultra text-ash/40 mb-10">— REACH OUT</p>
            </RevealFade>
            <RevealText>
              <h1 className="text-display text-bone font-bold leading-none mb-4"
                style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
                Contact
              </h1>
            </RevealText>
            <RevealText delay={0.1}>
              <h1 className="text-display text-bone/20 italic font-normal leading-none mb-16"
                style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
                the club.
              </h1>
            </RevealText>

            <RevealFade delay={0.2}>
              <div className="space-y-6">
                <p className="text-ash/50 font-light text-sm leading-relaxed">
                  For inquiries, wholesale, and anything else — we read everything. We just don't respond to everything.
                </p>
                <div className="space-y-4 pt-4">
                  <a href="mailto:hello@164club.com" className="block font-mono text-[10px] tracking-widest text-bone/40 hover:text-bone transition-colors duration-300">
                    hello@164club.com
                  </a>
                  <p className="font-mono text-[9px] tracking-widest text-ash/20">
                    INSTAGRAM — @164CLUB
                  </p>
                </div>
              </div>
            </RevealFade>
          </div>

          {/* Right — form */}
          <div className="pt-4 md:pt-20">
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-10"
                >
                  <RevealFade delay={0.1}>
                    <Field id="name" label="YOUR NAME" />
                  </RevealFade>
                  <RevealFade delay={0.2}>
                    <Field id="email" label="EMAIL ADDRESS" type="email" />
                  </RevealFade>
                  <RevealFade delay={0.3}>
                    <Field id="message" label="MESSAGE" multiline />
                  </RevealFade>
                  <RevealFade delay={0.4}>
                    <button
                      type="submit"
                      className="w-full py-4 font-mono text-xs tracking-ultra border border-bone/20 text-bone/60 hover:bg-bone hover:text-ink transition-all duration-500 mt-4"
                    >
                      SEND MESSAGE
                    </button>
                  </RevealFade>
                </motion.form>
              ) : (
                <motion.div
                  key="thanks"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="py-20 text-center"
                >
                  <p className="text-display text-bone text-4xl italic mb-6">Received.</p>
                  <p className="font-mono text-[9px] tracking-widest text-ash/30">
                    WE'LL BE IN TOUCH
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Footer line */}
        <div className="max-w-5xl mx-auto w-full mt-40 pt-8 border-t border-white/5 flex justify-between items-center">
          <RevealFade>
            <p className="font-mono text-[9px] tracking-widest text-ash/20">1:64 CLUB</p>
          </RevealFade>
          <RevealFade>
            <p className="font-mono text-[9px] tracking-widest text-ash/20">© 2024</p>
          </RevealFade>
        </div>
      </div>
    </PageWrapper>
  )
}
