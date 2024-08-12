import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Search = () => {
    return (
        <div className="space-between flex items-center">
            <Input className='mr-4' type="email" placeholder="Radio name" />
            <div className="ml-auto mr-4">
                <Button onClick={() => { }} type="submit">
                    <SearchIcon className="mr-2" />Search</Button>
            </div>
        </div>
    );
} 