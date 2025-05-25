import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="bg-slate-950 pt-10 pb-8 px-8">
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-col  w-[25%] gap-4">
        <div className='flex items-center gap-1'>
      <img src="logo.png" alt="job icon" className='w-10 h-10'/>
      <Link to={"/"} className="text-2xl font-semibold italic text-white hover:text-red-berry-500 transition-all duration-300">
        JobHook
      </Link>
     </div>
     <div className="text-gray-300">Job portal with user profiles, skill updates, certifications, work experience and admin job postings.</div>
     <div className="flex gap-4">
        <FontAwesomeIcon icon={faInstagram} className="text-gray-300 text-2xl hover:text-red-berry-600"/>
        <FontAwesomeIcon icon={faFacebook} className="text-gray-300 text-2xl  hover:text-red-berry-600"/>
        <FontAwesomeIcon icon={faTwitter} className="text-gray-300 text-2xl  hover:text-red-berry-600"/>
     </div>
        </div>
        <div>
            <div className="text-gray-300 text-lg font-semibold mb-2">Quick Links</div>
            <ul className="text-gray-400">
                <li className="mb-1"><Link to="/">Home</Link></li>
                <li className="mb-1"><Link to="/about">About Us</Link></li>
                <li className="mb-1"><Link to="/contact">Contact Us</Link></li>
                <li className="mb-1"><Link to="/jobs">Jobs</Link></li>
            </ul>
        </div>
        <div>
            <div className="text-gray-300 text-lg font-semibold mb-2">Resources</div>
            <ul className="text-gray-400">
                <li className="mb-1"><Link to="/blog">Blog</Link></li>
                <li className="mb-1"><Link to="/faq">FAQ</Link></li>
                <li className="mb-1"><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li className="mb-1"><Link to="/terms-of-service">Terms of Service</Link></li>
            </ul>
        </div>
        <div>
             <div className="text-gray-300 text-lg font-semibold mb-2">Support</div>
            <ul className="text-gray-400">
                <li className="mb-1"><Link to="/help">Help Center</Link></li>
                <li className="mb-1"><Link to="/contact-support">Contact Support</Link></li>
                <li className="mb-1"><Link to="/feedback">Feedback</Link></li>
                <li className="mb-1"><Link to="/report-issue">Report an Issue</Link></li>
            </ul>
        </div>
      </div>
      <div>
        <hr  className="text-gray-300"/>
        <div className="text-gray-400 text-center mt-4">
        © {new Date().getFullYear()} JobHook. All rights reserved.
         </div>
      </div>
    </div>
  )
}

export default Footer
