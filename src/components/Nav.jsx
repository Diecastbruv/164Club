import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMenuOpen(false), [location])

  const links = [
    { to: '/shop', label: 'SHOP', jp: 'ショップ' },
    { to: '/story', label: 'STORY', jp: 'ストーリー' },
    { to: '/contact', label: 'CONTACT', jp: 'コンタクト' },
  ]

  return (
    <>
      {/* Announcement bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-red py-1.5 overflow-hidden">
        <div className="marquee-track">
          {[...Array(6)].map((_, i) => (
            <span key={i} className="font-mono text-[9px] tracking-widest text-bone mx-8 whitespace-nowrap">
              FREE UK SHIPPING ON ORDERS OVER £75 · 1:64 クラブへようこそ · COLLECTORS DON'T SLEEP · コレクターズ ドントスリープ
            </span>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className={`fixed top-7 left-0 right-0 z-40 px-8 py-4 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'bg-[#080808]/90 backdrop-blur-md border-b border-white/5' : ''
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-mono text-sm tracking-widest text-bone font-bold">1:64</span>
          <span className="font-mono text-[8px] tracking-ultra text-red-bright">CLUB</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(({ to, label, jp }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link group flex flex-col items-center transition-colors duration-300 ${
                location.pathname === to ? 'text-red-bright' : 'text-ash hover:text-bone'
              }`}
            >
              <span className="font-mono text-[10px] tracking-widest">{label}</span>
              <span className="font-jp-light text-[8px] text-ash/30 group-hover:text-red-bright/50 transition-colors duration-300">{jp}</span>
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-6">
          <span className="font-mono text-[9px] tracking-widest text-ash/30">JPN | EN</span>
          <Link to="/shop" className="red-tag hover:bg-red-bright transition-colors duration-300">
            CART 0
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }} className="block w-5 h-px bg-bone origin-center" />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-5 h-px bg-bone" />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }} className="block w-5 h-px bg-bone origin-center" />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-[#080808] flex flex-col items-center justify-center gap-12"
          >
            {links.map(({ to, label, jp }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <Link to={to} className="block font-jp text-bone/80 hover:text-red-bright transition-colors duration-300" style={{ fontSize: '2.5rem' }}>
                  {jp}
                </Link>
                <p className="font-mono text-[9px] tracking-ultra text-ash/30 mt-1">{label}</p>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <span className="red-tag">1:64 CLUB</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
