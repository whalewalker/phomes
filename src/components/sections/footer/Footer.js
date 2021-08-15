import React from 'react'
import { useHistory , Link } from 'react-router-dom'
import './Footer.css'




const Footer = () => {
      const history = useHistory();
      return (
            <div className="footer">
                  <div className="consultation">
                        <h1>Get Your Free <span className="text-secondary">Consultation</span></h1>
                        <p>Discuss with our property experts to help you find the best options suited to your exact needs. Click to get Started. </p>
                       <Link to = "/quote">
                             Get a free quote  &nbsp; 
                             <img src={require("../../../static/images/arrow.png").default} alt="arrow"/>
                       </Link>
                  </div> 
                  <div className="brand">
                        <div className="brand-img">
                        <img src={require("../../../static/images/homebrand.svg").default} alt="home brand"/>
                        </div>
                        <div className="brand-nav">
                              <div className="nav-about">
                                    <p>   PTwins Home Nigeria Limited is a property consulting company that strives to help its clients find the best housing property for them</p>
                              </div>
                              <div className="nav-company">
                                    <h2>Comapny</h2>
                                    <ul>
                                          <li onClick = {()=> history.push("/about")}>About Us</li>
                                          <li onClick = {()=> history.push("/services")}>Services</li>
                                          <li onClick = {()=> history.push("/faq")}>F.A.Q</li>
                                    </ul>
                              </div>
                              <div className="nav-contact">
                              <h2>Contact Us</h2>
                                    <ul>
                                          <li>About Us</li>
                                          <li>
                                                <span>(+234)-810-987-7665,</span>
                                                <span>(+234)-810-987-7666,</span>
                                          </li>
                                          <li>22, Address Street, Lagos City, Lagos, Nigeria </li>
                                    </ul>
                              </div>
                        </div>
                        <div className="brand-footer">
                              <p>&copy; 2021, PTwins Home Nigeria Limited</p>
                              <div className="socials">
                              <img src={require("../../../static/images/facebook.svg").default} alt="facebook"/>
                              <img src={require("../../../static/images/twitter.svg").default} alt="twitter"/>
                              <img src={require("../../../static/images/instagram.svg").default} alt="instgram"/>
                              </div>
                        </div>


                  </div>
            </div>
      )
}

export default Footer