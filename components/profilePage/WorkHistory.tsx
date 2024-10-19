import { Button } from "../ui/button";

const WorkHistory = () => {
  const WorkOnUpwork = [
    {
      title: "Frontend Developer",
      startDate: "Aug 28, 2024",
      endDate: "Sep 28, 2024",
      Amount: "$1000",
    },
    {
      title: "Frontend Developer",
      startDate: "Aug 28, 2024",
      endDate: "Sep 28, 2024",
      Amount: "$1000",
    },
    {
      title: "Frontend Developer",
      startDate: "Aug 28, 2024",
      endDate: "Sep 28, 2024",
      Amount: "$1000",
    },
  ];
  return (
    <div className="bg-white p-4 px-8 my-4 rounded-lg border-b border-slate-300">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold">Work History</h3>
        <Button variant="outline" className="">
          View All
        </Button>
      </div>
      <div className="mt-4">
        {WorkOnUpwork.map((work, index) => (
          <div
            key={index}
            className="border-b border-slate-300 py-4 hover:bg-slate-200 cursor-pointer rounded-lg p-2 px-4 my-2"
          >
            <div className="flex justify-between">
              <h4 className="text-lg font-semibold hover:underline">
                {work.title}
              </h4>
              <p className="text-sm text-slate-500">
                {work.startDate} - {work.endDate}
              </p>
            </div>
            <p className="text-sm text-slate-500">Amount: {work.Amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkHistory;
