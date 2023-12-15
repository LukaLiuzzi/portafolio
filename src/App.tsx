import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import UserPreferencesProvider from "./contexts/UserPreferences"
import { I18nextProvider } from "react-i18next"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import translations from "./translations/translations.json"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const englishTranslations = translations["en"]
const spanishTranslations = translations["es"]

// Configuración básica de i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    fallbackLng: "es",
    resources: {
      en: {
        translation: {
          ...englishTranslations,
        },
      },
      es: {
        translation: {
          ...spanishTranslations,
        },
      },
    },
  })

export default function App() {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    window.history.replaceState({}, "", `/${lng}`)
  }

  if (window.location.pathname === "/es") {
    i18n.changeLanguage("es")
  } else if (window.location.pathname === "/en") {
    i18n.changeLanguage("en")
  } else {
    window.history.replaceState({}, "", `/${i18n.language}`)
  }

  return (
    <I18nextProvider i18n={i18n}>
      <Analytics />
      <SpeedInsights />
      <UserPreferencesProvider>
        <header id="home">
          <Navbar changeLanguage={changeLanguage} language={i18n.language} />
          <Layout>
            <Hero />
            <main>
              <About />
              <Skills />
              <Projects />
              {/* <Process /> */}
              <Contact />
            </main>
          </Layout>
          <footer>
            <Footer />
          </footer>
        </header>
      </UserPreferencesProvider>
    </I18nextProvider>
  )
}
