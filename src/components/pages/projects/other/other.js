import React from "react";
import '../projects.css';
import { useHistory } from "react-router-dom";
import css from "../../../../assets/projects/css.png";
import threed from "../../../../assets/projects/3d.png";
import apiandMicro from "../../../../assets/projects/api.png";


function Others() {
        let history = useHistory();
        return (
            <div className="others">
                <div className="backButton" onClick={() => history.goBack()}>Back</div>
                <div className="cardGallery">
                    <a href="https://codepen.io/HIC" title="click to view my codepen Profile" target="_blank" rel="noopener noreferrer">
                        <div className="card" style={{backgroundImage: `url(${css})`}}>
                        </div>
                    </a>
                    <a href="https://sketchfab.com/hooria.hic" title="click to view my Sketchfab Profile" target="_blank" rel="noopener noreferrer">
                        <div className="card" style={{backgroundImage: `url(${threed})`}}>
                        </div>
                    </a>
                    <a href="https://glitch.com/@HooriaHIC" title="click to view my Glitch Profile" target="_blank" rel="noopener noreferrer">
                        <div className="card" style={{backgroundImage: `url(${apiandMicro})`}}>
                        </div>
                    </a>
                </div>
            </div>
        );
}

export default Others;

