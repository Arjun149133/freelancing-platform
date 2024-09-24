"use client";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { signInWithGoogle } from "@/lib/auth-actions";

const GoogleForm = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Button
        onClick={() => signInWithGoogle()}
        className="mt-4 dark:bg-black text-white font-semibold py-2 px-6 rounded-lg shadow-lg w-3/4 flex items-center
      bg-[#104eb3]
      hover:bg-[#0a4fbb]
      dark:hover:bg-[#181818] 
      justify-center lg:w-1/2"
      >
        <div className="flex items-center justify-center mr-2">
          <FcGoogle className="text-xl" /> {/* Adjust the size here */}
        </div>
        <span>Continue with Google</span>
      </Button>
      <div className="w-full flex items-center my-3 lg:w-1/2">
        <hr className="my-4 border-gray-600 w-full" />
        <span className="px-2 dark:text-gray-300">or</span>
        <hr className="my-4 border-gray-600 w-full" />
      </div>
    </div>
  );
};

export default GoogleForm;
