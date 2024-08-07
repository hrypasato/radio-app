import { cn } from "@/lib/utils"
import { Image } from "@nextui-org/image";
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"

import { Playlist } from "../data/playlists"
import { Check, Globe, Home, Languages } from "lucide-react"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"
import { RadioPlayer } from "./player"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { useStation } from "@/zustand/store";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[]
}

export function Sidebar({ className, playlists }: SidebarProps) {
  const { station } = useStation();

  if(station == null) return (<></>)

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Information
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <Home className="mr-2" />
              {station.country}
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Globe className="mr-2" />
              {station.homepage}
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Languages className="mr-2" />
              {station.language}
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
              <Badge key={index} variant="outline" className="py-1 px-2 m-2 hover:cursor-pointer" onClick={() => console.log(tag)}>{tag}</Badge>
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

          {
            /**
             
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Playlists
          </h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {playlists?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M21 15V6" />
                    <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M12 12H3" />
                    <path d="M16 6H3" />
                    <path d="M12 18H3" />
                  </svg>
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea>
             */
          }
        </div>
      </div>
    </div>
  )
}
