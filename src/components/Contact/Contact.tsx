import { faEnvelope, faFile, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { forwardRef } from 'react'

const Contact = forwardRef((props, ref) => {
  return (
    <section ref={ref}>
      <div className='bg-[#6E07F3] px-4 md:px-8 lg:px-20 py-20'>
        <div className='flex flex-col md:flex-row justify-center gap-8 md:gap-20 lg:gap-60'>
          <div className='text-gray-200  flex flex-col gap-8'>
            <div className='flex gap-2 hover:text-white'>
              <FontAwesomeIcon className='text-2xl' icon={faPhone} />
              <p className=''>+84-35-884-2316</p>
            </div>
            <div className='flex gap-2 hover:text-white'>
              <FontAwesomeIcon className='text-2xl' icon={faLocationDot} />
              <p className=''>Binh Tan Dicstric, Ho Chi Minh City</p>
            </div>
          </div>
          <div className='text-gray-300  flex flex-col gap-8'>
            <div className='flex gap-2 hover:text-white'>
              <FontAwesomeIcon className='text-2xl' icon={faEnvelope} />
              <p className=''>thientringuyen0402@gmail.com</p>
            </div>
            <div className='flex gap-2 hover:text-white'>
              <FontAwesomeIcon className='text-2xl' icon={faFile} />
              <p className=''>CV</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Contact
