import { useEffect, useState } from "react";
import { Card, RadioPLayer } from "./components";

const BASE_URL = 'https://de1.api.radio-browser.info/json/stations/'

const LAST_STATIONS = BASE_URL + 'lastchange/5';
//const STATIONS_BY_VOTES = BASE_URL + 'topvote/5';
//const STATIONS_BY_CLICKS = BASE_URL + 'topclick/5';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [stations, setStations] = useState(null);
  const [currentStation, setCurrentStation] = useState(null);

  useEffect(() => {
    fetch(LAST_STATIONS)
      .then(response => response.json())
      .then(data => {
        setStations(data);
        setIsLoading(false);
      })
  }, [isLoading]);

  const onSelectRadio = (radio) => {
    setCurrentStation(radio);
  };

  return (
    <div className="App">
      <header>
        <h1 className="text-3xl font-bold text-center p-10">
          Radio React App
        </h1>
      </header>
      <RadioPLayer currentRadio={currentStation}/>
      <main>
        {
          isLoading
            ? <div>Loading...</div>
            : <div className="flex flex-col p-10 gap-3 md:flex-row md:flex-wrap">
              {
                stations.map((item, i) => {
                  return (
                    <Card key={i} item={item} selectRadio={onSelectRadio} />
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
