import React from 'react';
import {NavLink,Nav,  Bars, NavMenu, NavBtnLink} from "./NavbarElements";
import {ReactComponent as Logo} from "../../../static/images/logo.svg";
import {ReactComponent as ArrowClick} from "../../../static/images/arrow.svg";
import {arrowStyled} from "../../inlineStyled";

const Navbar = () => {

    const dropDownHandler = ()=>{
        console.log("Clicked")
    }

    const activeStyleHandler = () =>{
        console.log("Change props")
    }

    return (
        <>
            <Nav>
                <NavLink to="/">
                    <Logo/>
                </NavLink>
                <Bars onClick={dropDownHandler} />
                <NavMenu>
                    <NavLink to="/" onClick={activeStyleHandler}>Home</NavLink>
                    <NavLink to="/about" onClick={activeStyleHandler}>About Us</NavLink>
                    <NavLink to="/service" onClick={activeStyleHandler}>Our Services</NavLink>
                    <NavBtnLink to="/quote">
                        Get a Free Quote
                            <ArrowClick style={arrowStyled}/>
                    </NavBtnLink>
                </NavMenu>
          </Nav>
        </>
    );
};

export default Navbar;