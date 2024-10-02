import * as React from "react";
import { ArrowRightIcon, ZapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface data {
  name: string;
  bio: string;
  pricePerHr: number;
  profile: string,
  currentStatus: string,
  rating : number,
  skills: string[];
}
interface props{
  data: data
}

const  ProfileCard:React.FC<props> = ({data}) => {
  return (
    <div className="flex justify-center flex-1">
      <Card className="flex flex-col sm:flex-row w-full min-h-[250px] max-w-[320px] sm:max-w-2xl overflow-hidden bg-white text-slate-900 transition-all duration-300 ease-out  hover:border-[#104eb3] cursor-pointer group">
        <div className="w-full sm:w-1/3 p-4 flex items-center justify-center sm:justify-start">
          <div className="relative">
            <img
              src={data.profile}
              alt="Profile"
              className="rounded-full w-24 h-24 sm:w-32 sm:h-32 object-cover border-2 border-slate-300"
            />
            <Badge className="absolute bottom-0 right-0 bg-[#104eb3] text-white text-xs">
              {data.currentStatus}
            </Badge>
          </div>
        </div>
        <div className="flex w-full sm:w-2/3 flex-col p-4">
          <CardHeader className="p-0 space-y-1 mb-4">
            <h2 className="text-xl font-bold">{data.name}</h2>
            <p className="text-sm text-slate-600">{data.bio}</p>
          </CardHeader>
          <CardContent className="p-0 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">${data.pricePerHr}/hr</span>
              <div className="flex items-center">
                <ZapIcon className="w-4 h-4 text-[#104eb3] mr-1" />
                <span className="text-sm"> {data.rating} rating</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {data.skills.slice(0, 4).map((str, idx) => (
                <Badge key={idx} variant="secondary">
                  {str}
                </Badge>
              ))}
              {data.skills.length > 4 ? (
                <Badge variant="secondary">{data.skills.length - 4}+</Badge>
              ) : (
                ""
              )}
            </div>
          </CardContent>
          <CardFooter className="p-0 mt-4">
            <Button className="w-full bg-[#104eb3] hover:bg-[#0e44a0] text-white transition-all duration-300 ease-in-out transform group-hover:bg-[#0e44a0]  group-hover:scale-105 focus:outline-none fcouse:ring-2 focus:ring-opacity-50">
              View profile
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-all duration-300 ease-in-out group-hover:translate-x-1" />
            </Button>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
}

export default ProfileCard;