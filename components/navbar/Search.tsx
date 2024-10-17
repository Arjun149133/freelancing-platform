import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SearchBar() {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center gap-2 bg-white rounded-full shadow-lg p-1">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            className="w-full pl-10 pr-4 py-2 rounded-full border-none focus:ring-2 focus:ring-green-500"
            placeholder="Search for any Project or Skill"
            type="search"
          />
        </div>
        <Select>
          <SelectTrigger className="w-full sm:w-[180px] rounded-full border-none bg-gray-100">
            <SelectValue placeholder="Projects" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="projects" defaultChecked>
              Projects
            </SelectItem>
            <SelectItem value="freelancers">Freelancers</SelectItem>
          </SelectContent>
        </Select>
        <Button className="w-full sm:w-auto px-6 rounded-full bg-gray-700 hover:bg-gray-900 text-white">
          Search
        </Button>
      </div>
    </div>
  );
}
