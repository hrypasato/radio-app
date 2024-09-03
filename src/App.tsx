import './App.css'
import { Sidebar } from './components/sidebar'
import { Tabs, TabsContent } from './components/ui/tabs'
import { Separator } from './components/ui/separator'
import { RadioCard } from './components/radio-card'
import { Search } from './components/search'
import { ControlPage } from './components/control-page'
import { useOffset, useList } from './zustand/store'
import { useEffect } from 'react'
import { ScrollArea } from './components/ui/scroll-area'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from './components/mode-toggle'


function App() {
  const { offset } = useOffset();

  const { stations, load } = useList();

  //load list of stations
  useEffect(() => {
    load();
  }, [offset]);

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <header>
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <h2 className="text-2xl font-semibold tracking-tight text-start mr-3">
              Radio react app
            </h2>
            <Search />
          </div>

          <div className="flex flex-1 justify-end">
           <ModeToggle />
          </div>
        </nav>
      </header>
      <div className="grid lg:grid-cols-7">
        <div className="col-span-3 lg:col-span-5">
          <div className="h-full px-4 py-6 lg:px-8">
            <Tabs defaultValue="music" className="h-full space-y-6">
              <Separator className="my-4" />
              <TabsContent value="music" className="border-none p-0 outline-none">
                <ScrollArea className="h-lvh">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {
                      stations.map(station => <RadioCard key={station.id} station={station} />)
                    }
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </div>
          <ControlPage />
        </div>
        <Sidebar className="border-l lg:col-span-2 hidden lg:block" />
      </div>
    </ThemeProvider>
  )
}

export default App
