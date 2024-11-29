import Contact from "../components/Contact"
import CustomFaq from "../components/CustomFaq"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"


const Home = () => {
  return (
    <div>
        <div className="mt-16">
            <Navbar/>

        </div>
        <div className="mt-32">
        <Hero/>

        </div>
        <div className="mt-48">
          <CustomFaq/>
        </div>
        <Contact/>
        <Footer/>
       
    </div>
  )
}

export default Home