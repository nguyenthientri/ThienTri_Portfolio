import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { forwardRef, useEffect, useRef } from 'react'
import gsap from 'gsap'

const projects = [
  {
    name: 'Shopify',
    type: 'Web Development',
    image: '/src/assets/images/p1.png',
    link: 'https://my-ecommerce-webuy.vercel.app/'
  },
  {
    name: 'VietFlix',
    type: 'Web Development',
    image: '/src/assets/images/p2.png',
    link: 'https://viet-flix-1-lsla.vercel.app/'
  }
]

const SelectedWork = forwardRef((props, ref) => {
  const imageRef = useRef<HTMLImageElement>(null)
  const loaderRef = useRef<HTMLDivElement>(null)
  const loaderRotateTween = useRef<gsap.core.Tween | null>(null)

  const showProject = (img: string) => {
    if (!imageRef.current || !loaderRef.current) return

    gsap.killTweensOf(imageRef.current)

    imageRef.current.src = img

    gsap.to(loaderRef.current, {
      opacity: 0,
      scale: 0.85,
      duration: 0.3,
      ease: 'power2.out'
    })

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.05, filter: 'blur(8px)' },
      {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.5,
        ease: 'power3.out'
      }
    )
  }

  const resetPreview = () => {
    if (!imageRef.current || !loaderRef.current) return

    gsap.killTweensOf(imageRef.current)

    gsap.to(imageRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.out'
    })

    gsap.to(loaderRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  useEffect(() => {
    if (!loaderRef.current) return

    loaderRotateTween.current = gsap.to(loaderRef.current, {
      rotate: 360,
      duration: 1.3,
      repeat: -1,
      ease: 'linear'
    })

    return () => {
      loaderRotateTween.current?.kill()
    }
  }, [])

  return (
    <section ref={ref}>
      <div className='bg-[#6E07F3]'>
        <div className='px-4 md:px-8 lg:px-20 lg:py-8 pb-[200px] lg:pb-[300px]'>
          <div className='hidden lg:block'>
            <div className='flex gap-10'>
              <div className='relative w-[55%] h-[400px] overflow-hidden rounded-tr-[50px]'>
                <img ref={imageRef} className='absolute inset-0 w-full h-full object-cover opacity-0' alt='' />

                <div className='absolute inset-0 flex items-center justify-center'>
                  <div
                    ref={loaderRef}
                    className='w-16 h-16 rounded-full
                  border-2 border-white/20 border-t-white'
                  />
                </div>
              </div>

              <div className='w-[30%]'>
                <ul className='flex flex-col overflow-hidden'>
                  <li className='lg:text-4xl text-white pb-5 font-bold border-b-2 border-gray-400'>Project</li>

                  {projects.map((project) => (
                    <a
                      key={project.name}
                      href={project.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      onMouseEnter={() => showProject(project.image)}
                      onMouseLeave={resetPreview}
                      className='py-4 flex justify-between items-center
                    border-b-2 border-gray-400 group cursor-pointer'
                    >
                      <span
                        className='lg:text-xl font-bold translate-x-[-30px]
                      transition-transform duration-300 ease-out
                      group-hover:translate-x-0 text-white'
                      >
                        <FontAwesomeIcon icon={faArrowRight} className='pr-2' />
                        {project.name}
                      </span>
                      <span className='text-lg text-white'>{project.type}</span>
                    </a>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className='py-6 lg:hidden'>
            <p className='text-2xl pb-5 font-bold text-white'>Project</p>

            <div className='flex flex-col gap-8'>
              {projects.map((project) => (
                <div key={project.name} className='flex flex-col gap-4'>
                  <img src={project.image} className='w-full rounded-xl' alt='' />

                  <div className='flex justify-between items-center'>
                    <div>
                      <p className='font-bold text-white'>{project.name}</p>
                      <span className='text-sm text-white'>{project.type}</span>
                    </div>

                    <a
                      href={project.link}
                      target='_blank'
                      className='border border-white px-6 py-2 rounded-3xl text-white'
                    >
                      <FontAwesomeIcon icon={faArrowRight} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})
export default SelectedWork
