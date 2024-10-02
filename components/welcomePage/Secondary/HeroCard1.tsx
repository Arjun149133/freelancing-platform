import { CheckCircle, ClipboardList, User } from "lucide-react";
import React from "react";

const HeroCard1 = () => {
  return (
    <div className="custom8-md:h-[80vh]  w-full bg-[#082b63] mt-12 flex flex-col custom7-md:flex-row overflow-hidden rounded-lg">
      <div className="w-full custom8-md:w-5/12 flex justify-center items-center order-1   h-[40%] custom7-md:h-[full] lg:h-full md:h-full custom7-md:order-2">
        <img
          className="h-full w-full custom7-md:h-full custom7-md:object-cover object-top rounded-md"
          src="/photos/welcome-img1.jpg"
          alt="hero"
        />
      </div>
      <div className=" w-full custom8-md:w-7/12 p-8 flex flex-col justify-center items-start order-2 custom7-md:order-1">
        <h1 className="lg:text-5xl custom8-md:text-3xl text-2xl text-white font-bold mb-1 text-center">
          Get Started Now!
        </h1>
        <h1 className="lg:text-5xl custom8-md:text-3xl text-2xl font-semibold text-[#26549e] mb-3">
          Your project deserves the best.
        </h1>
        <p className="lg:text-lg  mt-2  max-w-xl text-slate-200 text-left">
          Unlock your potential with top-tier freelance talent. Transform your
          projects and bring your ideas to life with our expert network.
        </p>
        <div className="mt-auto max-w-4xl text-left">
          <div className="">
            <div className="flex flex-wrap py-1">
              <User className="w-6 h-6 text-white mr-2" />
              <h3 className="mr-2 font-semibold text-slate-200">
                Access Top Talent{" "}
              </h3>
              <p className="text-slate-300">
                Find skilled freelancers ready to tackle your projects.
              </p>
            </div>
            <div className="flex flex-wrap py-1">
              <CheckCircle className="w-6 h-6 text-white mr-2" />
              <h3 className="mr-2 font-semibold text-slate-200">
                Streamlined Process
              </h3>
              <p className="text-slate-300">
                Easily manage your projects from start to finish.
              </p>
            </div>
            <div className="flex flex-wrap py-1">
              <ClipboardList className="w-6 h-6 text-white mr-2" />
              <h3 className="mr-2 font-semibold text-slate-200">
                Total Support
              </h3>
              <p className="text-slate-300">
                Get assistance every step of the way to ensure success.
              </p>
            </div>
          </div>
        </div>
        <button className="bg-white text-blue-700 font-semibold py-3 mt-auto px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300 mb-auto">
          Join Us Today
        </button>
      </div>
    </div>
  );
};

export default HeroCard1;
