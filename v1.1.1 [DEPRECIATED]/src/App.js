import React from "react";
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Root from "./components/Root";


function App() {
  return (
      <>
        <Router>
            <Route exact path="/" component={Root} smooth/>
        </Router>
      </>
  );
}

export default App;
