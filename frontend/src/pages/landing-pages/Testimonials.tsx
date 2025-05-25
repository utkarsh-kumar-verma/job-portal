import { Avatar, Rating } from "@mantine/core";

const Testimonials = () => {
  return (
    <div className="p-4 bg-slate-950">
      <div className="text-4xl text-center text-slate-300 font-bold [&>span]:text-red-berry-600">
        What people <span>says about us</span>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {/* Testimonial 1 */}
        <div className="max-w-sm shadow-md rounded-lg p-4 flex flex-col gap-4 border border-red-berry-600 mt-8 bg-slate-950 w-[23%]">
          <div className="flex items-center gap-4">
            <Avatar src="profile3.png" alt="Alice" size="lg" radius="xl" />
            <div className="flex flex-col">
              <span className="text-red-600 text-lg font-semibold">Alice Morgan</span>
              <Rating value={4.5} readOnly fractions={2} className="text-red-600" />
            </div>
          </div>
          <p className="text-slate-300 text-sm">
            “Incredibly easy to use and helped me land a job in just two weeks. Highly recommend!”
          </p>
        </div>

        {/* Testimonial 2 */}
        <div className="max-w-sm shadow-md rounded-lg p-4 flex flex-col gap-4 border border-red-berry-600 mt-8 bg-slate-950 w-[23%]">
          <div className="flex items-center gap-4">
            <Avatar src = "profile2.png" alt="Michael" size="lg" radius="xl" />
            <div className="flex flex-col">
              <span className="text-red-600 text-lg font-semibold">Michael Chen</span>
              <Rating value={3.5} readOnly fractions={2} className="text-red-600" />
            </div>
          </div>
          <p className="text-slate-300 text-sm">
            “A decent platform with lots of opportunities. Could use some design improvements.”
          </p>
        </div>

        {/* Testimonial 3 */}
        <div className="max-w-sm shadow-md rounded-lg p-4 flex flex-col gap-4 border border-red-berry-600 mt-8 bg-slate-950 w-[23%]">
          <div className="flex items-center gap-4">
            <Avatar src="profile1.png" alt="Sofia" size="lg" radius="xl" />
            <div className="flex flex-col">
              <span className="text-red-600 text-lg font-semibold">Sofia Patel</span>
              <Rating value={5} readOnly fractions={2} className="text-red-600" />
            </div>
          </div>
          <p className="text-slate-300 text-sm">
            “Best job portal I’ve used so far. Intuitive interface and great job matches.”
          </p>
        </div>

        <div className="max-w-sm shadow-md rounded-lg p-4 flex flex-col gap-4 border border-red-berry-600 mt-8 bg-slate-950 w-[23%]">
          <div className="flex items-center gap-4">
            <Avatar src="profile4.png" alt="Sofia" size="lg" radius="xl" />
            <div className="flex flex-col">
              <span className="text-red-600 text-lg font-semibold">Chloe Brooks</span>
              <Rating value={4.25} readOnly fractions={2} className="text-red-600" />
            </div>
          </div>
          <p className="text-slate-300 text-sm">
            “I found my dream job within days! The platform is fast, reliable, and super easy to navigate.”
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Testimonials;
