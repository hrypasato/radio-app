import { cn } from "@/lib/utils"
import { Image } from "@nextui-org/image";
import { Button } from "./ui/button"

import { Playlist } from "../data/playlists"
import { Globe, Home, Languages } from "lucide-react"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"
import { RadioPlayer } from "./player"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { useStation, useList } from "@/zustand/store";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[]
}

export function Sidebar({ className }: SidebarProps) {
  const { listByCountry, listByLanguage, listByTag } = useList();
  const { station } = useStation();
  const language = station?station.language[0]:"en";


  const searchByLanguage = async () => {
    await listByLanguage(language);
  }

  if(station == null) return (<></>)

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Information
          </h2>
          <div className="space-y-1">
            <Button onClick={ () => listByCountry(station.countryCode) } variant="ghost" className="w-full justify-start">
              <Home className="mr-2" />
              {station.country}
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Globe className="mr-2" />
              {station.homepage}
            </Button>
            <Button onClick={ searchByLanguage } variant="ghost" className="w-full justify-start">
              <Languages className="mr-2" />
              {station.language[0]}
            </Button>
          </div>
        </div>
        <Separator/>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Tags
          </h2>
          <div className="space-y-1">
            {station.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="py-1 px-2 m-2 hover:cursor-pointer" onClick={() => listByTag(tag)}>{tag}</Badge>
            ))}
          </div>
        </div>
        <Separator/>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Stats
          </h2>
          <div className="space-y-1">
            <div className="flex space-between items-center">
              <div className="flex-1 text-center">
                <div className="text-5xl font-bold tracking-tighter">
                  {station.votes}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Votes
                </div>
              </div>
              <div className="flex-1 text-center">
                <div className="text-5xl font-bold tracking-tighter">
                  {station.clickCount}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Clicks count
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator/>

        <div className="flex justify-center">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2" />
            <CardContent>
                <Image
                    className='rounded-xl object-cover'
                    width={180}
                    height={120}
                    src={station.favicon ? station.favicon : "https://picsum.photos/200"} />
                <div className="text-xl font-bold">{station.name}</div>
                <p className="text-xs text-muted-foreground">
                    {station.country}
                </p>
            </CardContent>
            <CardFooter>
              <RadioPlayer source={station.urlResolved} />
            </CardFooter>
        </Card>
        </div>
      </div>
    </div>
  )
}
