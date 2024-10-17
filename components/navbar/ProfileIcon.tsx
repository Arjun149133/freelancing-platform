import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { BellIcon, LogOutIcon, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const ProfileIcon = () => {
  return (
    <div className=" grow flex justify-end space-x-4 mx-2 mr-5">
      <div className=" flex justify-center items-center relative">
        <Link href={"/notifications"}>
          <BellIcon className=" cursor-pointer" />
          <span className="absolute top-2 left-3 h-3 w-3 bg-red-500 rounded-full"></span>
        </Link>
      </div>
      <DropdownMenu>
        <div className=" relative flex justify-center items-center shadow-md">
          <DropdownMenuTrigger className=" cursor-pointer flex justify-center items-center">
            <Image
              className="h-10 w-10 rounded-full object-cover border-2 border-gray-300"
              src={"/photos/rand-img-1.jpg"}
              alt="profile"
              height={20}
              width={20}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" w-[200px] bg-white text-md shadow-sm p-2 absolute top-0 right-0">
            <DropdownMenuItem className=" p-2 m-2 flex justify-center cursor-pointer">
              <div className=" flex justify-center items-center">
                <Image
                  className="h-9 w-9 rounded-full object-cover border-2 border-gray-300"
                  src={"/photos/rand-img-1.jpg"}
                  alt="profile"
                  height={20}
                  width={20}
                />
              </div>
              <div className=" flex flex-col grow justify-center items-center">
                <span className="">Akshitha</span>
                <span className=" text-slate-500 text-sm">Freelancer</span>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator className=" shadow-md border border-gray-200" />
            <DropdownMenuItem className=" m-1 p-1 flex justify-center cursor-pointer">
              <div className=" flex items-center w-1/4">
                <UserRound className=" h-5 w-5" />
              </div>
              <span className="flex w-3/4">Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className=" m-1 p-1 flex justify-center cursor-pointer">
              <div className=" flex items-center w-1/4">
                <BellIcon className=" h-5 w-5" />
              </div>
              <span className="flex w-3/4">Notifications</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className=" shadow-md border border-gray-200" />
            <DropdownMenuItem className=" flex justify-center items-center p-2 m-2 cursor-pointer">
              <LogOutIcon className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </div>
      </DropdownMenu>
    </div>
  );
};

export default ProfileIcon;
