import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { RevealText, RevealFade } from '../components/RevealText'
import hoodiesMinimal from '../assets/hoodies-minimal.png'
import hoodieConcepts from '../assets/hoodies-concepts.png'

const chapters = [
  {
    number: '01',
    heading: 'The Scale',
    body: `1:64. That's the ratio. One unit to sixty-four. In that compression, a team of designers decides what matters and what doesn't. Every detail earns its place. Nothing survives by accident.\n\nWe built this brand around that discipline. Around the idea that reduction isn't loss — it's clarity.`,
  },
  {
    number: '02',
    heading: 'The Collector Mind',
    body: `Collectors understand something most people don't: that value lives in precision. In noticing. In the small, almost invisible things that separate craft from commodity.\n\nThe 1:64 Club is for that mind. For the person who sees a display case and reads a story. Who picks up a piece and feels the weight of intention behind it.`,
  },
  {
    number: '03',
    heading: 'The Object',
    body: `The hoodie is not merch. It's not branding.\n\nIt's a signal — quiet enough that most people won't read it. Loud enough that those who do will understand immediately.\n\nLeft chest print. Clean. One line. One identity. No explanation needed.`,
  },
  {
    number: '04',
    heading: 'The Standard',
    body: `We don't do drops for hype. We don't chase volume.\n\nWe move when it's right. When the material is right. When every detail has been looked at until there's nothing left to remove.\n\nThat's the 1:64 standard. That's the only thing we know how to do.`,
  },
]

export default function Story() {
  const heroRef = useRef(null)
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const heroY = useTransform(heroScroll, [0, 1], ['0%', '40%'])
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0])

  return (
    <PageWrapper>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[70vh] flex items-end pb-20 px-8 md:px-16 overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
          <img
            src={hoodieConcepts}
            alt=""
            className="w-full h-full object-cover opacity-20"
            style={{ objectPosition: 'center 10%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/50 to-ink" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-4xl">
          <RevealFade>
            <p className="font-mono text-[10px] tracking-ultra text-ash/40 mb-8">— THE STORY</p>
          </RevealFade>
          <div style={{ overflow: 'hidden' }}>
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-display text-bone font-bold leading-none"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
            >
              The Manifesto
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* Opening statement */}
      <section className="py-32 px-8 md:px-16 max-w-3xl mx-auto text-center">
        <RevealText>
          <p className="text-display text-bone/80 italic leading-tight"
            style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)' }}>
            "We believe the most powerful things are the ones that don't need to prove themselves."
          </p>
        </RevealText>
        <RevealFade delay={0.2}>
          <div className="section-divider mt-16" />
        </RevealFade>
      </section>

      {/* Chapters */}
      <section className="pb-40 px-8 md:px-16 max-w-5xl mx-auto space-y-40">
        {chapters.map((ch, i) => (
          <div key={ch.number} className={`grid md:grid-cols-12 gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
            {/* Number */}
            <div className="md:col-span-3 flex items-start">
              <RevealFade>
                <span className="font-mono text-[10px] tracking-ultra text-ash/20 mt-2">{ch.number}</span>
              </RevealFade>
            </div>

            {/* Content */}
            <div className="md:col-span-9">
              <RevealFade>
                <div className="w-8 h-px bg-white/10 mb-10" />
              </RevealFade>
              <RevealText>
                <h2 className="text-display text-bone font-bold mb-10"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
                  {ch.heading}
                </h2>
              </RevealText>
              {ch.body.split('\n\n').map((para, j) => (
                <RevealFade key={j} delay={0.1 + j * 0.1}>
                  <p className="text-ash/60 font-light leading-relaxed text-sm mb-6">
                    {para}
                  </p>
                </RevealFade>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Closing */}
      <section className="py-40 px-8 border-t border-white/5">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div>
            <RevealText>
              <h2 className="text-display text-bone font-bold leading-none"
                style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
                Less is
              </h2>
            </RevealText>
            <RevealText delay={0.1}>
              <h2 className="text-display text-bone/20 italic font-normal leading-none"
                style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
                stronger.
              </h2>
            </RevealText>
          </div>
          <div>
            <RevealFade delay={0.2}>
              <p className="text-ash/50 font-light text-sm leading-relaxed mb-8">
                Everything we make starts with a question: what can we remove? The answer is always more than we expect.
              </p>
            </RevealFade>
            <RevealFade delay={0.3}>
              <p className="font-mono text-[9px] tracking-ultra text-ash/20">
                1:64 CLUB — EST. 2024
              </p>
            </RevealFade>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
