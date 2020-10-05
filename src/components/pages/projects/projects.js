import React from "react";
import './projects.css';
import Navbar from '../../Elems/navbar';
import {Link} from "react-router-dom";
import WebDevelopment from "./web/web";
import AppDevelopment from "./app/app";
import GameDevelopment from "./game/game";
import Others from "./other/other";
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom"; 

function Projects () {
    let { path, url } = useRouteMatch();
        return (
            <div>
                <Navbar />
                <div className="row">
                    <div className="projectContainer">
                        <div className="grid">
                            <Link to={`${url}/web`} className="card"></Link> 
                            <Link to={`${url}/app`} className="card"></Link> 
                            <Link to={`${url}/game`} className="card"></Link> 
                            <Link to={`${url}/others`} className="card"></Link> 
                        </div>
                    </div>
                    <div className="imageContainer"></div>
                </div>

               <Switch>
                    <Route path={`${path}/web`}>
                        <WebDevelopment />
                    </Route>
                    <Route path={`${path}/app`}>
                        <AppDevelopment />
                    </Route>
                    <Route path={`${path}/game`}>
                        <GameDevelopment />
                    </Route>
                    <Route path={`${path}/others`}>
                        <Others />
                    </Route>
               </Switch>
            </div>
        );
}

export default Projects;

