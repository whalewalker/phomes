import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";

export const OrangeBtn = styled(Link)`
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
  width: 215px;

  &:hover{
    transition: all 0.2s ease-in-out;
    background: #0A2463;
    color: #fff;
  }
`

export const BlueBtn = styled(Link)`
  background: #0A2463;
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
    background: #FC5E03;
    color: #fff;
  }
  `

export const Bar = styled.div`
  border: 1px solid rgba(10, 36, 99, 0.22);
  height: 300px;
  `;