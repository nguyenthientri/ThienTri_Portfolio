import { forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import aboutmepicture from '../../assets/images/aboutme.jpg'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

type AboutMeProps = {
  onLetsTalk: () => void
}

const AboutMe = forwardRef<HTMLElement, AboutMeProps>(function AboutMe(props, ref) {
  const { onLetsTalk } = props

  return (
    <section ref={ref}>
      <div className='px-4 md:px-8 lg:px-20 lg:py-8 py-8'>
        <p className='lg:text-4xl text-2xl font-bold'>About Me</p>

        <div className='lg:flex-row lg:flex flex flex-col gap-8 justify-between py-6'>
          <div className='flex flex-col gap-5'>
            <p className='lg:text-xl text-md font-Quicksand font-bold'>
              Hello! I'm Sathya Narayanan, a passionate and creative UI/UX designer ready to embark on a journey of
              shaping exceptional digital experiences.
            </p>

            <p className='font-Quicksand text-sm md:text-md lg:text-lg lg:py-7'>
              I have honed my skills in user research, wireframing, prototyping, and visual design.
            </p>
          </div>

          <img src={aboutmepicture} className='lg:w-[40%] rounded-xl' alt='About me' />
        </div>

        <button
          className='cursor-none hover:bg-[#6E07F3] hover:text-white font-bold
          transition-all duration-150 font-Quicksand border-[1.5px]
          border-[#6E07F3] text-[#6E07F3] px-4 py-2 rounded-[20px]'
          onClick={onLetsTalk}
        >
          Let's talk <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </section>
  )
})

export default AboutMe
