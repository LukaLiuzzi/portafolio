import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { ImBooks } from "react-icons/im"
import TimelineCard from "./TimelineCard"
import { useTranslation } from "react-i18next"

interface EducationItem {
  title: string
  place: string
  description: string
  date: string
}

const Studies: React.FC = () => {
  const { t } = useTranslation()

  const educationList = t("education-list", {
    returnObjects: true,
  }) as EducationItem[]
  const reversedExperienceList = educationList.reverse()

  return (
    <div className="mt-12">
      <VerticalTimeline>
        {reversedExperienceList.map((experience: EducationItem) => (
          <TimelineCard
            key={experience.title}
            title={experience.title}
            place={experience.place}
            description={experience.description}
            date={experience.date}
            icon={<ImBooks />}
            background="lightblue"
          />
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default Studies
