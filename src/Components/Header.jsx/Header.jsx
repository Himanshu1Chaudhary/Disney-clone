import React, { useState } from "react";
import logo from "../Images/logo.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Avatar } from "@mui/material";


function Header() {

 const [show, setshow] = useState(false);
 const popupOpen = () =>{
  return setshow(!show);
 }

  return (
    <>
      <Nav>
        <Navbrand>
          <NavLink to="/"><img src={logo} /></NavLink>
        </Navbrand>
        <Menulinks>
          <li>
            <NavLink className="nav-link" end to="/Home">
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" end to="">
              <span>Search</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" end to="">
              <span>Watchlist</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" end to="">
              <span>Originals</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" end to="">
              <span>Movies</span>
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" end to="">
              <span>Series</span>
            </NavLink>
          </li>
        </Menulinks>
        <UserAuth>
         <Avatar onClick={popupOpen}/>
        </UserAuth>

        <Popup activeState={show}>
          <li><NavLink className="nav-link" end to=""><span>HOME</span></NavLink></li>
          <li><NavLink className="nav-link" end to=""><span>SIGN OUT</span></NavLink></li>
        </Popup>
      </Nav>
    </>
  );
}
const Nav = styled.nav`
  display: flex;
  align-item: center;
  flex-direction: row;
  justify-content: space-between;
`;
const Navbrand = styled.div`
  width: 100px;
  height: auto;
  object-position: center;
  margin-top: 3px;
   
    img {
      width: 100%;
      height: auto;
      object-fit: fill;
    }
  
`;
const Menulinks = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: row wrap;
  justify-content: flex-start;

  margin-right: auto;
  margin-left: 3rem;

  li {
    list-style: none;
    .nav-link {

      &:hover{
        span::before{
          width: 100%;
        }
      }

      display: flex;
      align-items: center;
      text-decoration: none;
      position: relative;


      span {
        color: white;
        font-size: 1rem;
        font-weight: 300;
        letter-spacing: 1px;
        line-height: 1;
        padding: 1rem;
        padding-bottom: 0.5rem;
        position: relative;

        &::before{
          position: absolute;
          content: "";
          top: 100%;
          left: 0;
          right: 0;
          width: 0;
          height: 2px;
          background: white;
          transition: all 0.2s cubic-bezier(0.455, 0.05, 0.55, 0.95);
        }
      }
    }
    
    }
  }
`;
const UserAuth = styled.div`
positon: relative;
margin-top: 1rem;
margin-right: 3rem;
`;

const Popup = styled.div`
position: absolute;
top: 7vh;
right: 3.5rem;
z-index: 10000;

 background-color: #040714;
 border-radius: 0.35rem;
 border: 1.5px solid rgba(151, 151, 151, 1);
 margin-right: 2rem;
 padding: 4px;

display: ${event => event.activeState ? "flex" : "none"};
align-item: flex-start;
justify-content: flex-start;
flex-direction: column;

 text-decoration: none;
 
 li {
   display: flex;
   align-items: flex-start;
   justify-content: flex-start;
   flex-direction: column;
   border-bottom: 1.5px solid rgba(151, 151, 151, 1);

  list-style: none;
  .nav-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    position: relative;


    span {
      color: white;
      font-size: 1rem;
      font-weight: 300;
      letter-spacing: 1px;
      line-height: 1;
      padding: 1rem;
      padding-bottom: 0.5rem;
      position: relative;
    }
  }
`;

export default Header;
