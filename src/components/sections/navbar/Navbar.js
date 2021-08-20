import React, {useState} from 'react';
import {MenuItems} from "../../../data/HomeData";
import "./Navbar.css";
import {NavLink} from "react-router-dom";


const Navbar = () => {

  const [clicked, setClicked] = useState(false);


  const handleClicked = () =>{
      setClicked(!clicked);
  }


    return (
        <nav className="NavbarItems">
                <div className="nav-logo">
                    <img src={require("../../../static/images/logo.png").default} className="img" alt="logo"/>
                </div>

                <div className="menu-icon" onClick={handleClicked}>
                    <i className={clicked ? "fas fa-times" : "fas fa-bars"}/>
                </div>



            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item,  index) =>{
                    return(
                        <li key={index}>
                            <NavLink activeClassName="active" className={item.cName} to={`${item.url}`}>{item.title}
                                {item.image &&
                                <img src={require("../../../static/images/arrow.png").default} alt="arrow"/>}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>

        </nav>
    );
};

export default Navbar;