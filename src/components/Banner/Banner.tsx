import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

gsap.registerPlugin(useGSAP)

type AboutMeProps = {
  onLetsTalk?: () => void
}
const Banner = ({ onLetsTalk }: AboutMeProps) => {
  const container = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const moveBubble = (selector: string) => {
        gsap.to(selector, {
          x: gsap.utils.random(0, 1000),
          y: gsap.utils.random(0, 500),
          duration: gsap.utils.random(4, 8),
          ease: 'sine.inOut',
          onComplete: () => moveBubble(selector)
        })
      }

      moveBubble('.bubble1')
      moveBubble('.bubble2')
      moveBubble('.bubble3')
      moveBubble('.bubble4')
      moveBubble('.bubble5')
      moveBubble('.bubble6')
    },
    { scope: container }
  )

  return (
    <>
      <div
        ref={container}
        className='h-auto
         overflow-hidden relative text-center py-8 '
      >
        <p className='font-Quicksand text-xl py-8'>👋Hi! I am Tri</p>

        <span
          className='font-BlackOpsOne leading-none sm:text-6xl md:text-8xl 
        lg:text-9xl 2xl:text-[12rem]  text-5xl'
        >
          Front-end <br />
          <span className='text-transparent [-webkit-text-stroke:2px_black]'>web</span>
          <br />
          <span className='text-transparent [-webkit-text-stroke:2px_black]'>Developer</span>
        </span>

        <div
          className='absolute bubble5 top-80 right-20 w-20 h-20 lg:w-80 lg:h-80 rounded-full
        bg-yellow-300 z-[-1]  blur-lg'
        />
        <div
          className='absolute bubble4 left-20 bottom-20 w-50 h-50 lg:w-30 lg:h-30 rounded-full
        bg-green-300 z-[-1]  blur-lg'
        />
        <div
          className='absolute bubble6 top-60 left-80 w-20 h-20 lg:w-20 lg:h-20 rounded-full
        bg-teal-300 z-[-1]  blur-lg'
        />
        <div
          className='absolute bubble1 top-20 left-20 w-20 h-20 lg:w-80 lg:h-80 rounded-full
        bg-red-300 z-[-1]  blur-lg'
        />
        <div
          className='absolute bubble2 top-0 right-90 w-30 h-30 lg:w-60 lg:h-60 rounded-full
        bg-blue-300 z-[-1]  blur-lg'
        />
        <div
          className='absolute bubble3 top-40 left-50 w-40 h-40 rounded-full
        bg-violet-300 z-[-1]  blur-lg'
        />

        <p className='font-Quicksand font-bold lg:text-xl text-sm py-8 md:text-md'>
          I build modern, responsive & interactive web experiences.
        </p>

        <button
          className='cursor-none hover:bg-[#6E07F3] hover:text-white font-bold
         transition-all duration-150 font-Quicksand border-[1.5px] border-[#6E07F3] text-[#6E07F3] px-4 py-2 rounded-[20px]'
          onClick={onLetsTalk}
        >
          Let's talk <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </>
  )
}
export default Banner
