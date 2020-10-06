import React from 'react';
import Home from "./components/pages/home/home";
import About from "./components/pages/about/about";
import Contact from "./components/pages/contact/contact";
import Projects from "./components/pages/projects/projects";
import Error from "./components/pages/error/error";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
// import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
      <Router>
        <div>
        {/* <AnimatedCursor
          innerSize={8}
          outerSize={20}
          color='183, 0, 255'
          outerAlpha={0.2}
          innerScale={1}
          outerScale={2}
        /> */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            
            <Route>
              <Error />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
