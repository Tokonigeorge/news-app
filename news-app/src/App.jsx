import React from "react";
import "./App.css";
import Landing from "./pages/Landing";
import Newspage from "./pages/Newspage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Landing /> */}
        {/* <Newspage /> */}

        <Switch>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
