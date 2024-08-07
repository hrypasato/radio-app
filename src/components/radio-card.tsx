import { Image } from "@nextui-org/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Station } from "@/data/station";
import { useStation } from "@/zustand/store";


interface RadioCardProps {
    station: Station
}


export function RadioCard({ station }:RadioCardProps ) {
    const { updateStation } = useStation();

    return (
        <Card className='hover:cursor-pointer' onClick={()=> updateStation(station)} >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2" />
            <CardContent>
                <Image
                    className='rounded-xl object-cover transition-all duration-300 ease-in-out hover:scale-110'
                    width={180}
                    height={120}
                    src={station.favicon ? station.favicon : "https://picsum.photos/200" }                />
                <div className="text-xl font-bold">{station.name}</div>
                <p className="text-xs text-muted-foreground">
                    {station.country}
                </p>
            </CardContent>
        </Card>
    )
}