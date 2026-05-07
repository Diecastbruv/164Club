import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const ring = ringRef.current
    let ringX = 0, ringY = 0

    const move = (e) => {
      const x = e.clientX
      const y = e.clientY
      if (cursor) {
        cursor.style.left = x + 'px'
        cursor.style.top = y + 'px'
      }
      ringX += (x - ringX) * 0.12
      ringY += (y - ringY) * 0.12
      if (ring) {
        ring.style.left = x + 'px'
        ring.style.top = y + 'px'
      }
    }

    const over = (e) => {
      if (e.target.closest('a, button, [data-hover]')) {
        cursor?.classList.add('hover')
      }
    }
    const out = () => cursor?.classList.remove('hover')

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    window.addEventListener('mouseout', out)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      window.removeEventListener('mouseout', out)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
