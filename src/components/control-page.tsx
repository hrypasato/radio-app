import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const ControlPage = () => {
    return (
        <div className="relative">
            <div className="absolute bottom-0 w-full flex justify-evenly">
                <Button>
                    <ArrowLeft className="mr-2" /> Prev
                </Button>
                <Button>
                    Next
                    <ArrowRight className="mr-2" />
                </Button>
            </div>
        </div>
    );
}