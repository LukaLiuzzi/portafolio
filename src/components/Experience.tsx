import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { FaBriefcase } from "react-icons/fa"
import TimelineCard from "./TimelineCard"
import { useTranslation } from "react-i18next"

interface ExperienceItem {
  title: string
  place: string
  description: string
  date: string
}

const Experience: React.FC = () => {
  const { t } = useTranslation()

  const experienceList = t("experience-list", {
    returnObjects: true,
  }) as ExperienceItem[]
  const reversedExperienceList = experienceList.reverse()

  return (
    <div className="mt-12">
      <VerticalTimeline>
        {reversedExperienceList.map((experience: ExperienceItem) => (
          <TimelineCard
            key={experience.title}
            title={experience.title}
            place={experience.place}
            description={experience.description}
            date={experience.date}
            icon={<FaBriefcase />}
          />
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default Experience
