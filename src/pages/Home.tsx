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
        <Footer/>
       
    </div>
  )
}

export default Home