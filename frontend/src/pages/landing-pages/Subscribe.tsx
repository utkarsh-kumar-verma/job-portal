import { TextInput, Button } from "@mantine/core"


const Subscribe = () => {
  return (
    <div className="w-full bg-slate-950 flex  justify-center gap-2 items-center py-8">
      <div className="text-4xl text-center w-[30%]  text-slate-300 font-bold [&>span]:text-red-berry-600 ">Never want to miss<span> any job news? </span></div>
       <TextInput
             className="rounded-lg gap-3 px-2 py-1 text-gray-300 [&_input]:!text-gray-300 [&_input]:!bg-slate-900 !w-[35%]"
                placeholder="Enter your email"
             />
        <Button className="!bg-red-berry-600">Subscribe Us</Button>
    </div>
  )
}

export default Subscribe
