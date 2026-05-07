import { Link } from 'react-router-dom'
import { RevealFade } from './RevealText'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-smoke">
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16 grid grid-cols-2 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <RevealFade>
            <div className="mb-4">
              <p className="font-mono text-sm tracking-widest text-bone font-bold">1:64</p>
              <p className="font-mono text-[8px] tracking-ultra text-red-bright">CLUB</p>
            </div>
            <p className="font-jp-light text-[11px] text-ash/40 tracking-widest leading-relaxed">
              コレクターズ<br />ドントスリープ
            </p>
          </RevealFade>
        </div>

        <RevealFade delay={0.1}>
          <div className="space-y-3">
            <p className="font-mono text-[9px] tracking-widest text-red-bright/60 mb-5">ナビゲート</p>
            {[{ to: '/', label: 'Home' }, { to: '/shop', label: 'Shop' }, { to: '/story', label: 'Story' }, { to: '/contact', label: 'Contact' }].map(({ to, label }) => (
              <Link key={to} to={to} className="block font-mono text-[10px] tracking-widest text-ash/40 hover:text-red-bright transition-colors duration-300">
                {label.toUpperCase()}
              </Link>
            ))}
          </div>
        </RevealFade>

        <RevealFade delay={0.15}>
          <div className="space-y-3">
            <p className="font-mono text-[9px] tracking-widest text-red-bright/60 mb-5">インフォ</p>
            {['Privacy', 'Shipping', 'Returns', 'Size Guide'].map(l => (
              <button key={l} className="block font-mono text-[10px] tracking-widest text-ash/40 hover:text-red-bright transition-colors duration-300">
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </RevealFade>

        <RevealFade delay={0.2}>
          <div className="space-y-3">
            <p className="font-mono text-[9px] tracking-widest text-red-bright/60 mb-5">コネクト</p>
            <a href="mailto:hello@164club.com" className="block font-mono text-[10px] tracking-widest text-ash/40 hover:text-red-bright transition-colors duration-300">EMAIL</a>
            <p className="font-mono text-[10px] tracking-widest text-ash/40">INSTAGRAM</p>
            <p className="font-mono text-[10px] tracking-widest text-ash/40">TIKTOK</p>
          </div>
        </RevealFade>
      </div>

      <div className="max-w-7xl mx-auto px-8 md:px-16 py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <p className="font-mono text-[9px] tracking-widest text-ash/20">© 2024 1:64 CLUB. ALL RIGHTS RESERVED.</p>
        <p className="font-jp-light text-[9px] text-ash/20 tracking-widest">ミニマル バイ デザイン。意味は大きい。</p>
      </div>
    </footer>
  )
}
