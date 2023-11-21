import { useState } from "react"
import SkillsLogos from "./SkillsLogos"
import Experience from "./Experience"
import Studies from "./Studies"
import SectionWrapper from "./SectionWrapper"
import SectionTitle from "./SectionTitle"
import NeumorphismBtn from "../ui/buttons/NeumorphismBtn"

enum SkillsType {
  "skills",
  "experience",
  "studies",
}

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<SkillsType>(SkillsType.skills)

  const handleSkillsChange = (type: SkillsType) => {
    setSkills(type)
  }

  return (
    <SectionWrapper id="skills">
      <SectionTitle title="Skills" />

      <div className="flex justify-center items-center gap-6 font-bold flex-wrap">
        <NeumorphismBtn
          className="mt-6 px-4 py-2 rounded-md text-md font-bold uppercase"
          onClick={() => handleSkillsChange(SkillsType.skills)}
        >
          Skills
        </NeumorphismBtn>
        <NeumorphismBtn
          className="mt-6 px-4 py-2 rounded-md text-md font-bold uppercase"
          onClick={() => handleSkillsChange(SkillsType.experience)}
        >
          Experiencia
        </NeumorphismBtn>
        <NeumorphismBtn
          className="mt-6 px-4 py-2 rounded-md text-md font-bold uppercase"
          onClick={() => handleSkillsChange(SkillsType.studies)}
        >
          Estudios
        </NeumorphismBtn>
      </div>

      {skills === SkillsType.skills && <SkillsLogos />}
      {skills === SkillsType.experience && <Experience />}
      {skills === SkillsType.studies && <Studies />}
    </SectionWrapper>
  )
}

export default Skills
