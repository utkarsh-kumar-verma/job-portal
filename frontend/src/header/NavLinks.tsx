import { Link } from "react-router-dom"

const NavLinks = () => {
    const links = [
        { name: 'Find Jobs', path: '/find-jobs' },
        { name: 'Find Talent', path: '/find-talents' },
        { name: 'Upload Jobs', path: '/upload-jobs' },
        { name: 'About Us', path: '/about-us' },
    ]
    return (
        <div className="flex gap-4">
            {links.map((link, index) => (
                <Link 
                    key={index} 
                    to={link.path} 
                    className="transition-all duration-300 hover:text-red-berry-500 hover:underline"
                >
                    {link.name}
                </Link>
            ))}
        </div>
    )
}

export default NavLinks
