import { useState } from "react"
import SkillsLogos from "./SkillsLogos"
import Experience from "./Experience"
import Studies from "./Studies"
import SectionWrapper from "./SectionWrapper"
import SectionTitle from "./SectionTitle"
import NeumorphismBtn from "../ui/buttons/NeumorphismBtn"
import { useTranslation } from "react-i18next"

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<string>("skills")
  const { t } = useTranslation()

  const handleSkillsChange = (type: string) => {
    setSkills(type)
  }

  return (
    <SectionWrapper id="skills">
      <SectionTitle title={t("skills")} />

      <div className="flex justify-center items-center gap-6 font-bold flex-wrap">
        <NeumorphismBtn
          className="mt-6 px-4 py-2 rounded-md text-md font-bold uppercase"
          onClick={() => handleSkillsChange(t("skills"))}
        >
          {t("skills")}
        </NeumorphismBtn>
        <NeumorphismBtn
          className="mt-6 px-4 py-2 rounded-md text-md font-bold uppercase"
          onClick={() => handleSkillsChange(t("experience"))}
        >
          {t("experience")}
        </NeumorphismBtn>
        <NeumorphismBtn
          className="mt-6 px-4 py-2 rounded-md text-md font-bold uppercase"
          onClick={() => handleSkillsChange(t("education"))}
        >
          {t("education")}
        </NeumorphismBtn>
      </div>

      {skills === t("skills") && <SkillsLogos />}
      {skills === t("experience") && <Experience />}
      {skills === t("education") && <Studies />}
    </SectionWrapper>
  )
}

export default Skills
