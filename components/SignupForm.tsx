import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FcGoogle } from "react-icons/fc";

export default function SignupForm() {
  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <Button
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
        <div className="w-full flex items-center mt-4 lg:w-1/2">
          <hr className="my-4 border-gray-600 w-full" />
          <span className="px-2 dark:text-gray-300">or</span>
          <hr className="my-4 border-gray-600 w-full" />
        </div>
      </div>

      <Tabs defaultValue="signup" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2 bg-black">
          <TabsTrigger value="signup">SignUp</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card className=" bg-black text-slate-100 border border-black">
            <CardHeader>
              <CardTitle>SignUp</CardTitle>
              <CardDescription>
                Make changes to your signup here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card className=" bg-black text-slate-200 border border-black">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Change your login here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current login</Label>
                <Input id="current" type="login" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New login</Label>
                <Input id="new" type="login" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save login</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
