"use client";

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "./password-input";
import ThemeToggle from "@/components/Theme/ThemeToggle";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import "../../../globals.css";
const SignupPage: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  return (
    <div className="dark:bg-[#0a0a0a] w-full h-screen flex  flex-wrap items-center justify-center py-12 px-4 overflow-auto bg-[#fff]">
      <div className="w-full flex justify-end">
        <ThemeToggle />
      </div>
      <div className="text-center w-full max-w-2xl">
        <h1 className="dark:text-[#d5dbe6] font-bold text-5xl mb-6 lg:text-6xl text-black">
          Welcome to Freelancers Hub
        </h1>
        <p className="dark:text-gray-300 text-lg mb-6 lg:text-xl text-gray-600">
          Join our community of talented freelancers.
        </p>
        <div className="flex flex-col items-center w-full">
          <Button
            className="mt-4 dark:bg-black text-white font-semibold  py-2 px-6 rounded-lg shadow-lg  w-3/4 flex items-center
            bg-[#104eb3]
            hover:bg-[#0a4fbb]
          dark:hover:bg-[#181818] 
          justify-center lg:w-1/2"
          >
            <FcGoogle className="mr-2" />
            <span>Continue with Google</span>
          </Button>
          <div className="w-full flex items-center mt-4 lg:w-1/2">
            <hr className="my-4 border-gray-600 w-full" />
            <span className="px-2 text-black dark:text-gray-300">or</span>
            <hr className="my-4 border-gray-600 w-full" />
          </div>
        </div>

        <div className="flex flex-col items-center w-full lg:w-3/4 mx-auto max-h-[50vh]">
          <div className=" pb-12">
            <Tabs defaultValue="login" className="w-[400px] ">
              <TabsList className="grid w-full grid-cols-2 bg-[] dark:bg-[#0a0a0a]">
                <TabsTrigger
                  className="data-[state=active]:bg-[#181818] data-[state=active]:text-white"
                  value="login"
                >
                  login
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="data-[state=active]:bg-[#181818] data-[state=active]:text-white"
                >
                  Signup
                </TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                <Card className="bg-[] border dark:border-gray-800">
                  <CardHeader>
                    <CardTitle className="dark:text-[#f8f8f8] text-2xl font-bold">
                      Welcome back
                    </CardTitle>
                    <CardDescription className="font-medium">
                      signin to your account
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1 flex flex-wrap py-2">
                      <Label
                        className="dark:text-white text-md font-semibold"
                        htmlFor="email"
                      >
                        Email
                      </Label>
                      <Input
                        className="dark:text-gray-100 dark:bg-black"
                        type="email"
                        id="email"
                        placeholder="duarte@gmail.com"
                      />
                    </div>
                    <div className="space-y-1  flex flex-wrap py-2">
                      <Label
                        htmlFor="username"
                        className="dark:text-white 
                        font-semibold text-start py-1 w-full"
                      >
                        Password
                      </Label>
                      <PasswordInput
                        id="current_password"
                        className="dark:text-slate-300 dark:bg-black"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        autoComplete="current-password"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="mt-4 bg-[#064ab8] text-white py-2 px-6 rounded-lg hover:shadow-lg transition duration-300 ease-in-out w-full">
                      Login
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="signup">
                <Card className="bg-[]">
                  <CardHeader>
                    <CardTitle className="dark:text-[#f8f9fa] text-2xl">
                      Signup
                    </CardTitle>
                    <CardDescription>
                      Welcome! please fill the details to get started
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1 flex flex-wrap py-2">
                      <Label
                        className="dark:text-white text-md font-semibold"
                        htmlFor="email"
                      >
                        Email
                      </Label>
                      <Input
                        className="dark:text-gray-100 dark:bg-black"
                        type="email"
                        id="email"
                        placeholder="duarte@gmail.com"
                      />
                    </div>
                    <div className="space-y-1  flex flex-wrap py-2">
                      <Label
                        htmlFor="username"
                        className="dark:text-white  text-start py-1 font-semibold"
                      >
                        Password
                      </Label>
                      <PasswordInput
                        id="current_password"
                        className="dark:text-slate-300 dark:bg-black"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        autoComplete="current-password"
                      />
                    </div>
                    <div className="space-y-1  flex flex-wrap py-2">
                      <Label
                        htmlFor="username"
                        className="dark:text-white  text-start py-1 font-semibold"
                      >
                        Conform Password
                      </Label>
                      <PasswordInput
                        id="current_password"
                        className="dark:text-slate-300 dark:bg-black"
                        value={currentPassword}
                        onChange={(e) => setCurrentPassword(e.target.value)}
                        autoComplete="current-password"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="mt-4 bg-[#064ab8] text-white py-2 px-6 rounded-lg hover:shadow-lg transition duration-300 ease-in-out w-full">
                      Continue
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SignupPage;
