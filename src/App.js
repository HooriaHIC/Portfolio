import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
// import AnimatedCursor from "react-animated-cursor";
const Home = React.lazy(() => import("./components/pages/home/home"));
const About =  React.lazy(() => import("./components/pages/about/about"));
const Projects =  React.lazy(() => import("./components/pages/projects/projects"));
const Error = React.lazy(() => import("./components/pages/error/error"));
const Contact =  React.lazy(() => import("./components/pages/contact/contact"));


function App() {
  return (
      <Router>
        <Suspense fallback={
          <div className="loadingScreen">
            <div className="loader"></div>
          </div>
        }>
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
        </Suspense>
      </Router>
  );
}

export default App;
