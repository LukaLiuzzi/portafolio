import ProjectCard from "./ProjectCard"
import { ProjectCardProps } from "./ProjectCard"
import SectionWrapper from "./SectionWrapper"
import SectionTitle from "./SectionTitle"
import Atropos from "atropos/react"
import { useTranslation } from "react-i18next"

interface EducationItem {
  img: string
  title: string
  description: string
  github?: string
  url?: string
}

const Projects: React.FC = () => {
  const { t } = useTranslation()

  const projectsList = t("projects-list", {
    returnObjects: true,
  }) as EducationItem[]

  return (
    <SectionWrapper id="projects">
      <SectionTitle title={t("projects")} />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {projectsList.map((project) => (
          <Atropos className="my-atropos" key={project.description}>
            <ProjectCard {...project} />
          </Atropos>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Projects
