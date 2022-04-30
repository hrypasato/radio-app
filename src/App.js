import { Button } from "./components";

function App() {
  return (
    <div className="App bg-fuchsia-900 text-gray-100 w-full h-screen">
      <h1 className="text-3xl font-bold">
        Radio React App
      </h1>
      <p>Logo</p>
      <div className="genders">
        <Button text={"hola"}/>
      </div>
      <main>
        here grid with radios stations
      </main>
    </div>
  );
}

export default App;
