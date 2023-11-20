import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import Process from "./components/Process"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import UserPreferencesProvider from "./contexts/UserPreferences"

export default function App() {
  return (
    <>
      <UserPreferencesProvider>
        <header id="home">
          <Navbar />
          <Layout>
            <Hero />
            <main>
              <About />
              <Skills />
              <Projects />
              <Process />
              <Contact />
            </main>
          </Layout>
          <footer>
            <Footer />
          </footer>
        </header>
      </UserPreferencesProvider>
    </>
  )
}
