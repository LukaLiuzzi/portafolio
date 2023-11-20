import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { ImBooks } from "react-icons/im"
import TimelineCard from "./TimelineCard"

const Studies: React.FC = () => {
  return (
    <div className="mt-12">
      <VerticalTimeline>
        <TimelineCard
          title="Tecnicatura Universitaria en Programación Informática"
          place="UNSAM"
          description="Tecnicatura Universitaria en Programación Informática en la Universidad Nacional de San Martín."
          date="2024"
          icon={<ImBooks />}
          background="lightblue"
        />
        <TimelineCard
          title="Carrera Desarrollador Full Stack"
          place="CoderHouse"
          description="Carrera de Desarrollador Full Stack en CoderHouse. Aprendizaje de tecnologías como Javascript, React, Node, Express, MongoDB, entre otras."
          date="2021 - 2023"
          icon={<ImBooks />}
          background="lightblue"
        />
        <TimelineCard
          title="Secundario Completo"
          place="Colegio Bachiller Manuel Belgrano"
          description="Secundario completo en el colegio Bachiller Manuel Belgrano."
          date="2014 - 2019"
          icon={<ImBooks />}
          background="lightblue"
        />
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "green", color: "#fff" }}
          icon={<ImBooks />}
        />
      </VerticalTimeline>
    </div>
  )
}

export default Studies
