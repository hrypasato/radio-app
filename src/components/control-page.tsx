import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

import { useOffset } from "@/zustand/store";

export const ControlPage = () => {
    const { offset, increment, decrement } = useOffset();

    return (
        <div className="relative">
            <div className="absolute bottom-0 w-full flex justify-evenly">
                <Button disabled={offset === 0} onClick={decrement}>
                    <ArrowLeft className="mr-2" /> Prev
                </Button>
                <Button onClick={increment}>
                    Next
                    <ArrowRight className="mr-2" />
                </Button>
            </div>
        </div>
    );
}