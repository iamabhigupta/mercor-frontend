import bgSvg from "./assets/bg-svg.svg"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <main className="relative flex h-screen w-screen flex-col justify-between bg-black text-white">
      <img src={bgSvg} alt="bgSvg" className="absolute h-full w-full" />
      <Navbar />
      <MainContent />
      <Footer />
    </main>
  )
}

export default App
