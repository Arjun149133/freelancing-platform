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
    <div className="">
      <GoogleForm />
      <Tabs defaultValue="signup" className="w-[400px] ">
        <TabsList className="grid w-full grid-cols-2 ">
          <TabsTrigger value="signup">SignUp</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card className="">
            <CardHeader>
              <CardTitle className=" font-bold">SignUp</CardTitle>
            </CardHeader>
            <CardContent>
              <form action={signUp} className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input name="email" defaultValue="" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input name="password" type="password" defaultValue="" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input
                    name="confirmPassword"
                    type="password"
                    defaultValue=""
                  />
                </div>
                <Button type="submit" className="">
                  submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="login">
          <Card className="   ">
            <CardHeader>
              <CardTitle className=" font-bold">Login</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input name="email" defaultValue="" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input name="password" type="password" defaultValue="" />
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
