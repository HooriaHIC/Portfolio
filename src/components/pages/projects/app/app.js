import React from "react";
import '../projects.css';
import { useHistory } from "react-router-dom";

import snaphunt from "../../../../assets/projects/snaphunt.png";
import snaphunt1 from "../../../../assets/projects/snaphunt1.webp";
import snaphunt2 from "../../../../assets/projects/snaphunt2.webp";
import snaphunt3 from "../../../../assets/projects/snaphunt3.webp";
import snaphunt4 from "../../../../assets/projects/snaphunt4.webp";
import snaphunt5 from "../../../../assets/projects/snaphunt5.webp";
import snaphunt6 from "../../../../assets/projects/snaphunt6.webp";
import snaphunt7 from "../../../../assets/projects/snaphunt7.webp"; 
import snaphuntVideo from "../../../../assets/projects/videoplayback.mp4"; 

function AppDevelopment() {
        let history = useHistory();
        return (
            <div className="appDevelopment">
                <div className="backButton" onClick={() => history.goBack()}>Back</div>
                <div className="cardPages">
                    <div className="cardPage">
                        <div className="projectBanner">
                            <img alt="project" src={snaphunt} />
                        </div>
                        <div className="projectTitle">
                            <h2 className="projectName">
                                SnapHunt
                            </h2>
                        </div>
                        <div className="projectInfo">
                            <p>My role <span>App UI Design, Api Integrate</span></p>
                            <p>Tools & Stack <span>ReactNative, Javascript, Redux</span></p>
                            <p>Date <span>Aug 2020</span></p>
                            <p>About <span>Social Media App</span></p>
                        </div>
                        <div className="projectDesc">
                           <h3>Project description</h3>
                            <p>SnapHunt is a challenge social media app I made using <span className="text-style">ReactNative</span> for one of my clients. In Snaphunt, you can make and attempt different types of challenges, follow other hunters and grow your snapscore <br /> 
                            </p>
                            <ul className="ul">
                                <li className="li">
                                    <a alt="download from google play store" href="https://play.google.com/store/apps/details?id=com.snaphunt.android" target="_blank" rel="noopener noreferrer">
                                    <div class="download android">
                                    <i class="fa fa fa-android fa-3x"></i>
                                    <span class="df">Download from</span>
                                    <span class="dfn">Google Play</span>
                                    </div>
                                    </a>
                                </li>
                                <li className="li">
                                    <a alt="download from apple app store" href="https://apps.apple.com/eg/app/snaphunt/id1511638274" target="_blank" rel="noopener noreferrer">
                                        <div class="download apple">
                                        <i class="fa fa fa-apple fa-3x"></i>
                                        <span class="df">Download from</span>
                                        <span class="dfn">App Store</span>
                                        </div>
                                    </a>
                                </li>
                                </ul>
                        </div>
                        <div className="projectGallery">
                            <h1>
                                Gallery
                            </h1>
                            <div className="grid">
                                <video className="bigVideo" controls>
                                    <source src={snaphuntVideo} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <img alt="project gallery" className="xsmallImage" src={snaphunt1} />
                                <img alt="project gallery" className="xsmallImage" src={snaphunt2} />
                                <img alt="project gallery" className="xsmallImage" src={snaphunt3} />
                                <img alt="project gallery" className="xsmallImage" src={snaphunt4} />
                                <img alt="project gallery" className="xsmallImage" src={snaphunt5} />
                                <img alt="project gallery" className="xsmallImage" src={snaphunt6} />
                                <img alt="project gallery" className="xsmallImage" src={snaphunt7} />
                                
                            </div>
                        
                        </div> 
                    </div>            
                </div>
            </div>
        );
}

export default AppDevelopment;

