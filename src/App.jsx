
import { useContext } from "react"
import "boxicons"
import Contact from "./components/Contact"
import DarkMode from "./components/DarkModeButton/DarkMode"
import Footer from "./components/Footer"
import Intro from "./components/Intro"
import Portfolio from "./components/Portfolio/Portfolio"
import Technologies from "./components/Technologies/Technologies"
import ThemeContext from "./components/context/ThemeContext"
import AboutMe from "./components/AboutMe"







function App() {
  const {theme, handleThemeSwitch} = useContext(ThemeContext)

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed p-2 z-10 right-20 top-4 bg-slate-600 dark:bg-slate-300 text-lg text-slate-300 dark:text-slate-600 rounded-xl"
      >
        <DarkMode theme={theme} />
      </button>

      <div className=" flex flex-col items-center justify-center w-11/12 m-auto ">
        {/* <NavComp/>  */}
        <Intro className="" />
        <AboutMe/>
        <Technologies/>
        <Portfolio />
        <Contact/>
        <Footer />
      </div>
    </>
  )
}

export default App
