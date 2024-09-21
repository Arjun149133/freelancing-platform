"use client";
import { Button } from "@/components/ui/button";
import { signInWithGoogle } from "@/lib/auth-actions";

const SignupPage = () => {
  return (
    <Button onClick={() => signInWithGoogle()}>Sign Up With Google</Button>
  );
};

export default SignupPage;
