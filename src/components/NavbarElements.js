//import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: rgb(237,237,229);
background: -moz-linear-gradient(90deg, rgba(237,237,229,1) 0%, rgba(237,232,205,1) 100%);
background: -webkit-linear-gradient(90deg, rgba(237,237,229,1) 0%, rgba(237,232,205,1) 100%);
background: linear-gradient(90deg, rgba(237,237,229,1) 0%, rgba(237,232,205,1) 100%);
    height: 20px;
    display: flex;
    justify-content: space-between;
    padding: 0.05rem 0.2rem;
    z-index: 12;
    border-top: 1px solid #faf9f4;
    border-bottom: 1px solid #d5d3c6;
`;

export const NavLink = styled(Link)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    text-align: center;
    padding: 0 0.5rem;
    height: 100%;
    cursor: pointer;
    font-family: Tahoma, sans-serif;
    font-size: 10pt;
    &.active{
        background-color: #1660e8;
        color: #fff;
    }
    &:hover{
        background-color: #1660e8;
        color: #fff;
    }
`;

/*export const Bars = styled(FaBars)`
    display: none;
    color: #808080;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;*/

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
white-space: nowrap; */
    
`;