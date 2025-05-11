
import { faBell, faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from "@mantine/core";
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <div className="w-full bg-slate-950  h-18 flex text-white px-6 justify-between items-center font-['Poppins']">
     <div className='flex items-center gap-1'>
      <img src="logo.png" alt="job icon" className='w-10 h-10'/>
      <Link to={"/"} className="text-2xl font-semibold italic text-white hover:text-red-berry-500 transition-all duration-300">
        JobHook
      </Link>
     </div>
      <NavLinks />
      <div className="flex gap-4 items-center">
    <Avatar src="default-avatar.png" alt="its me"/>
    <FontAwesomeIcon icon={faGear} className='text-xl bg-mine-shaft-700 border-mine-shaft-700 rounded-full p-2 transition-all duration-300 hover:text-red-berry-500 '/>
    <FontAwesomeIcon icon={faBell} className='text-xl  bg-mine-shaft-700 border-mine-shaft-700 rounded-full p-2 transition-all duration-300 hover:text-red-berry-500'/>
        
        
       
      </div>
    </div>
  )
}

export default Header;
