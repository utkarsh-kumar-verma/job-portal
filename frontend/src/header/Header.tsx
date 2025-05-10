import { Avatar } from "@mantine/core";

const Header = () => {
  return (
    <div className="w-full bg-black h-18 flex text-white px-6 justify-between items-center">
      <div className="text-2xl font-semibold italic text-white">
        JobHook
      </div>
      <div className="flex gap-4">
        <a href="" className="transition-all duration-300 hover:text-green-500 hover:underline">Find Job</a>
        <a href="" className="transition-all duration-300 hover:text-green-500 hover:underline">Find Talents</a>
        <a href="" className="transition-all duration-300 hover:text-green-500 hover:underline">Upload Jobs</a>
        <a href="" className="transition-all duration-300 hover:text-green-500 hover:underline">About Us</a>
      </div>
      <div className="flex gap-4">
        <Avatar src="https://png.pngtree.com/element_our/png/20181227/settings-glyph-black-icon-png_292947.jpg" alt="settings"/>
        <Avatar src="https://static.vecteezy.com/system/resources/previews/000/441/411/original/notification-vector-icon.jpg" alt="profile"/>
        <Avatar src="https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg?semt=ais_hybrid&w=740" alt="its me"/>
      </div>
    </div>
  )
}

export default Header;
