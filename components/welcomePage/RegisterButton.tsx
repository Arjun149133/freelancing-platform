"use client";

import { redirect, useRouter } from "next/navigation";
import { Button } from "../ui/button";

const RegisterButton = () => {
  const router = useRouter();
  return (
    <Button
      className=""
      onClick={() => {
        router.push("/register");
      }}
    >
      Register
    </Button>
  );
};

export default RegisterButton;
