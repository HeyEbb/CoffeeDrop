import logo from "./logo.svg";
import "./App.css";

// importing packages
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// importing views
import Home from "../src/views/home";
import felonDetail from "./views/felonDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/case/:id" component={felonDetail}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
