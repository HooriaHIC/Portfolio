import React from "react";
import './about.css';
import Navbar from '../../Elems/navbar';

import me from "../../../assets/me3.png";

//const age = new Date().getFullYear() - 2005;

class About extends React.Component {

    render() {
        return (
            <div className="mainAbout">
                <Navbar />
                <div class="container-about">
                    <div class="container-about-left">
                        <div class="container-about-left-1">  
                            <div class="projects-title aos-init aos-animate" data-aos="fade-up" data-aos-duration="1300" data-aos-delay="500">
                                <p><span id="title-text">ABOUT</span></p>
                            </div>
                            <div class="projects aos-init aos-animate" data-aos="fade-up" data-aos-duration="1300" data-aos-delay="700">
                                <p> I’m Hooria Ishtiaq, a 15 y/o <span id="text-style">Developer + Designer</span>, currently studying <span id="text-style">Game Development.</span> I’m from <span id="text-style">Karachi, Pakistan</span>.  I've been programming since i was 9 yr/olds, I love to code and design. Other than programming, I like playing <span id="text-style">Guitar</span>, eating <span id="text-style">Food</span> and playing <span id="text-style">Video Games</span> :)
                                </p>
                            </div>
                            <div class="more-info aos-init aos-animate" data-aos="fade-up" data-aos-duration="1300" data-aos-delay="900">
                                <p>
                                    <span style={{color: 'black', fontWeight: '500', paddingRight: '5px'}}>Education</span> Full Stack Development | Freecodecamp(2018), High School(2022).</p>
                                <p>
                                    <span style={{color: 'black', fontWeight: '500', paddingRight: '5px'}}>Skills</span> MernStack, React Native, Unity, UI Design, HTML5, CSS3, Adobe XD, UX Design.</p>
                                <p>
                                    <span style={{color: 'black', fontWeight: '500', paddingRight: '5px'}}>Languages</span>  English, Urdu.</p>
                            </div>
                        </div> 
                    </div>
                    <div class="container-about-right">
                        <div class="box-image-about">
                            <div class="image-about aos-init aos-animate" style={{backgroundImage: `url(${me})`}} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"></div>
                        </div>                 
                    </div>
                </div>
            </div>
        );
    }
}

export default About;

