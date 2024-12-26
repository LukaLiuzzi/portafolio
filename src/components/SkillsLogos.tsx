import LogoJs from "../assets/logo-javascript.svg"
import LogoHtml from "../assets/html-1.svg"
import LogoCss from "../assets/css-3.svg"
import LogoSass from "../assets/sass-1.svg"
import LogoReact from "../assets/react-2.svg"
import LogoReactNative from "../assets/react-native-1.svg"
import LogoNode from "../assets/nodejs.svg"
import LogoExpress from "../assets/express-109.svg"
import LogoMongo from "../assets/mongodb-icon-1.svg"
import LogoNext from "../assets/next-js.svg"
import LogoGit from "../assets/git-icon.svg"
import LogoTailwind from "../assets/tailwindcss.svg"
import LogoBootstrap from "../assets/bootstrap-5-1.svg"
import LogoTypescript from "../assets/typescript.svg"
import LogoNpm from "../assets/npm.svg"
import mysqlLogo from "../assets/mysql-6.svg"
import sqlite from "../assets/sqlite.svg"
import Logo from "./Logo"
import LogoExpo from "../assets/expo-icon.svg"

const SkillsLogos: React.FC = () => {
  return (
    <div className="mt-12 text-xl">
      <h3 className="font-bold text-2xl">Frontend</h3>
      <div className="flex items-center gap-6 flex-wrap mt-8">
        <Logo src={LogoHtml} title="HTML" />
        <Logo src={LogoCss} title="CSS" />
        <Logo src={LogoJs} title="JavaScript" />
        <Logo src={LogoTypescript} title="TypeScript" />
        <Logo src={LogoSass} title="Sass" />
        <Logo src={LogoTailwind} title="Tailwind" />
        <Logo src={LogoBootstrap} title="Bootstrap" />
      </div>
      <h3 className="font-bold text-2xl mt-8">Librerias - Frameworks</h3>
      <div className="flex items-center gap-6 flex-wrap mt-8">
        <Logo src={LogoReact} title="React" />
        <Logo src={LogoNext} title="Next" changeColor />
        <Logo src={LogoReactNative} title="React Native" />
        <Logo src={LogoExpo} title="Expo" changeColor />
        <Logo src={LogoExpress} title="Express" changeColor />
      </div>
      <h3 className="font-bold text-2xl mt-8">Backend</h3>
      <div className="flex items-center gap-6 flex-wrap mt-8">
        <Logo src={LogoNode} title="Node" />
        <Logo src={LogoMongo} title="MongoDB" />
        <Logo src={mysqlLogo} title="MySQL" />
        <Logo src={sqlite} title="SQLite" />
        <Logo src={LogoGit} title="Git" />
        <Logo src={LogoNpm} title="NPM" />
      </div>
    </div>
  )
}

export default SkillsLogos
