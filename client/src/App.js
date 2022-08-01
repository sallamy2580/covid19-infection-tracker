import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Globe from "./pages/Globe";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Globe} />
      </div>
    </Router>
  );
}

export default App;
