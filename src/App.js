import logo from "./logo.svg";
import "./App.css";

// importing views
import Home from "../src/views/home";

function App() {
  return (
    <div className="App">
      <header>{/* reserved for header */}</header>
      <div className="App-background">
        <Home />
      </div>
    </div>
  );
}

export default App;
