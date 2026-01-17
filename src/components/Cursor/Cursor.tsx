import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const dot = useRef<HTMLDivElement | null>(null)
  const ring = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const moveDotX = gsap.quickTo(dot.current!, 'x', { duration: 0.1 })
    const moveDotY = gsap.quickTo(dot.current!, 'y', { duration: 0.1 })

    const moveRingX = gsap.quickTo(ring.current!, 'x', {
      duration: 0.2,
      ease: 'power3.out'
    })
    const moveRingY = gsap.quickTo(ring.current!, 'y', {
      duration: 0.2,
      ease: 'power3.out'
    })

    const onMove = (e: MouseEvent) => {
      moveDotX(e.clientX)
      moveDotY(e.clientY)

      moveRingX(e.clientX)
      moveRingY(e.clientY)
    }

    window.addEventListener('mousemove', onMove)

    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dot}
        className='fixed top-0 left-0 w-2 h-2 rounded-full
        bg-black pointer-events-none z-[9999]'
      />

      {/* Ring */}
      <div
        ref={ring}
        className='fixed top-[-16px] left-[-16px] w-10 h-10 rounded-full
        border border-black pointer-events-none z-[9998]'
      />
    </>
  )
}
