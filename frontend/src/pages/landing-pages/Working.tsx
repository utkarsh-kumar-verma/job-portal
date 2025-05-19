

const Working = () => {
  return (
    <div className="bg-slate-950 p-4">
      <div className="text-4xl text-center  text-slate-300 font-bold [&>span]:text-red-berry-600 ">How It <span>Works</span></div>
      <div className="text-gray-300 text-center">Explore diverse job opportunities tailored to your skills. Start your career journey today!</div>
      
      <div className="flex justify-center items-center gap-4 mt-8">
       
        <div className="w-[30rem] items-center relative">
            <img src="./landing/landing.png" alt="" />
        </div>
        <div className="flex flex-col gap-4 items-center">
            <div>
                <div className="flex gap-2 items-center justify-around p-4 border border-red-600 rounded-lg w-120">
                    <div className="w-15 h-15 rounded-full bg-red-berry-500 flex items-center justify-center">
                        <img src="./landing/resume.png" alt="" />
                    </div>
                    <div>
                        <div className="text-red-500 text-xl font-bold">Create an account</div>
                        <div className="text-gray-300">Create a standout resume with your skills.</div>
                    </div>
                </div>
            </div>
            <div>
                 <div className="flex gap-2 items-center justify-around p-4 border border-red-600 rounded-lg w-120">
                    <div className="w-15 h-15 rounded-full bg-red-berry-500 flex items-center justify-center">
                        <img src="./landing/apply.png" alt="" />
                    </div>
                    <div>
                        <div className="text-red-500 text-xl font-bold">Apply for Job</div>
                        <div className="text-gray-300">Find and apply for jobs that match your skills.</div>
                    </div>
                </div>
            </div>
            <div>
                 <div className="flex gap-2 items-center justify-around p-4 border border-red-600 rounded-lg w-120">
                    <div className="w-15 h-15 rounded-full bg-red-berry-500 flex items-center justify-center">
                        <img src="./landing/image.png" alt="" />
                    </div>
                    <div>
                        <div className="text-red-500 text-xl font-bold">Get Hired</div>
                        <div className="text-gray-300">Connect with employers and start your new job</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Working
