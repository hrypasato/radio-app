import { useEffect, useState } from "react";
import { Card } from "./components";

const BASE_URL = 'https://de1.api.radio-browser.info/json/stations/'

const LAST_STATIONS = BASE_URL + 'lastchange/5';
//const STATIONS_BY_VOTES = BASE_URL + 'topvote/5';
//const STATIONS_BY_CLICKS = BASE_URL + 'topclick/5';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [station, setStation] = useState(null);

  useEffect(() => {
      fetch(LAST_STATIONS)
      .then(response => response.json())
      .then(data => {
          setStation(data);
          setIsLoading(false);
      })
  }, [isLoading]);

  return (
    <div className="App">
      <header>
        <h1 className="text-3xl font-bold text-center p-10">
          Radio React App
        </h1>
      </header>
      <main>
        {
          isLoading 
          ? <div>Loading...</div>
          : <div className="flex flex-col p-10 gap-3 md:flex-row md:flex-wrap"> 
          {
              station.map((item, i) => {
                  return (
                    <Card key={i} item={item} playRadio={console.log}/>
                  )
              }
              )
          } </div>
        }
      </main>
    </div>
  );
}

export default App;
