import React from "react";
import '../projects.css';
import { useHistory } from "react-router-dom";

import xannys from "../../../../assets/projects/xannys.png";
import xannysHome from "../../../../assets/projects/xannys-home.png";
import xannysOther from "../../../../assets/projects/xannys-other.png";
import xannysShop from "../../../../assets/projects/xannys-shop.png";

import horror from "../../../../assets/projects/horror.png";
import horrorHome from "../../../../assets/projects/horror-home.png";
import horrorLists from "../../../../assets/projects/horror-lists.png";
import horrorStory from "../../../../assets/projects/horror-story.png";


function WebDevelopment() {
        let history = useHistory();
        return (
            <div className="webDevelopment">
                <div className="backButton" onClick={() => history.goBack()}>Back</div>
                <div className="cardPages">
                    <div className="cardPage">
                        <div className="projectBanner">
                            <img alt="project" src={xannys} />
                            <a href="https://xannys.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                <button>View Live</button>
                            </a>
                        </div>
                        <div className="projectTitle">
                            <h2 className="projectName">
                                Xannys
                            </h2>
                            <h1>
                                01
                            </h1>
                        </div>
                        <div className="projectInfo">
                            <p>My role <span>Full Stack Development</span></p>
                            <p>Tools & Stack <span>Django, SQLite, Javascript</span></p>
                            <p>Date <span>Dec 2019</span></p>
                            <p>About <span>Online Fashion Store</span></p>
                        </div>
                        <div className="projectDesc">
                            <h3>Project description</h3>
                            <p>Xannys is an online fashion store made using <span className="text-style">Django</span>. It contains many modern store features including, <br /> 
                                <ul>
                                    <li><span className="text-style">User Authentication</span></li>
                                    <li><span className="text-style">On Site Admin Panel</span></li>
                                    <li><span className="text-style">Discount and Coupon</span></li>
                                    <li><span className="text-style">Bookmarks (Favorite)</span></li>
                                    <li><span className="text-style">Stripe and Paypal Integration</span></li>
                                    <li><span className="text-style">Eye-Catching Design</span></li>
                                </ul>
                            </p>
                        </div>
                        <div className="projectGallery">
                            <h1>
                                Gallery
                            </h1>
                            <div className="grid">
                                <img alt="project gallery" className="smallImage" src={xannysHome} />
                                <img alt="project gallery" className="smallImage" src={xannysOther} />
                                <img alt="project gallery" className="bigImage" src={xannysShop} />
                            </div>
                        </div> 
                    </div>

                    <span className="horizontal-ruler">
                        Second Project
                    </span>
                    
                    <div className="cardPage">
                        <div className="projectBanner">
                            <img alt="project" src={horror} />
                            <a href="https://horror.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                <button>View Live</button>
                            </a>
                        </div>
                        <div className="projectTitle">
                            <h2 className="projectName">
                                Horror
                            </h2>
                            <h1>
                                02
                            </h1>
                        </div>
                        <div className="projectInfo">
                            <p>My role <span>Full Stack Development</span></p>
                            <p>Tools & Stack <span>Django, SQLite</span></p>
                            <p>Date <span>Nov 2019</span></p>
                            <p>About <span>Online Horror Story Blog</span></p>
                        </div>
                        <div className="projectDesc">
                            <h3>Project description</h3>
                            <p>Horror is an online blog made using <span className="text-style">Django</span> for sharing horror stories. It contains many blog features including, <br /> 
                                <ul>
                                    <li><span className="text-style">User Authentication</span></li>
                                    <li><span className="text-style">Great UI/UX</span></li>
                                    <li><span className="text-style">Responsive/Mobile friendly</span></li>
                                    <li><span className="text-style">CRUD features</span></li>
                                    <li><span className="text-style">Featured option</span></li>
                                    <li><span className="text-style">User Profiles</span></li>
                                </ul>
                            </p>
                        </div>
                        <div className="projectGallery">
                            <h1>
                                Gallery
                            </h1>
                            <div className="grid">
                                <img alt="project gallery" className="smallImage" src={horrorHome} />
                                <img alt="project gallery" className="smallImage" src={horrorStory} />
                                <img alt="project gallery" className="bigImage" src={horrorLists} />
                            </div>
                        </div> 
                    </div>

                    <span className="horizontal-ruler">
                        Third Project
                    </span>

                    <div className="cardPage">
                        <div className="projectTitle">
                            <h2 className="projectName">
                                Troopsie
                            </h2>
                            <h1>
                                03
                            </h1>
                        </div>
                        
                        <div className="projectInfo">
                            <p>My role <span>Full Stack Development</span></p>
                            <p>Tools & Stack <span>ReactJs, Nodejs, Express, Shopify</span></p>
                            <p>Date <span>May 2020</span></p>
                            <p>About <span>Grocery Delivery Shop</span></p>
                        </div>
                        <div className="projectDesc">
                            <h3>Project description</h3>
                            <p>An Online Grocery Delivery Web Application made with <span className="text-style">MERN Stack</span> and <span className="text-style">Shopify Api</span> for one of my clients. Its a Multi vendor and Multi store <span className="text-style">Ecommerce website</span>. <br/> In which, Users can select products from many stores in their area and get them delivered at their <span className="text-style">Doorsteps</span>. A data scraper is implemented to scrape products from many stores and create products. Shopify tags and smart collections are then used to smartly create stores in different regions based on area code. <br /> It also has Fluid user experience because of <span className="text-style">React.js</span> Single Page Application UI.
                            </p>
                        </div>
                        <div className="projectTroopsie">
                            <p>Unfortunately, the store's backend is not working because the client had to shut down the shopify store due to Covid-19 but you can kinda see the UI in the preview</p>
                            <a href="https://groceryDeliveryapp.herokuapp.com" target="_blank" rel="noopener noreferrer">
                                <button>View Live</button>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
}

export default WebDevelopment;

