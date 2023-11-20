import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { FaBriefcase } from "react-icons/fa"
import TimelineCard from "./TimelineCard"

const Experience: React.FC = () => {
  return (
    <div className="mt-12">
      <VerticalTimeline>
        <TimelineCard
          title="Profesor de carrera de Desarrollo web Full Stack"
          place="Global Academy"
          description="Impartí clases de desarrollo web full stack en Global Academy, enseñando a los estudiantes los fundamentos de programación, diseño de interfaces y desarrollo de aplicaciones web, así como también optimización de SEO y manejo de bases de datos. Además, brindé asesoramiento y apoyo técnico a los alumnos, resolviendo sus consultas y ayudándolos a completar sus proyectos. Fue una experiencia gratificante poder compartir mis conocimientos y ver el crecimiento de los estudiantes en el campo de la tecnología."
          date="2023 - Presente"
          icon={<FaBriefcase />}
        />
        <TimelineCard
          title="Tutor Javascript, React, Desarrollo Web"
          place="CoderHouse"
          description="Como tutor en desarrollo full stack en Coderhouse, lideré
            la formación de los estudiantes en los aspectos frontend y
            backend. Personalicé la enseñanza, dirigí sus proyectos
            prácticos y participé en reuniones pedagógicas para
            adaptarme a las necesidades de los estudiantes, ademas
            de ser profesor suplente."
          date="2021 - Presente"
          icon={<FaBriefcase />}
        />
        <TimelineCard
          title="Desarrollador Full Stack"
          place="Boceto Contenidos"
          description="Diseñé y desarrollé aplicaciones web de extremo a extremo,
          abarcando tanto el frontend como el backend, con un
          enfoque personalizado para satisfacer las necesidades
          específicas de los clientes. Colaboré de manera efectiva en
          equipos multidisciplinarios de desarrollo, participando en
          reuniones estratégicas con los clientes para comprender y
          cumplir con sus requisitos."
          date="2021 - Presente"
          icon={<FaBriefcase />}
        />
        <TimelineCard
          title="Desarrollador Freelance"
          description="Desarrollo de aplicaciones web. Soluciones tecnológicas a medida según las necesidades de los clientes."
          date="2021 - Presente"
          icon={<FaBriefcase />}
        />
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<FaBriefcase />}
        />
      </VerticalTimeline>
    </div>
  )
}

export default Experience
