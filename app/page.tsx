'use client';
import React from "react";
import ThemeToggle from "@/components/Theme/ThemeToggle";
import { Moon, SunDim } from "lucide-react";
const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex items-center justify-center">
      <ThemeToggle />
      <h1 className="text-3xl">Welcome </h1>
    </div>
  );
};

export default Home;
