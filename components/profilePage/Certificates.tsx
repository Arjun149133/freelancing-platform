import { Edit2Icon, Trash } from "lucide-react";
import EditButton from "./EditButton";

const Certificates = () => {
  const Certificates = [
    {
      id: 1,
      name: "Certificate 1",
      date: "2021-01-01",
      description: "Certificate 1 description",
    },
    {
      id: 2,
      name: "Certificate 2",
      date: "2021-01-01",
      description: "Certificate 2 description",
    },
    {
      id: 3,
      name: "Certificate 3",
      date: "2021-01-01",
      description: "Certificate 3 description",
    },
  ];
  return (
    <div className=" border border-slate-300 rounded-lg my-8">
      <div className=" p-4 px-8">
        <div className=" relative w-[175px]">
          <h1 className=" text-2xl font-bold">Certificates</h1>
          <EditButton className=" top-0 right-0" />
        </div>
        <div>
          {Certificates.map((certificate) => {
            return (
              <div
                key={certificate.id}
                className=" flex p-4 my-4 border border-slate-300 rounded-lg"
              >
                <div className=" w-full">
                  <h2 className=" text-lg font-semibold">{certificate.name}</h2>
                  <p className=" text-slate-800">{certificate.date}</p>
                  <br />
                  <p className=" text-slate-800 text-wrap">
                    {certificate.description}
                  </p>
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

export default Certificates;
