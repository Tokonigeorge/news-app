import React from "react";
import "./App.css";
import Landing from "./pages/Landing";
import Newspage from "./pages/Newspage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Landing /> */}
        {/* <Newspage /> */}

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/news" element={<Newspage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
