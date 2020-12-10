import React from "react";
import './contact.css';
import Navbar from '../../Elems/navbar';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="ContactCont">
                    <div className="ContactContLeft">
                        <h1>Contact</h1>
                    </div>
                    <div className="ContactContRight">
                        <a className="email" href="mailto:hooria.hic@gmail.com">@HooriaIshtiaq</a>
                        <div className="social">
                            <a href="https://www.linkedin.com/in/hooria-ishtiaq/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://instagram.com/hooriahic" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://dribbble.com/hic" target="_blank" rel="noopener noreferrer">Dribbble</a>
                            <a href="https://github.com/HooriaHIC" target="_blank" rel="noopener noreferrer">Github</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;

