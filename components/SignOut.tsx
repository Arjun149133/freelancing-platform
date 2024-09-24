"use client";
import { Button } from "./ui/button";
import { signout } from "@/lib/auth-actions";

const SignOut = () => {
  return <Button onClick={() => signout()}>Sign Out</Button>;
};

export default SignOut;
