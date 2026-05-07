import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import { RevealText, RevealFade } from '../components/RevealText'
import hoodiesMinimal from '../assets/hoodies-minimal.png'
import hoodieConcepts from '../assets/hoodies-concepts.png'

/* ─────────────────────────────────────────
   HERO — cinematic dark, kanji dominate
───────────────────────────────────────── */
function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section ref={ref} className="relative h-screen flex flex-col justify-end overflow-hidden scanlines">
      {/* Background — hoodie image */}
      <motion.div style={{ y }} className="absolute inset-0 z-0 scale-110">
        <img
          src={hoodiesMinimal}
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 10%', opacity: 0.55 }}
        />
        {/* Dark vignette */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at center, rgba(8,8,8,0.2) 0%, rgba(8,8,8,0.85) 100%)'
        }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/60" />
      </motion.div>

      {/* Vertical side text — right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10"
      >
        <p className="vertical-text font-jp text-[11px] tracking-widest text-bone/20">
          コレクターズ ドントスリープ
        </p>
      </motion.div>

      {/* Red circle accent — top right */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-32 right-16 z-10 hidden md:block"
      >
        <div className="w-16 h-16 rounded-full border border-red-bright/40 red-glow-box flex items-center justify-center">
          <span className="font-mono text-[8px] tracking-widest text-red-bright/60">1:64</span>
        </div>
      </motion.div>

      {/* Main content — bottom left */}
      <motion.div style={{ opacity }} className="relative z-10 px-8 md:px-16 pb-20 md:pb-28">
        {/* Sub label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-red-bright font-mono text-[10px] tracking-ultra mb-6 red-glow-sm"
        >
          1:64クラブ
        </motion.p>

        {/* Giant kanji headline */}
        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-jp text-bone leading-none red-glow"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 9.5rem)', lineHeight: 0.95 }}
          >
            コレクターズ
          </motion.h1>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 0.62, ease: [0.16, 1, 0.3, 1] }}
            className="font-jp text-bone leading-none"
            style={{ fontSize: 'clamp(3.5rem, 11vw, 9.5rem)', lineHeight: 0.95 }}
          >
            ドントスリープ
          </motion.h1>
        </div>

        {/* English sub */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="mt-6 mb-10"
        >
          <p className="font-mono text-xs tracking-ultra text-red-bright">COLLECTORS DON'T SLEEP</p>
          <p className="font-jp-light text-xs text-bone/40 mt-2 tracking-widest">
            すべてのコレクターへ。これはただの服じゃない。これは、情熱の証。
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <Link
            to="/shop"
            className="inline-flex items-center gap-4 border border-bone/20 px-8 py-4 font-mono text-xs tracking-ultra text-bone hover:border-red-bright hover:text-red-bright transition-all duration-500 group"
          >
            SHOP THE DROP
            <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="font-mono text-[9px] tracking-widest text-ash/30">スクロール</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-red/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}

/* ─────────────────────────────────────────
   MARQUEE TICKER — red band
───────────────────────────────────────── */
function Ticker() {
  const items = ['コレクターズドントスリープ', 'COLLECTORS DON\'T SLEEP', '1:64 CLUB', 'ドロップ01', 'DROP ONE', 'コレクターズドントスリープ', 'COLLECTORS DON\'T SLEEP', '1:64 CLUB', 'ドロップ01', 'DROP ONE']
  return (
    <div className="bg-red py-3 overflow-hidden relative z-20">
      <div className="marquee-track">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="font-mono text-[10px] tracking-widest text-bone mx-6 whitespace-nowrap">{t}</span>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   DROP 01 GRID — product grid section
───────────────────────────────────────── */
function DropSection() {
  const products = [
    { name: '1:64 CLUB HOODIE', jp: '1:64クラブ フーディー', price: '£49', img: hoodiesMinimal, pos: 'center 12%' },
    { name: 'COLLECTORS DON\'T SLEEP', jp: 'コレクターズ ドントスリープ', price: '£49', img: hoodieConcepts, pos: 'center 12%' },
    { name: '1:64 CLUB HOODIE', jp: 'バックプリント', price: '£49', img: hoodiesMinimal, pos: '60% 12%' },
  ]

  return (
    <section className="py-24 px-8 md:px-16 max-w-7xl mx-auto">
      {/* Section header */}
      <div className="flex items-end justify-between mb-16">
        <div>
          <RevealFade>
            <p className="text-red-bright font-mono text-[10px] tracking-ultra mb-2">ドロップ01</p>
          </RevealFade>
          <RevealText>
            <h2 className="font-jp text-bone leading-none" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}>
              DROP 01
            </h2>
          </RevealText>
          <RevealFade delay={0.1}>
            <p className="font-jp-light text-ash text-sm mt-2 tracking-widest">ミニマル。意味は大きい。</p>
          </RevealFade>
        </div>
        <RevealFade delay={0.2}>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center gap-3 font-mono text-[10px] tracking-ultra text-bone/40 hover:text-red-bright transition-colors duration-300 group border border-white/10 px-6 py-3 hover:border-red-bright/50"
          >
            VIEW ALL <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </RevealFade>
      </div>

      {/* Product grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {products.map((p, i) => (
          <RevealFade key={i} delay={i * 0.1}>
            <Link to="/shop" className="group block relative overflow-hidden" data-hover>
              {/* Image */}
              <div className="aspect-[3/4] bg-smoke overflow-hidden relative">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: p.pos, opacity: 0.85 }}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-red/0 group-hover:bg-red/10 transition-colors duration-500" />
                {/* Number tag */}
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[9px] tracking-widest text-bone/30">0{i + 1}</span>
                </div>
                {/* Red tag */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="red-tag">1:64 CLUB</span>
                </div>
              </div>
              {/* Info */}
              <div className="pt-4 pb-6">
                <p className="font-jp-light text-[10px] text-ash/40 tracking-widest mb-1">{p.jp}</p>
                <div className="flex justify-between items-end">
                  <p className="font-mono text-xs tracking-widest text-bone/80">{p.name}</p>
                  <p className="font-mono text-xs text-red-bright">{p.price}</p>
                </div>
              </div>
            </Link>
          </RevealFade>
        ))}
      </div>

      {/* Red accent — rightmost tall block */}
      <RevealFade delay={0.3}>
        <div className="hidden md:block" />
      </RevealFade>
    </section>
  )
}

/* ─────────────────────────────────────────
   PHILOSOPHY — split layout, minimal
───────────────────────────────────────── */
function Philosophy() {
  return (
    <section className="py-32 px-8 md:px-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        {/* Left — kanji stacked */}
        <div className="md:col-span-5">
          <RevealFade>
            <p className="text-red-bright font-mono text-[10px] tracking-ultra mb-10">— 哲学 / PHILOSOPHY</p>
          </RevealFade>
          <div className="space-y-0 leading-none">
            {['ミニマル', 'バイ', 'デザイン。'].map((word, i) => (
              <RevealText key={i} delay={i * 0.1}>
                <p className="font-jp text-bone" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', lineHeight: 1.0 }}>
                  {word}
                </p>
              </RevealText>
            ))}
          </div>
          <RevealText delay={0.35}>
            <p className="font-jp text-bone/15 mt-2" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1 }}>
              意味は大きい。
            </p>
          </RevealText>
        </div>

        {/* Right — text */}
        <div className="md:col-span-7 md:col-start-7 space-y-8">
          <RevealFade delay={0.2}>
            <p className="text-ash font-light leading-relaxed">
              Not every brand deserves your attention. We didn't build this for everyone. We built it for the collector who notices what others miss — in a display case, in a fabric, in a line of type.
            </p>
          </RevealFade>
          <RevealFade delay={0.3}>
            <p className="text-ash/50 font-light leading-relaxed text-sm">
              1:64 is a scale of compression. Everything that matters, nothing that doesn't. That discipline is the philosophy we carry into every piece we make.
            </p>
          </RevealFade>
          <RevealFade delay={0.4}>
            <div className="flex items-center gap-6 pt-4">
              <div className="w-8 h-px bg-red/50" />
              <p className="font-mono text-[9px] tracking-ultra text-red-bright/60">抑制は力だ — RESTRAINT IS POWER</p>
            </div>
          </RevealFade>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   FULL BLEED — product cinematic
───────────────────────────────────────── */
function CinematicProduct() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className="relative overflow-hidden h-[85vh] scanlines">
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <img
          src={hoodieConcepts}
          alt="1:64 Club"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 15%', opacity: 0.7 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/80 via-transparent to-[#080808]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/40 to-[#080808]/80" />
      </motion.div>

      {/* Left overlay text */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 z-10">
        <RevealFade>
          <p className="font-mono text-[9px] tracking-ultra text-red-bright mb-6">— ザ・オブジェクト / THE OBJECT</p>
        </RevealFade>
        <RevealText>
          <h2 className="font-jp text-bone leading-none mb-2" style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}>
            1:64
          </h2>
        </RevealText>
        <RevealText delay={0.1}>
          <h2 className="font-jp text-bone/20 leading-none" style={{ fontSize: 'clamp(3rem, 9vw, 8rem)' }}>
            クラブ
          </h2>
        </RevealText>

        <RevealFade delay={0.25}>
          <div className="mt-10 space-y-2">
            {['プレミアムヘビーウェイトコットン', 'ソフトブラッシュインテリア', 'レラックスフィット', 'レフトチェストプリント'].map((t, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-red" />
                <span className="font-jp-light text-[11px] text-ash/60 tracking-widest">{t}</span>
              </div>
            ))}
          </div>
        </RevealFade>
      </div>

      {/* Right side — price/number */}
      <div className="absolute right-8 md:right-16 bottom-16 text-right z-10">
        <RevealFade delay={0.3}>
          <p className="font-mono text-[9px] tracking-widest text-bone/20 leading-loose">
            DROP<br />001<br />—<br />£49
          </p>
        </RevealFade>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   MANIFESTO — bold quote
───────────────────────────────────────── */
function Manifesto() {
  return (
    <section className="py-40 px-8 md:px-16 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        {/* Left — number */}
        <div className="hidden md:flex items-center justify-center">
          <RevealFade>
            <div className="relative">
              <p className="font-jp text-bone/5 select-none" style={{ fontSize: '20rem', lineHeight: 1 }}>
                64
              </p>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="border border-red/30 red-glow-box p-8 text-center">
                  <p className="font-mono text-[9px] tracking-ultra text-red-bright mb-2">スケール</p>
                  <p className="font-mono text-bone text-2xl">1:64</p>
                </div>
              </div>
            </div>
          </RevealFade>
        </div>

        {/* Right — quote */}
        <div>
          <RevealFade>
            <p className="text-red-bright font-mono text-[10px] tracking-ultra mb-10">— アイデンティティ / IDENTITY</p>
          </RevealFade>
          <div className="overflow-hidden">
            <motion.p
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-display text-bone font-bold leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
            >
              "These aren't for everyone.
            </motion.p>
          </div>
          <div className="overflow-hidden mt-1">
            <motion.p
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="text-display text-bone/25 italic font-normal leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)' }}
            >
              Only those who get it."
            </motion.p>
          </div>
          <RevealFade delay={0.3}>
            <p className="font-jp-light text-ash/40 text-sm mt-8 tracking-widest">
              これはすべての人のためではない。理解する者だけのために。
            </p>
          </RevealFade>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   TRUST BAR — bottom features
───────────────────────────────────────── */
function TrustBar() {
  const items = [
    { en: 'WORLDWIDE SHIPPING', jp: '世界中に発送', icon: '🌏' },
    { en: 'SECURE PAYMENTS', jp: '安全な支払い', icon: '🔒' },
    { en: '14 DAY RETURNS', jp: '14日間返品可能', icon: '↩' },
    { en: 'JAPANESE AESTHETIC', jp: '日本の美学', icon: '🇯🇵' },
  ]
  return (
    <div className="border-t border-white/5 py-10 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <RevealFade key={i} delay={i * 0.07}>
            <div className="flex items-start gap-4">
              <span className="text-xl mt-0.5">{item.icon}</span>
              <div>
                <p className="font-mono text-[9px] tracking-widest text-bone/60 mb-1">{item.en}</p>
                <p className="font-jp-light text-[10px] text-ash/40 tracking-wider">{item.jp}</p>
              </div>
            </div>
          </RevealFade>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   CTA
───────────────────────────────────────── */
function CTA() {
  return (
    <section className="py-40 px-8 text-center border-t border-white/5">
      <RevealFade>
        <p className="text-red-bright font-mono text-[10px] tracking-ultra mb-12">— ワンドロップ / ONE DROP</p>
      </RevealFade>
      <div style={{ overflow: 'hidden' }}>
        <motion.h2
          initial={{ y: '100%' }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-jp text-bone leading-none"
          style={{ fontSize: 'clamp(4rem, 14vw, 12rem)' }}
        >
          クラブへ
        </motion.h2>
      </div>
      <div style={{ overflow: 'hidden' }}>
        <motion.h2
          initial={{ y: '100%' }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-jp text-bone/15 leading-none mb-16"
          style={{ fontSize: 'clamp(4rem, 14vw, 12rem)' }}
        >
          ようこそ
        </motion.h2>
      </div>
      <RevealFade delay={0.3}>
        <p className="font-mono text-xs text-ash/40 mb-10 tracking-widest">ENTER THE CLUB</p>
      </RevealFade>
      <RevealFade delay={0.4}>
        <Link
          to="/shop"
          className="inline-flex items-center gap-4 bg-red hover:bg-red-bright text-bone font-mono text-xs tracking-ultra px-12 py-5 transition-all duration-500 group"
        >
          SHOP NOW
          <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
        </Link>
      </RevealFade>
      <RevealFade delay={0.5}>
        <p className="font-jp-light text-[10px] text-ash/20 mt-8 tracking-widest">
          限定数量 — LIMITED QUANTITY
        </p>
      </RevealFade>
    </section>
  )
}

export default function Home() {
  return (
    <PageWrapper>
      <Hero />
      <Ticker />
      <DropSection />
      <Philosophy />
      <CinematicProduct />
      <Manifesto />
      <TrustBar />
      <CTA />
    </PageWrapper>
  )
}
