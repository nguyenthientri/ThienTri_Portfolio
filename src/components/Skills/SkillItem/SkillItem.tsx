import { faGears, faHandshake, faLanguage, type IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const iconMap: Record<string, IconDefinition> = {
  technical: faGears,
  softskill: faHandshake,
  language: faLanguage
}

interface Skill {
  id: number
  title: string
  icon: 'technical' | 'softskill' | 'language'
  sections: SkillSection[]
}

interface SkillItemProps {
  skill: Skill
  isLast: boolean
}

interface SkillSection {
  heading: string
  items: string[]
}
export default function SkillItem({ skill, isLast }: SkillItemProps) {
  return (
    <>
      <div
        className={`md:w-1/3 py-10 md:py-0 flex flex-col items-center
        ${!isLast ? 'md:border-r md:border-blue-400 md:border-b-0 border-b border-gray-300' : ''}`}
      >
        <div className='w-20 h-20 rounded-full bg-emerald-300 flex items-center justify-center mb-4'>
          <FontAwesomeIcon className='text-3xl' icon={iconMap[skill.icon]} />
        </div>
        <p className='font-bold lg:text-2xl lg:py-3'>{skill.title}</p>
        <ul className='flex flex-col text-center'>
          <li className='md:py-4 px-1'>
            {skill.sections.map((section: SkillSection) => (
              <div className='py-3' key={section.heading}>
                <p className='text-[#6E07F3] lg:py-2 '>{section.heading}</p>
                {section.items.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            ))}
          </li>
        </ul>
      </div>
    </>
  )
}
