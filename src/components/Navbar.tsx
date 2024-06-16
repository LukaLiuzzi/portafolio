import { useEffect, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { IoClose } from "react-icons/io5"
import DarkModeSwitch from "./DarkModeSwitch/DarkModeSwitch"
import NeumorphismBtn from "../ui/buttons/NeumorphismBtn"
import { useTranslation } from "react-i18next"

const Navbar = ({
  changeLanguage,
  language,
}: {
  changeLanguage: (lng: string) => void
  language: string
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { t } = useTranslation()

  const menuItems = [
    { href: "#about", label: t("about") },
    { href: "#projects", label: t("projects") },
    { href: "#skills", label: t("skills") },
    // { href: "#process", label: t("process") },
    { href: "#contact", label: t("contact") },
  ]

  const languageItems = [
    {
      label: "ES",
      value: "es",
    },
    {
      label: "EN",
      value: "en",
    },
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      // If the menu is open, close it when the user scrolls
      if (isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    // Remove the event listener when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isOpen])

  return (
    <nav className="flex gap-6 px-4 shadow-md items-center md:justify-around md:h-20 bg-light-primary dark:bg-dark-primary md:dark:bg-dark-primary/90 dark:text-dark-text fixed top-0 left-0 w-full md:backdrop-blur-md z-50">
      <div className="text-lg font-bold md:py-0 py-4">
        <a href="#home">
          <img
            src="/logo.svg"
            alt="Logo Luka Liuzzi"
            className="w-12 rounded-full"
          />
        </a>
      </div>

      {/* Button to show/hide menu */}
      <div
        className="ml-auto md:hidden dark:text-dark-secondary cursor-pointer"
        onClick={toggleMenu}
      >
        {
          // If menu is open, show the "X" icon
          isOpen ? (
            <IoClose className="text-3xl" />
          ) : (
            <GiHamburgerMenu className="text-3xl" />
          )
        }
      </div>

      {/* Menu links */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:px-2 md:flex md:space-x-2 fixed left-0 top-20 right-0 bottom-0 md:relative md:top-0 font-bold text-xl uppercase bg-light-primary dark:bg-dark-primary md:bg-transparent md:dark:bg-transparent`}
      >
        {menuItems.map((item) => (
          <li
            className="flex md:inline-flex items-center justify-center my-4 md:my-0"
            key={item.href}
          >
            <a href={item.href} className="cursor-pointer" onClick={toggleMenu}>
              <NeumorphismBtn className="px-3 py-1 rounded-md">
                {item.label}
              </NeumorphismBtn>
            </a>
          </li>
        ))}
      </ul>
      <div className="flex gap-8 justify-center items-center">
        <select
          name="language"
          id="language"
          className="bg-light-primary dark:bg-dark-primary/90 dark:text-dark-text rounded-md px-2 py-2"
          onChange={(e) => changeLanguage(e.target.value)}
        >
          {languageItems.map((item) => (
            <option
              value={item.value}
              key={item.value}
              defaultChecked={language === item.value}
            >
              {item.label}
            </option>
          ))}
        </select>
        <DarkModeSwitch />
      </div>
    </nav>
  )
}

export default Navbar
