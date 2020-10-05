import React from "react";
import Button from '../../Elems/button';
import {Link} from "react-router-dom";
import './home.css';


class Home extends React.Component {
    render() {
        return (
            <div>
                
                <div className="name">
                    <div className="name-box">
                        <a href="https://drive.google.com/file/d/1-B-18QqFGtcQSYNRdbBcLFN7yX_yLIWP/view" target="_blank" rel="noopener noreferrer" >
                            <Button  styles={{height: '40px', float: 'right'}} text={"Download Resume"} />
                        </a>
                        <p>Hooria Ishtiaq</p>
                    </div>
                </div>
                <div>
                    <div className="name-2">
                        <div className="name-2-turn">
                            <div className="h-1"><p>Hooria Ishtiaq</p></div>
                            <div className="h-2"><p>2020</p></div>
                        </div>
                    </div>  
                    <div className="container">
                        <div className="image-box">
                            
                            <div className="image-containter">
                                <div className="image"></div>
                            </div>
                        </div>
                        <div className="text">
                            <div className="text-box">
                                <div className="text-box-2">
                                    <div className="text-designer">
                                        <p>Dev +<br />Designer</p>
                                    </div>
                                    <div className="text-designer-sub">
                                        <hr />
                                        <p>who loves coding</p>
                                    </div>
                                    
                                    <div className="text-links">
                                        <div className="text-links-projects"><Link to='/projects'>Projects</Link></div>
                                        <div className="text-links-aboutme"><Link to='/about'>About</Link></div>
                                        <div className="text-links-contact"><Link to='/contact'>Contact</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

