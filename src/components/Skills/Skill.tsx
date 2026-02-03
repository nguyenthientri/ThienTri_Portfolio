import { forwardRef } from 'react'
import SkillItem from './SkillItem'

const skillsData = [
  {
    id: 1,
    title: 'Technical Skill',
    icon: 'technical' as const,
    sections: [
      {
        heading: 'Programing Language, Frameworks & Libraries',
        items: ['JavaScript [ES6], TypeScript', 'ReactJS', 'Redux Toolkit (basic)']
      },
      {
        heading: 'Markup & Styling:',
        items: ['HTML5, CSS3, SASS/SCSS', 'Tailwind CSS, Bootstrap']
      },
      {
        heading: 'Tools:',
        items: ['Git, GitHub, GitLab', 'Vite, Postman']
      }
    ]
  },
  {
    id: 2,
    title: 'Soft Skill',
    icon: 'softskill' as const,
    sections: [
      {
        heading: 'Languages I speak:',
        items: [
          'Self-learning',
          'Independent working',
          'Communication',
          'Teamwork',
          'Creative thinking',
          'Problem-solving'
        ]
      }
    ]
  },

  {
    id: 3,
    title: 'Language',
    icon: 'language' as const,
    sections: [
      {
        heading: 'English',
        items: ['TOEIC']
      }
    ]
  }
]

const Skill = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section ref={ref}>
      <div
        className='h-[1150px] md:h-[400px] lg:h-[500px] px-4 md:px-8 lg:px-20 lg:py-8
       translate-y-[-10rem] relative'
      >
        <div
          className='rounded-2xl bg-white border-2 border-gray-300
         -translate-x-1/2 left-1/2 absolute  top-0 w-[80%] '
        >
          <p className='text-2xl pb-5 font-bold lg:text-4xl text-center w-full lg:py-8'>Skills</p>
          <div className='flex flex-col gap-6 md:gap-0 md:flex-row justify-between'>
            {skillsData.map((skill, index) => (
              <SkillItem key={skill.id} skill={skill} isLast={index === skillsData.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})
export default Skill
