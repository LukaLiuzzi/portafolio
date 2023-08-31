import Selfie from "../assets/yo.jpg"
import SectionTitle from "./SectionTitle"
import SectionWrapper from "./SectionWrapper"

const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      <SectionTitle title="Sobre mí" />
      <div className="flex flex-col justify-center items-center md:flex-row gap-10 md:mt-10 w-full">
        <div className="flex-1">
          <p className="mt-4 text-xl">
            Soy un desarrollador web full stack apasionado por crear soluciones
            técnicas personalizadas y eficaces. Trabajo con las ultimas
            tecnologías, colaboro en equipo y siempre me esfuerzo por superar
            las expectativas de mis clientes.
          </p>
          <a href="/CVLukaLiuzzi.pdf" download>
            <button className="mt-6 bg-light-text text-light-primary hover:bg-light-accent dark:bg-green-300 px-4 py-2 rounded-md text-md dark:text-dark-primary font-bold uppercase hover:dark:bg-green-500">
              Descargar CV
            </button>
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
