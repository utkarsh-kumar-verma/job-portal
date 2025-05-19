import Header from "../header/Header"
import Companies from "./landing-pages/Companies"
import DreamJob from "./landing-pages/DreamJob"
import Working from "./landing-pages/Working"


const HomePage = () => {
  return (
    <div className="w-full h-screen bg-slate-950">
      <Header />
      <DreamJob />
      <Companies />
      {/* <JobCategory /> */}
      <Working/>
    </div>
  )
}

export default HomePage
