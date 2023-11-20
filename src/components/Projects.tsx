import ProjectCard from "./ProjectCard"
import ProjectsJson from "../assets/projects.json"
import { ProjectCardProps } from "./ProjectCard"
import SectionWrapper from "./SectionWrapper"
import SectionTitle from "./SectionTitle"
import Atropos from "atropos/react"

const Projects: React.FC = () => {
  const projects: ProjectCardProps[] = ProjectsJson

  return (
    <SectionWrapper id="projects">
      <SectionTitle title="Proyectos" />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {projects.map((project) => (
          <Atropos className="my-atropos" key={project.key}>
            <ProjectCard {...project} />
          </Atropos>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Projects
