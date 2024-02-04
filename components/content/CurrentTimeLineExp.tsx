'use client';

import { Timeline, TimelineEvent } from './TimeLineExp';

const CurrentTimeLineExp = () => {
  return (
    <Timeline>

      <TimelineEvent active>

        <TimelineEvent.Title> | 2021-2022</TimelineEvent.Title>

        <TimelineEvent.Description>
        I have gained experience in Blockchain Programming during my time at 1Hive. Additionally, I have also dedicated a significant amount of my time to engaging in social work at Token Engineering Commons, where I have been actively involved in various projects and initiatives aimed at creating positive social impact. Through these experiences, I have developed a deep understanding of the intricacies of blockchain technology and its potential to revolutionize various industries.

Throughout my journey, I have actively sought out and engaged with a multitude of tutorials, ranging from various marketplaces to insightful blogs and forums. I firmly believe in the value of continuous learning, and these resources have been instrumental in expanding my knowledge and honing my skills as a developer.
        </TimelineEvent.Description>

      </TimelineEvent>

      

      

    </Timeline>
  )
}

export default CurrentTimeLineExp;