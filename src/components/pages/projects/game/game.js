import React from "react";
import '../projects.css';
import { useHistory } from "react-router-dom";

import getTheGas from "../../../../assets/projects/game.png";
import getTheGas1 from "../../../../assets/projects/getTheGas 1.png";
import getTheGas2 from "../../../../assets/projects/getTheGas 2.png";
import getTheGas3 from "../../../../assets/projects/getTheGas 3.png";
import getTheGas4 from "../../../../assets/projects/getTheGas 4.png";
import getTheGas5 from "../../../../assets/projects/getTheGas 5.png";

function GameDevelopment() {
        let history = useHistory();
        return (
            <div className="gameDevelopment">
                <div className="backButton" onClick={() => history.goBack()}>Back</div>
                <div className="cardPages">
                    <div className="cardPage">
                        <div className="projectBanner">
                            <img alt="project" src={getTheGas} />
                            <a href="https://hooriaishtiaq.itch.io/get-the-gas" target="_blank" rel="noopener noreferrer">
                                <button>Download</button>
                            </a>
                        </div>
                        <div className="projectTitle">
                            <h2 className="projectName">
                                Get The Gas
                            </h2>
                        </div>
                        <div className="projectInfo">
                            <p>My role <span>Game Development and Design</span></p>
                            <p>Tools & Stack <span>Unity, Blender</span></p>
                            <p>Date <span>July 2020</span></p>
                            <p>About <span>Race & Runner</span></p>
                        </div>
                        <div className="projectDesc">
                            <h3>Project description</h3>
                            <p>Get The Gas is the first game i've ever made. I made this game using <span className="text-style">Unity</span> & <span className="text-style">Blender</span>. In this game, you have to get through some struggle to get the gas but you do get some rewards along the way :) <br /> 
                            </p>
                            
                        </div>
                        <div className="projectGallery">
                            <h1>
                                Gallery
                            </h1>
                            <div className="grid">
                                <img alt="project gallery" className="smallImage" src={getTheGas1} />
                                <img alt="project gallery" className="smallImage" src={getTheGas2} />
                                <img alt="project gallery" className="smallImage" src={getTheGas3} />
                                <img alt="project gallery" className="smallImage" src={getTheGas4} />
                                <img alt="project gallery" className="bigImage" src={getTheGas5} />
                            </div>
                        </div> 
                    </div>            
                </div>
            </div>
        );
}

export default GameDevelopment;

