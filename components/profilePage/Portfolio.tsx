import Image from "next/image";
import React from "react";
import EditButton from "./EditButton";

const Projects = [
  {
    title: "E-Commerce Website",
    description:
      "Developed a full-fledged E-Commerce website with React, Redux, and Firebase.",
    link: "",
    image:
      "https://www.upwork.com/att/download/portfolio/persons/uid/1627313864850186240/profile/projects/files/cdae3faa-d39d-4d03-b558-a8278a6280e8",
  },
  {
    title: "Twitter Clone",
    description:
      "Developed a full-fledged E-Commerce website with React, Redux, and Firebase.",
    link: "",
    image:
      "https://www.upwork.com/att/download/portfolio/persons/uid/1627313864850186240/profile/projects/files/64f029bf-3668-4e26-bd41-5debd3ac649f",
  },
  {
    title: "Canva Clone",
    description:
      "Developed a full-fledged E-Commerce website with React, Redux, and Firebase.",
    link: "",
    image:
      "https://www.upwork.com/att/download/portfolio/persons/uid/1627313864850186240/profile/projects/files/109ff0c9-96fd-44a4-9280-77a4e70ba7e9",
  },
];

const Portfolio = () => {
  return (
    <div className="p-4 px-8 border border-slate-300">
      <div className=" my-4 relative">
        <h1 className=" font-bold text-2xl">Portfolio</h1>
        <EditButton className=" top-0 left-[107px]" />
      </div>
      <div className="grid grid-cols-3 p-2">
        {Projects.map((project) => {
          return (
            <div key={project.title} className=" mx-2 w-auto ">
              {/*Todo: need to change this img to Image nextjs */}
              <img
                src={project.image}
                alt=""
                className=" rounded-lg hover:brightness-75 cursor-pointer my-2"
              />
              <h2 className=" text-wrap text-slate-800 hover:underline text-lg font-semibold cursor-pointer">
                {project.title}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
