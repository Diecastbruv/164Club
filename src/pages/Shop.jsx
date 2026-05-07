import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import { RevealText, RevealFade } from '../components/RevealText'
import hoodiesMinimal from '../assets/hoodies-minimal.png'
import hoodieConcepts from '../assets/hoodies-concepts.png'

const product = {
  name: '1:64 Club Hoodie',
  price: 148,
  description: 'The 1:64 Club Hoodie is made for collectors who understand the culture. Clean left chest print. No noise. No overdesign. Just identity.',
  details: [
    'Premium heavyweight cotton',
    'Soft brushed interior',
    'Relaxed fit',
    'Left chest print (1:64 CLUB)',
    'Drop shoulder construction',
    'Kangaroo pocket',
  ],
  sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  images: [
    { src: hoodiesMinimal, pos: 'center 15%' },
    { src: hoodieConcepts, pos: 'center 15%' },
    { src: hoodiesMinimal, pos: 'right center' },
  ]
}

export default function Shop() {
  const [selected, setSelected] = useState(null)
  const [activeImg, setActiveImg] = useState(0)
  const [added, setAdded] = useState(false)
  const [detailOpen, setDetailOpen] = useState(false)

  const handleAdd = () => {
    if (!selected) return
    setAdded(true)
    setTimeout(() => setAdded(false), 2500)
  }

  return (
    <PageWrapper>
      <div className="min-h-screen pt-24 pb-40 px-8 md:px-16">
        {/* Header */}
        <div className="max-w-6xl mx-auto mb-20">
          <RevealFade>
            <p className="font-mono text-[10px] tracking-ultra text-ash/40 mb-4">1:64 CLUB — SHOP</p>
          </RevealFade>
          <RevealText>
            <h1 className="text-display text-bone font-bold" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              The Collection
            </h1>
          </RevealText>
          <RevealText delay={0.1}>
            <p className="text-display text-bone/20 italic" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              One piece. No noise.
            </p>
          </RevealText>
        </div>

        {/* Product */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Images */}
          <div className="space-y-3">
            <motion.div
              key={activeImg}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="aspect-[4/5] overflow-hidden bg-smoke"
              data-hover
            >
              <img
                src={product.images[activeImg].src}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                style={{ objectPosition: product.images[activeImg].pos }}
              />
            </motion.div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`aspect-[4/5] overflow-hidden bg-smoke transition-all duration-300 ${
                    activeImg === i ? 'ring-1 ring-bone/40' : 'opacity-40 hover:opacity-70'
                  }`}
                >
                  <img src={img.src} alt="" className="w-full h-full object-cover" style={{ objectPosition: img.pos }} />
                </button>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="md:pt-8 space-y-10">
            <div>
              <RevealFade>
                <p className="font-mono text-[9px] tracking-widest text-ash/40 mb-4">001 — DROP ONE</p>
              </RevealFade>
              <RevealText>
                <h2 className="text-bone text-3xl font-light mb-2">{product.name}</h2>
              </RevealText>
              <RevealFade delay={0.1}>
                <p className="font-mono text-bone/60 text-sm tracking-wider">${product.price} USD</p>
              </RevealFade>
            </div>

            <RevealFade delay={0.15}>
              <p className="text-ash text-sm font-light leading-relaxed border-l border-white/10 pl-4">
                {product.description}
              </p>
            </RevealFade>

            {/* Size selector */}
            <RevealFade delay={0.2}>
              <div>
                <p className="font-mono text-[9px] tracking-widest text-ash/40 mb-4">SELECT SIZE</p>
                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelected(size)}
                      className={`py-3 font-mono text-xs tracking-wider transition-all duration-300 border ${
                        selected === size
                          ? 'bg-bone text-ink border-bone'
                          : 'bg-transparent text-ash/60 border-white/10 hover:border-white/30 hover:text-bone'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </RevealFade>

            {/* Add to cart */}
            <RevealFade delay={0.25}>
              <button
                onClick={handleAdd}
                disabled={!selected}
                className={`w-full py-4 font-mono text-xs tracking-ultra transition-all duration-500 relative overflow-hidden ${
                  !selected
                    ? 'border border-white/10 text-ash/30 cursor-not-allowed'
                    : added
                    ? 'bg-bone text-ink'
                    : 'border border-bone/30 text-bone hover:bg-bone hover:text-ink'
                }`}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={added ? 'added' : 'add'}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {added ? 'ADDED TO CART' : selected ? 'ADD TO CART' : 'SELECT A SIZE'}
                  </motion.span>
                </AnimatePresence>
              </button>
            </RevealFade>

            {/* Details accordion */}
            <RevealFade delay={0.3}>
              <div>
                <button
                  onClick={() => setDetailOpen(!detailOpen)}
                  className="w-full flex justify-between items-center py-4 border-t border-white/5 text-left"
                >
                  <span className="font-mono text-[9px] tracking-widest text-ash/50">PRODUCT DETAILS</span>
                  <motion.span
                    animate={{ rotate: detailOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-ash/40 text-lg font-light"
                  >+</motion.span>
                </button>
                <AnimatePresence>
                  {detailOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden space-y-2 pb-4"
                    >
                      {product.details.map(d => (
                        <li key={d} className="text-ash/50 text-sm font-light flex items-start gap-3">
                          <span className="text-ash/20 mt-1">—</span>
                          {d}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
                <div className="border-t border-white/5" />
              </div>
            </RevealFade>

            <RevealFade delay={0.35}>
              <p className="font-mono text-[9px] tracking-widest text-ash/20 text-center">
                LIMITED QUANTITY — SHIPS IN 5–7 DAYS
              </p>
            </RevealFade>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}
