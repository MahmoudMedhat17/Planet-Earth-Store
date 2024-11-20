import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Searchbar = () => {
  return (
    <div className="flex items-center gap-2">
      <Input
        placeholder="Search products..."
        className="border-gray-400 placeholder:text-gray-600"
      />
      <div className="p-2 bg-secondary hover:bg-primary hover:duration-300 cursor-pointer">
        <Search className="text-white" />
      </div>
    </div>
  );
};

export default Searchbar;
