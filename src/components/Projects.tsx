import ProjectCard from "./ProjectCard"
import ProjectsJson from "../assets/projects.json"
import { ProjectCardProps } from "./ProjectCard"
import SectionWrapper from "./SectionWrapper"
import SectionTitle from "./SectionTitle"
import Atropos from "atropos/react"

const Projects: React.FC = () => {
  const projects: ProjectCardProps[] = ProjectsJson

  // Elimino caminoacasa hasta arreglar el hosting
  const projectsWithoutCaminoACasa = projects.filter(
    (project) => project.key !== 1
  )

  return (
    <SectionWrapper id="projects">
      <SectionTitle title="Proyectos" />

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {projectsWithoutCaminoACasa.map((project) => (
          <Atropos className="my-atropos">
            <ProjectCard {...project} />
          </Atropos>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default Projects
