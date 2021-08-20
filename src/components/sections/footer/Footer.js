import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import './Footer.css'


const Footer = () => {
      const history = useHistory();
      return (

          <div className="footer">
                <div className="brand">
                      <div className="brand-img">
                            <img src={require("../../../static/images/homebrand.svg").default} alt="home brand"/>
                      </div>
                      <div className="brand-nav">
                            <div className="nav-about">
                                  <p> PTwins Home Nigeria Limited is a property consulting company that strives to
                                        help its clients find the best housing property for them</p>
                            </div>
                            <div className="nav-company">
                                  <h2>Company</h2>
                                  <ul>
                                        <li onClick={() => history.push("/about")}>About Us</li>
                                        <li onClick={() => history.push("/services")}>Services</li>
                                        <li onClick={() => history.push("/faq")}>F.A.Q</li>
                                  </ul>
                            </div>
                            <div className="nav-contact">
                                  <h2>Contact Us</h2>
                                  <ul>
                                        <li>realgast@gmail.com</li>
                                        <li>
                                              <span>(+234)-810-987-7665,</span>
                                              <span>(+234)-810-987-7666,</span>
                                        </li>
                                        <li>22,Herbert Macaulay Way, Yaba, Lagos, Nigeria</li>
                                  </ul>
                            </div>
                      </div>
                      <div className="brand-footer">
                            <p>&copy; 2021, PTwins Home Nigeria Limited</p>
                            <div className="socials">
                                  <Link to={{pathname: "https://m.facebook.com/pthomesng"}} target="_blank">
                                        <img src={require("../../../static/images/twitter.svg").default} alt="facebook-icon"/>

                                  </Link>
                                  <Link to={{pathname: "https://twitter.com"}} target="_blank">
                                        <img src={require("../../../static/images/facebook.svg").default}
                                             alt="twitter-icon"/>
                                  </Link>
                                  <Link to={{pathname: "https://www.instagram.com/pthomesng/"}} target="_blank">
                                        <img src={require("../../../static/images/instagram.svg").default}
                                             alt="instgram"/>
                                  </Link>
                            </div>
                      </div>
                </div>
          </div>
      )
}

export default Footer