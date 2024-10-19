import { DeleteIcon, Edit2Icon, Trash } from "lucide-react";
import EditButton from "./EditButton";

const Education = () => {
  const Education = [
    {
      id: 1,
      school: "University of California, Los Angeles",
      degree: "B.S. Computer Science",
      startDate: "2017",
      endDate: "2021",
      location: "Los Angeles, CA",
    },
    {
      id: 2,
      school: "University of California, Los Angeles",
      degree: "B.S. Computer Science",
      startDate: "2017",
      endDate: "2021",
      location: "Los Angeles, CA",
    },
    {
      id: 3,
      school: "University of California, Los Angeles",
      degree: "B.S. Computer Science",
      startDate: "2017",
      endDate: "2021",
      location: "Los Angeles, CA",
    },
  ];
  return (
    <div className=" p-4 px-8 ">
      <div className=" relative my-2">
        <h1 className=" font-bold text-2xl">Education</h1>
        <EditButton className=" top-0 left-[122px]" />
      </div>
      <div>
        {Education.map((edu) => {
          return (
            <div
              key={edu.id}
              className=" flex p-4 my-4 border border-slate-300 rounded-lg"
            >
              <div className=" w-full">
                <h2 className=" text-lg font-semibold">{edu.school}</h2>
                <p className=" text-slate-800">
                  {edu.degree} | {edu.startDate} - {edu.endDate}
                </p>
                <p className=" text-slate-800">{edu.location}</p>
              </div>
              <div className=" flex justify-end w-full space-x-4 pr-4 items-center">
                <div className=" flex items-center justify-center cursor-pointer hover:bg-slate-100 rounded-full w-10">
                  <Edit2Icon className=" rounded-full h-10" />
                </div>
                <div className=" flex items-center justify-center cursor-pointer hover:bg-slate-100 rounded-full w-10">
                  <Trash className=" rounded-full h-10" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
