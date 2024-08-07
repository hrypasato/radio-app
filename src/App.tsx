import './App.css'
import { Sidebar } from './components/sidebar'
import { playlists } from './data/playlists'
import { Tabs, TabsContent } from './components/ui/tabs'
import { Separator } from './components/ui/separator'
import { RadioCard } from './components/radio-card'
import { Search } from './components/search'
import { ControlPage } from './components/control-page'
import { useOffset, useList } from './zustand/store'
import { useEffect } from 'react'


function App() {
  const { offset } = useOffset();

  const { stations, load } = useList();

  //load list of stations
  useEffect(() => {
    load();
  }, [offset]);

  return (
    <>
      <div className="hidden md:block">
        <h2 className="text-2xl font-semibold tracking-tight text-start">
          Radio react app {offset}
        </h2>

        <div className="grid lg:grid-cols-7">
          <div className="col-span-3 lg:col-span-5">
            <div className="h-full px-4 py-6 lg:px-8">
              <Tabs defaultValue="music" className="h-full space-y-6">
                <Search />
                <Separator className="my-4" />
                <TabsContent value="music" className="border-none p-0 outline-none">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {
                      stations.map(station => <RadioCard key={station.id} station={station} />)
                    }
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            <ControlPage/>
          </div>
          <Sidebar playlists={playlists} className="border-l lg:col-span-2 hidden lg:block" />
        </div>

      </div>
    </>
  )
}

export default App
