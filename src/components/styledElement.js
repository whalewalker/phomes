import styled from "styled-components";
import {NavLink as Link} from "react-router-dom";


export const Span = styled.span`
    color: #FC5E03;
`;

export const BtnLink = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  color: #FC5E03;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  width: 220px;
  
  //&:hover{
  //  transition: all 0.2s ease-in-out;
  //  background: #FC5E03;
  //  color: #fff;
  //}
`