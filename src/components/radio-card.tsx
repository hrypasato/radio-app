import { Card, CardContent, CardHeader } from "./ui/card";
import { Station } from "@/data/station";
import { useStation } from "@/zustand/store";
import { toast } from "./ui/use-toast";


interface RadioCardProps {
    station: Station
}


export function RadioCard({ station }:RadioCardProps ) {
    const { updateStation } = useStation();

    const playStation = () => {
        updateStation(station);
        toast({
            title: "Now playing:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{station.name}</code>
                </pre>
            ),
        })
    }

    return (
        <Card className='hover:cursor-pointer hover:bg-gray-100' onClick={playStation} >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2" />
            <CardContent>
                <img 
                    className="rounded-xl object-cover transition-all duration-300 ease-in-out hover:scale-110" 
                    src={station.favicon ? station.favicon : "https://picsum.photos/200"} 
                    width={150} 
                    height={120} alt=""/>
                <div className="text-xl font-bold">{station.name}</div>
                <p className="text-xs text-muted-foreground">
                    {station.country}
                </p>
            </CardContent>
        </Card>
    )
}

function playStation() {
    throw new Error("Function not implemented.");
}
