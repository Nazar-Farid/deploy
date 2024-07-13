import About from "../Components/About"
import Footer from "../Components/Footer"
import HeroSection from "../Components/HeroSection"
import Menu from "../Components/Menu"
import Qualities from "../Components/Qualities"
import Reservation from "../Components/Reservation"
import Team from "../Components/Team"
import WhoAreWe from "../Components/WhoAreWe"

const Home = () => {
  return (
    <>
    <HeroSection />
    <About />
    <Qualities />
    <Menu />
    <WhoAreWe />
    <Team />
    <Reservation />
    <Footer />
    </>
  )
}

export default Home