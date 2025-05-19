import Marquee from "react-fast-marquee";
import { companies } from "../../data/data";
const Companies = () => {
  return (
    <div className="p-4 bg-slate-950 ">
         <div className="text-4xl text-center text-slate-300 font-bold [&>span]:text-red-berry-600">Trusted By <span>1000+ Companies</span></div>
         <Marquee pauseOnHover={true} speed={50} className="bg-slate-950 rounded-lg mt-4">
            {
              companies.map((company, index) => (
                <div key={index} className="mx-8 px-2 py-1 mt-2">
                    <img src={`/companies/${company}.png`} alt={company} className="h-14" />
                </div>))
            }
         </Marquee>
    </div>
  )
}

export default Companies
