import React from 'react'
import { Button } from '../../reuseable/buttons/Button'
import './ServiceGrid.css'

const ServiceGrid = () => {
      return (
            <div className="service-grid">
                  <div className="land">
                       <div className="img">
                       <img src={require("../../../static/images/house.svg").default} alt="house"/>
                       </div>
                       <div className="text">

                        <div>
                              <img src={require("../../../static/images/land-icon.png").default} alt="home brand"/>
                              <h2>Land & House Sales</h2>
                        </div>
                        <p>Looking to buy land ? PTwins Nigerial Limited offers the best Land and House purchase packages. We hav an array of listings accross different locations that you'll love. <br /> <br />
                        With us, you never have to worry about securing properties in your favorite location. We have you covered with different purchase options and locations, depending on your budget.
                        </p>
                       </div>
                  </div>
                  <div className="estate">
                        <div className="text">
                        <div>
                        <img src={require("../../../static/images/message-icon.png").default} alt="message"/>
                        <h2>real estate consultancy</h2>
                        </div>
                        <p>Investing in real estate can be very tricky. We understand this and are ready to provide you professional consultancy service whenever you need it <br /> <br />
                        So you need professional advice on your next investment? Our experts would provide you the needed information to help you make informed decisions.</p>
                        </div>
                        <div className="img">                        
                        <img src={require("../../../static/images/guys.svg").default} alt="partners"/>

                        </div>
                  </div>
                  <div className="property">
                        <div className="img">
                        <img src={require("../../../static/images/workers.svg").default} alt="workers"/>
                        </div>
                        <div className="text">
                        <div>
                        <img src={require("../../../static/images/block-icon.png").default} alt="building block"/>
                        <h2>Property development</h2>
                        </div>
                        <p>Building your property from scratch can be a hassle - from dealing with contractors to monitoring quality. Let's take away this burden and help you develop that idea from the ground up. <br /> <br /> Our team would help hire the professionals to get your project done. We'll also do the project monitoring for you, ensuring you get the final results on schedule without compromsing quality.</p>
                        </div>
                  </div>
                  <Button text="Get a Free Quote" />
            </div>
      )
}

export default ServiceGrid
