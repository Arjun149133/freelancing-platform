import { Edit2Icon, Trash } from "lucide-react";
import EditButton from "./EditButton";

const EmploymentHistory = () => {
  const Employment = [
    {
      id: 1,
      company: "Google",
      position: "Software Engineer",
      startDate: "2017",
      endDate: "2021",
      location: "Mountain View, CA",
      describion: "Worked on the Google Search team",
    },
    {
      id: 2,
      company: "Google",
      position: "Software Engineer",
      startDate: "2017",
      endDate: "2021",
      location: "Mountain View, CA",
      describion: `
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum a consectetur culpa dolorum laborum laudantium aliquid voluptates labore quo veritatis`,
    },
    {
      id: 3,
      company: "Google",
      position: "Software Engineer",
      startDate: "2017",
      endDate: "2021",
      location: "Mountain View, CA",
      describion: "Worked on the Google Search team",
    },
  ];
  return (
    <div className=" border border-slate-300 rounded-lg my-8">
      <div className=" p-4 px-8">
        <div className=" relative w-[275px]">
          <h1 className=" text-2xl font-bold">Employment History</h1>
          <EditButton className=" top-0 right-0" />
        </div>
        <div>
          {Employment.map((job) => {
            return (
              <div
                key={job.id}
                className=" flex p-4 my-4 border border-slate-300 rounded-lg"
              >
                <div className=" w-full">
                  <h2 className=" text-lg font-semibold">{job.company}</h2>
                  <p className=" text-slate-900">
                    {job.position} | {job.startDate} - {job.endDate}
                  </p>
                  <p className=" text-slate-900">{job.location}</p>
                  <br />
                  <p className=" text-slate-800 text-wrap">{job.describion}</p>
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
    </div>
  );
};

export default EmploymentHistory;
