import developerIllustration from "../assets/developer-illustration.svg"
import SectionTitle from "./SectionTitle"
import SectionWrapper from "./SectionWrapper"
import { useTranslation } from "react-i18next"

const Contact: React.FC = () => {
  const { t } = useTranslation()

  return (
    <SectionWrapper id="contact">
      <SectionTitle title={t("contact")} />
      <div className="mt-4 flex flex-col justify-center items-center gap-2 md:flex-row md:gap-10">
        <div>
          <h4 className="text-2xl sm:text-3xl break-all">
            {t("want-to-work")}
          </h4>
          <h4 className="text-2xl sm:text-3xl break-all">{t("have-idea")}</h4>
          <h4 className="text-2xl sm:text-3xl break-all">{t("lets-happen")}</h4>
          <h3 className="text-2xl sm:text-3xl font-bold">
            <a href="mailto:lukaliuzzidev@gmail.com" target="_blank">
              {t("email")}
            </a>
          </h3>
        </div>
        <img
          src={developerIllustration}
          alt="Desarrollador escribiendo codigo ilustracion"
          className="object-cover mt-8"
        />
      </div>
    </SectionWrapper>
  )
}

export default Contact
