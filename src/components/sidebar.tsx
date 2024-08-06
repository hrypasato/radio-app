import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"

import { Playlist } from "../data/playlists"
import { Globe, Home, Languages } from "lucide-react"
import { Badge } from "./ui/badge"
import { Separator } from "./ui/separator"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[]
}

export function Sidebar({ className, playlists }: SidebarProps) {
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
              Ecuador
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Globe className="mr-2" />
              www.example.com
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Languages className="mr-2" />
              English
            </Button>
          </div>
        </div>
        <Separator/>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Tags
          </h2>
          <div className="space-y-1">
            <Badge variant="outline" className="py-1 px-2 m-2 hover:cursor-pointer" onClick={() => console.log("Country")}>Country</Badge>
            <Badge variant="outline" className="py-1 px-2 m-2 hover:cursor-pointer" onClick={() => console.log("Rock")}>Rock</Badge>
            <Badge variant="outline" className="py-1 px-2 m-2 hover:cursor-pointer" onClick={() => console.log("Baladas")}>Baladas</Badge>
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
                  5100
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Calories/day
                </div>
              </div>
              <div className="flex-1 text-center">
                <div className="text-5xl font-bold tracking-tighter">
                  350
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Calories/day
                </div>
              </div>
            </div>
          </div>
        </div>
        <Separator/>
        <div className="py-2">
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
        </div>
      </div>
    </div>
  )
}
