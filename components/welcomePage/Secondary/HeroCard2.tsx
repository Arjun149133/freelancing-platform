import React from "react";
import ActionButton from "./ActionButton";

const HeroCard2 = () => {
  return (
    <div className="lg:h-[100vh]  w-full  mt-12 bg-welcome-secondary-bg bg-cover rounded-lg p-8 flex  flex-wrap">
      <div className="w-full md:w-1/2 text-slate-50 mb-8 md:mb-0 backdrop-blur-sm">
        <div className="backdrop-blur-sm mb-4">
          <h1 className="text-4xl font-bold">Your Gateway to Top Talent</h1>
          <h2 className="text-3xl italic mt-2">
            Transform Your Ideas into Action
          </h2>
        </div>
        <p className="text-lg leading-relaxed">
          At OnHire, we connect you with top freelancers to meet your unique
          project needs. Whether you need a quick turnaround or a dedicated team
          for long-term collaboration, our skilled professionals are here to
          help you succeed. Discover how easy it is to find the right talent and
          streamline your workflow.
        </p>
      </div>
      <div className="w-full  flex flex-col justify-between ">
        <h1 className="text-xl text-white font-semibold mb-4 text-left ">
          Choose Your Path:
        </h1>
        <div className="flex flex-wrap justify-between gap-4 mb-4 p-2">
          <ActionButton
            title="Create Your Project"
            description="Let freelancers know what you need and get proposals."
          />
          <ActionButton
            title="Discover Talent"
            description="Explore top freelancers ready to tackle your projects."
          />
          <ActionButton
            title="Assemble Your Team"
            description="Build a dedicated team for ongoing support and growth."
          />
        </div>
      </div>
    </div>
  );
};

export default HeroCard2;
