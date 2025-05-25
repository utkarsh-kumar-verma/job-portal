import { Avatar, Button, TextInput } from "@mantine/core"


const DreamJob = () => {
  return (
    <div className="flex items-center px-20">
      <div className="flex flex-col w-45%">
        <div className="text-6xl font-bold text-gray-200 text-center [&>span]:text-red-berry-500">Find Your <span>Dream Job</span> with Us</div>
        <div className="text-md text-gray-300 text-center">
            Good jobs are hard to find, but we make it easy for you.
            We have a wide range of job listings from top companies.
            Whether you are looking for a full-time position, part-time job, or internship
            we have something for everyone.
        </div>
        <div className="flex gap-4 mt-8 items-center">
             <TextInput
             className="rounded-lg gap-3 px-2 py-1 text-gray-300 [&_input]:!text-gray-300 [&_input]:!bg-slate-900"
      variant="filled"
      label="Job Title"

      placeholder="Software Engineer"/>
    
     <TextInput
        className="bg-mine-shaft-950 rounded-lg gap-3 px-2 py-1 text-gray-300  [&_input]:!text-gray-300  [&_input]:!bg-slate-900 "
      variant="filled"
      label="Job Type"
      placeholder="Full Time"/>

      <Button className="mt-6 !bg-red-berry-600">Search</Button>
        </div>
      </div>
      <div>
        <div className="w-[30rem] items-center relative">
            <img src="landing-img.png" alt="" />
        </div>
       {/* Sticker1 */}
       <div className="w-fit border border-red-berry-600 rounded-xl p-4 backdrop:backdrop-blur-sm absolute top-[28%] right-[5%]">
        <div className="text-center text-slate-200">10K+ got Job</div>
        <Avatar.Group>
             <Avatar src="default-avatar.png" alt="its me"/>
              <Avatar src="default-avatar.png" alt="its me"/>
               <Avatar src="default-avatar.png" alt="its me"/>
               <Avatar>+5</Avatar>
        </Avatar.Group>
       </div>
       {/* Sticker2 */}
      
      </div>
    </div>
  )
}

export default DreamJob
