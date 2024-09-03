import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

import { useList, useOffset } from "@/zustand/store";

export const ControlPage = () => {
    const { offset, increment, decrement } = useOffset();
    const { load } = useList();


    const onIncrement = () => {
        increment();
        load(offset);
    };

    const onDecrement = () => {
        decrement();
        load(offset);
    };

    return (
        <div className="relative">
            <div className="absolute bottom-0 w-full flex justify-evenly">
                <Button disabled={offset === 0} onClick={onDecrement}>
                    <ArrowLeft className="mr-2" /> Prev
                </Button>
                <Button onClick={onIncrement}>
                    Next
                    <ArrowRight className="mr-2" />
                </Button>
            </div>
        </div>
    );
}