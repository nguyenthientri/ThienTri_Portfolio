import { forwardRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import aboutmepicture from '../../assets/images/avt.jpg'
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
              Hi, I’m Tri. I am a Front-end Developer based in Ho Chi Minh City. I’m passionate about building modern,
              visually appealing, and responsive web interfaces, and I love turning ideas into clean, interactive user
              experiences.
            </p>

            <p className='font-Quicksand text-sm md:text-md lg:text-lg '>
              My tech stack at work is mostly React.js (Vite), TypeScript, and Tailwind CSS. I’m happiest when I’m
              learning new things, improving my skills, and refining small details that make products better. I’m always
              excited to grow as a front-end developer and contribute to meaningful, real-world projects.
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
