import ProcessCard from "./ProcessCard"
import talkSvg from "../assets/talk.svg"
import researchSvg from "../assets/research.svg"
import prototypeSvg from "../assets/prototype.svg"
import developSvg from "../assets/develop.svg"
import testSvg from "../assets/test.svg"
import productionSvg from "../assets/production.svg"
import { AiOutlineArrowDown } from "react-icons/ai"
import SectionWrapper from "./SectionWrapper"
import SectionTitle from "./SectionTitle"
import { useTranslation } from "react-i18next"

export interface ProjectCardProps {
  title: string
  description: string
  svg: string
  alt: string
  key: string
}

const Process: React.FC = () => {
  const { t } = useTranslation()

  const processList = t("process-list", {
    returnObjects: true,
  }) as ProjectCardProps[]

  processList.forEach((process, index) => {
    if (process.svg === "talk.svg") {
      process.svg = talkSvg
    } else if (process.svg === "research.svg") {
      process.svg = researchSvg
    } else if (process.svg === "prototype.svg") {
      process.svg = prototypeSvg
    } else if (process.svg === "develop.svg") {
      process.svg = developSvg
    } else if (process.svg === "test.svg") {
      process.svg = testSvg
    } else if (process.svg === "production.svg") {
      process.svg = productionSvg
    }

    process.alt = `${process.title} icon`
  })

  return (
    <SectionWrapper id="process">
      <SectionTitle title={t("process")} />

      {processList.map((process, index) => (
        <div key={process.title}>
          <ProcessCard {...process} />
          {index !== processList.length - 1 && (
            <AiOutlineArrowDown className="text-3xl text-primary text-center w-full mt-4" />
          )}
        </div>
      ))}
    </SectionWrapper>
  )
}

export default Process
