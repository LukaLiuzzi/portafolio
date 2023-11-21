import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"
import NeumorphismBtn from "../ui/buttons/NeumorphismBtn"

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-primary text-light-text dark:bg-dark-primary dark:text-dark-text pt-10">
      <div className="container flex items-center justify-between py-4 px-6 mx-auto border-t-[1px] dark:border-dark-accent gap-4">
        <div>
          <a href="#home">
            <img
              src="/logo.svg"
              alt="Logo Luka Liuzzi"
              className="w-8 h-8 mr-2 object-contain"
            />
          </a>
        </div>
        <p className="text-sm font-medium">&copy; Luka Liuzzi</p>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/lukaliuzzi"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <NeumorphismBtn className="p-2">
              <FaLinkedin className="text-2xl" />
            </NeumorphismBtn>
          </a>
          <a
            href="https://github.com/lukaliuzzi"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
          >
            <NeumorphismBtn className="p-2">
              <FaGithub className="text-2xl" />
            </NeumorphismBtn>
          </a>
          <a
            href="mailto:lukaliuzzidev@gmail.com"
            target="_blank"
            rel="noopener"
            aria-label="Email"
          >
            <NeumorphismBtn className="p-2">
              <FaEnvelope className="text-2xl" />
            </NeumorphismBtn>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
