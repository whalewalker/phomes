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

                              </div>
                              <div className="nav-company">

                              </div>
                              <div className="nav-contact">

                              </div>
                        </div>
                        <div className="brand-footer">
                              <p></p>
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