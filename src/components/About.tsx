import Selfie from "../assets/yo.jpg"
import NeumorphismBtn from "../ui/buttons/NeumorphismBtn"
import SectionTitle from "./SectionTitle"
import SectionWrapper from "./SectionWrapper"
import { useTranslation } from "react-i18next"

const About: React.FC = () => {
  const { t } = useTranslation()
  return (
    <SectionWrapper id="about" styles="pt-6">
      <SectionTitle title={t("about")} />
      <div className="flex flex-col justify-center items-center md:flex-row gap-10 md:mt-10 w-full">
        <div className="flex-1">
          <p className="mt-4 text-xl">{t("about-text")}</p>
          <a href="/Luka-Liuzzi-CV-ACTUALIZADO.pdf" download>
            <NeumorphismBtn className="mt-6 px-4 py-2 rounded-md text-md font-bold uppercase">
              {t("download-cv")}
            </NeumorphismBtn>
          </a>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img
            src={Selfie}
            alt="Foto de luka liuzzi, desarrollador web"
            className="rounded w-64 h-64 object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </SectionWrapper>
  )
}

export default About
