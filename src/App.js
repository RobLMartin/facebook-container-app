import "./App.css";
import MicroFrontend from "micro-front-end-react-lib";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MicroFrontend
          name="CalcApp"
          host="https://roblmartin.github.io/calc-app"
        />
        <MicroFrontend
          name="StopWatchApp"
          host="https://roblmartin.github.io/stop-watch-app"
        />
      </header>
    </div>
  );
}

export default App;
