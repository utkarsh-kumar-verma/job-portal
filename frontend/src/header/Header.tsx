
import { faBell, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from "@mantine/core";

const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 h-18 flex text-white px-6 justify-between items-center font-['Poppins']">
     <div className='flex items-center gap-1'>
      <img src="logo.png" alt="job icon" className='w-10 h-10'/>
      <div className="text-2xl font-semibold italics text-white hover:text-bright-sun-400 transition-all duration-300">
        JobHook
      </div>
     </div>
      <div className="flex gap-4">
        <a href="" className="transition-all duration-300 hover:text-bright-sun-400 hover:underline">Find Job</a>
        <a href="" className="transition-all duration-300 hover:text-bright-sun-400 hover:underline">Find Talents</a>
        <a href="" className="transition-all duration-300 hover:text-bright-sun-400 hover:underline">Upload Jobs</a>
        <a href="" className="transition-all duration-300 hover:text-bright-sun-400 hover:underline">About Us</a>
      </div>
      <div className="flex gap-4 items-center">
    <FontAwesomeIcon icon={faGear} className='text-xl border-1 rounded-full p-2 transition-all duration-300 hover:text-bright-sun-400 '/>
    <FontAwesomeIcon icon={faBell} className='text-xl border-1 rounded-full p-2 transition-all duration-300 hover:text-bright-sun-400 '/>
        
          <Avatar src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740" alt="its me"/>
       
      </div>
    </div>
  )
}

export default Header;
