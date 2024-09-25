"use client";

import useAuth from "@/hooks/useAuth";

const AuthListener = () => {
  useAuth(); // Call your authentication hook
  return null; // No UI needed
};

export default AuthListener;
