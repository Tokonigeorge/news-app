import React from "react";
import "./App.css";
import Landing from "./pages/Landing";
import Newspage from "./pages/Newspage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useDataContextVal } from "./context/dataContext";

function App() {
  const [{ mainNews, latestNews, topNews }] = useDataContextVal();
  return (
    <Router>
      <div className="App">
        {/* <Landing /> */}
        {/* <Newspage /> */}

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/mainnews" element={<Newspage news={mainNews} />} />
          {latestNews?.map((i, indx) => {
            return (
              <Route
                path={`/latestnews/${i.url}`}
                key={indx}
                element={<Newspage news={i} />}
              />
            );
          })}
          {topNews?.map((i, indx) => {
            return (
              <Route
                path={`/topnews/${i.url}`}
                key={indx}
                element={<Newspage news={i} />}
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
