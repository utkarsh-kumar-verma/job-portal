import Header from "../header/Header"
import Companies from "./landing-pages/Companies"
import DreamJob from "./landing-pages/DreamJob"
import Working from "./landing-pages/Working"
import Testimonials from "./landing-pages/Testimonials"
import Subscribe from "./landing-pages/Subscribe"
import Footer from "../footer/Footer"


const HomePage = () => {
  return (
    <div className="w-full h-screen bg-slate-950">
      <Header />
      <DreamJob />
      <Companies />
      {/* <JobCategory /> */}
      <Working/>
      <Testimonials />
      <Subscribe />
      <Footer />
      {/* <ContactUs /> */}

      {/* <Footer /> */}
    </div>
  )
}

export default HomePage
