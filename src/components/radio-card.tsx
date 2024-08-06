import { Image } from "@nextui-org/image";
import { Card, CardContent, CardHeader } from "./ui/card";

export function RadioCard({ id = 1 }) {
    const url = `https://nextui-docs-v2.vercel.app/images/fruit-${id}.jpeg`
    return (
        <Card className='hover:cursor-pointer'>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2" />
            <CardContent>
                <Image
                    className='rounded-xl object-cover transition-all duration-300 ease-in-out hover:scale-110'
                    width={180}
                    height={120}
                    src={url}                />
                <div className="text-xl font-bold">Radio name {id}</div>
                <p className="text-xs text-muted-foreground">
                    Country name
                </p>
            </CardContent>
        </Card>
    )
}