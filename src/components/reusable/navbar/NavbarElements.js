import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import {FaBars} from "react-icons/fa"


export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 3rem;
  z-index: 10;
  background: #e7f3fd;
`

export const NavLink = styled(Link)`
  color: #0A2463;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  
  &.active{
    color: #FC5E03;
  }
`

export const Bars = styled(FaBars)`
  display: none;
  color: #000;
  
  
  @media screen and (max-width: 770px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  
  @media screen and (max-width: 770px){
    display: none;
  }
`


export const NavBtnLink = styled(Link)`
  background: #FC5E03;
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 220px;
  
  &:hover{
    transition: all 0.2s ease-in-out;
    background: #0A2463;
    color: #fff;
  }
`

