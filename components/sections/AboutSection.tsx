import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import ProcessWork from '../content/ProcessWork';
import { skills } from '../utils/mySkills';

const AboutSection = () => {
  return (
    <SectionContainer>

      <div className='w-full flex flex-col gap-6'>

        <TitleSectionPageContainer title='About me' />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <p className='text-base text-gray-400'>
          I am a highly motivated and passionate developer with more than 2 years of work experience. I have a strong desire to constantly expand my knowledge and expertise in programming by learning and exploring new technologies. My journey in programming has been an exhilarating one, and I have discovered a deep passion for it.          </p>

          <p className='text-base text-gray-400'>
          Currently, I am focusing on sharpening my skills in TypeScript, as it is an exciting and powerful language that I believe will greatly enhance my development capabilities.          </p>

        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>Skills & Tools</h2>

          <p className='text-base text-gray-400'>
            A look at all the programming languages, libraries, and tools I've worked with, I started programming about 4 years ago. I have tried a few programming languages and technology stack, both Backend and Frontend.
          </p>

          

          <div className='flex flex-col items-start gap-3 mt-3'>

            {
              skills.map(({ title, techs }) => (
                <div key={title}>

                  <h3 className='font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start'>{title}</h3>

                  <AnimationContainer customClassName='flex items-center flex-wrap gap-3 mb-5'>
                    <ShowSkills skills={techs} />
                  </AnimationContainer>

                </div>
              ))
            }

          </div>

        </AnimationContainer>

        <ProcessWork />

        <AnimationContainer customClassName='w-full flex flex-col gap-5'>

          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start'>Interests & Goals</h2>

          <p className='text-base text-gray-400'>
            I am interested in learning Backend with other language like Java, Go or with Python. I also want to know how to make a video game with Unity or other and I am very interested in being a content creator whether programming or something else.
          </p>

          <p className='text-base text-gray-400'>
            For now I'm learning how to make applications with real time communication such as a chat using Socket.IO, I'm also starting to learn the way to be Devops using Docker, Kubernetes, AWS or others.
          </p>

          <p className='text-base text-gray-400'>
            I am also interested in learning other things besides programming such as 3D design with Blender and video editing with Davinci Resolve (these last two I would take as a hobby).
          </p>

        </AnimationContainer>

      </div>

    </SectionContainer>
  )
}

export default AboutSection;