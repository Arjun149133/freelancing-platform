import { signUp } from "@/actions/auth/form";
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
import GoogleForm from "./GoogleForm";

export default function SignupForm() {
  return (
    <div>
      <GoogleForm />
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
            <CardContent>
              <form action={signUp} className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input name="email" defaultValue="" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input name="password" defaultValue="" />
                </div>
                <Button type="submit" className="">
                  submit
                </Button>
              </form>
            </CardContent>
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
              <form action="" className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" defaultValue="arj@gmail.com" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" defaultValue="Pedro Duarte" />
                </div>
              </form>
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
