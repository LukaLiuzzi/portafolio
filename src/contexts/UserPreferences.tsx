import { createContext, useState, useEffect, useContext } from "react"

// Create a context for user preferences
const UserPreferencesContext = createContext({
  theme: "light",
  toggleTheme: () => {},
})

interface Props {
  children: React.ReactNode
}

// Create a provider component for the UserPreferencesContext
const UserPreferencesProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light") // Default value is "light"

  // Function to toggle the theme from light to dark and viceversa
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  useEffect(() => {
    // Listen for changes in the OS appearance preferences
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const handleChange = () => {
      setTheme(mediaQuery.matches ? "dark" : "light")
    }
    mediaQuery.addEventListener("change", handleChange)
    // Remove the listener when the component unmounts
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    }
  }, [])

  useEffect(() => {
    // Switch body class depending on the theme
    const body = document.querySelector("body")
    if (body) {
      body.className = theme === "light" ? "light" : "dark"
    }
  }, [theme])

  return (
    <UserPreferencesContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </UserPreferencesContext.Provider>
  )
}

export const useUserPreferences = () => useContext(UserPreferencesContext)

export default UserPreferencesProvider
