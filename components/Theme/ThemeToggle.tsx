// components/ThemeToggle.tsx
"use client";
import React from "react";
import { useTheme } from './ThemeContext'
import { Moon, SunDim } from "lucide-react";


const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-700 dark:bg-gray-700"
    >
       {theme === "light" ? <Moon/> : <SunDim />} 
    </button>
  );
};

export default ThemeToggle;
