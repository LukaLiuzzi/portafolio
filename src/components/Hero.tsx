import { BsGithub } from "react-icons/bs"
import { FiArrowDown } from "react-icons/fi"
import SectionWrapper from "./SectionWrapper"
import { FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const Hero: React.FC = () => {
  return (
    <SectionWrapper id="hero">
      <div className="flex justify-center items-center flex-col gap-6 font-bold max-w-lg m-auto w-full">
        <div className="flex gap-1 justify-center items-center">
          <h2 className="text-2xl text-green-400">Soy Luka</h2>
          <span className="animate-waving-hand text-2xl">👋</span>
        </div>

        <h1 className="text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-violet-700 from-green-500 animate-pulse">
          Desarrollador Full Stack
        </h1>

        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/lukaliuzzi/" target="_blank">
            <FaLinkedin className="text-3xl hover:opacity-70" />
          </a>
          <a href="https://github.com/lukaliuzzi" target="_blank">
            <BsGithub className="text-3xl hover:opacity-70" />
          </a>
          <a href="mailto:lukaliuzzidev@gmail.com" target="_blank">
            <MdEmail className="text-3xl hover:opacity-70" />
          </a>
        </div>

        <div>
          <a href="#about">
            <FiArrowDown className="text-5xl animate-bounce hover:opacity-70" />
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
export default Hero
