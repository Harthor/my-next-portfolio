import SearchAllProjects from '../content/SearchAllProjects';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';

const myGithub = 'https://github.com/Harthor';

const ProjectsSection = () => {
  return (
    <SectionContainer>

      <div className='w-full flex flex-col gap-6'>

        <TitleSectionPageContainer title='Projects' />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <p className='w-full text-base text-gray-400'>
          These projects represent the breadth of my programming journey, encompassing personal endeavors, freelance assignments, professional work, and practice projects among others. For a comprehensive view of all my works, please visit my <a href={myGithub} target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>https://github.com/Harthor</a>.
          </p>

        </AnimationContainer>

        <SearchAllProjects />

      </div>

    </SectionContainer>
  )
}

export default ProjectsSection;