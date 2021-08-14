import React, {useState} from 'react';
import {ReactComponent as Logo} from "../../../static/images/logo.svg";
import {MenuItems} from "../../../data/HomeData";
import "./Navbar.css";
import {Link} from "react-router-dom";


const Navbar = () => {

  const [clicked, setClicked] = useState(false);
  // const [active, setActive] = useState(true);

  const handleClicked = () =>{
      setClicked(!clicked);
  }

  // const handleActive = () =>{
  //     setActive(false);
  //   }

    return (
        <nav className="NavbarItems">
                <div className="nav-logo">
                    <Logo className="img"/>
                </div>

                <div className="menu-icon" onClick={handleClicked}>
                    <i className={clicked ? "fas fa-times" : "fas fa-bars"}/>
                </div>



            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item,  index) =>{
                    return(
                        <li key={index}>
                            <Link className={item.cName}  to={`${item.url}`}>{item.title}
                                {item.image && <img src={require("../../../static/images/arrow.png").default} alt="arrow"/>}
                            </Link>
                        </li>
                    )
                })}
            </ul>

        </nav>
    );
};

export default Navbar;