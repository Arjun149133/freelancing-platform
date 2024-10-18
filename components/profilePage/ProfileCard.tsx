import { Edit2Icon } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const ProfileCard = () => {
  return (
    <div className="flex p-6 border-b border-slate-300">
      <div className=" m-1 mx-4 mr-7 relative">
        <Image
          className="h-20 w-20 rounded-full object-cover border-2 border-gray-300"
          src={"/photos/rand-img-1.jpg"}
          alt="profile"
          height={100}
          width={100}
        />
        <span className=" absolute top-12 left-14 bg-slate-200 rounded-full p-2 cursor-pointer">
          <Edit2Icon className=" h-4 w-4" />
        </span>
      </div>
      <div className="flex flex-col items-center p-1 py-3">
        <h1 className=" text-xl font-bold">Akshitha Y.</h1>
        <span className=" w-full text-slate-500 text-sm">Freelancer</span>
      </div>
      <div className=" grow flex justify-end p-2">
        <div className=" flex justify-center items-start space-x-7">
          <Button variant="secondary" className=" border border-slate-400">
            <Link href="/freelancers/id">See Public View</Link>
          </Button>
          <Button className="">Edit Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
