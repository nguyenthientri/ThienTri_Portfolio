import logo from '../../assets/images/logo1.png'

type HeaderProps = {
  onAbout: () => void
  onProject: () => void
  onSkills: () => void
  onContact: () => void
}

export default function Header({ onAbout, onProject, onSkills, onContact }: HeaderProps) {
  return (
    <>
      <div className='relative px-4 md:px-8 lg:px-20 shadow-[0_6px_12px_-4px_rgba(0,0,0,0.15)]'>
        <div className='items-center flex justify-center lg:justify-between py-1 md:py-2 lg:py-4 '>
          <div className='w-[110px] sm:w-[170px] '>
            <img src={logo} className='cursor-pointer' />
          </div>

          <div className='absolute left-1/2 hidden -translate-x-1/2 lg:block'>
            <div className='flex font-Quicksand'>
              <button onClick={onAbout} className='px-5 cursor-pointer'>
                About Me
              </button>
              <button onClick={onProject} className='px-5 cursor-pointer'>
                Project
              </button>
              <button onClick={onSkills} className='px-5 cursor-pointer'>
                Skills
              </button>
              <button onClick={onContact} className='px-5 cursor-pointer'>
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
