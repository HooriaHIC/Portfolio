import React from "react";
import './error.css';
import Navbar from '../../Elems/navbar';
import Button from '../../Elems/button';
import {Link} from "react-router-dom";

class Error extends React.Component {
    render() {
        return (
           <div className="errorPage">
               <Navbar />
               <h1>404</h1>
               <Link to="/">
                    <Button styles={{marginTop: '5vh', width: "40vh"}} text="Go to Home" />
               </Link>
            </div>
        );
    }
}

export default Error;

