import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import headerimg from '../images/WindowsXPWindowHeader.png';
import imgicon from '../images/AC_AstroVulpes-FULL-Head-15px.png';
//import headerimgl from '../images/WindowsXPWindowHeader-Left.png';
//import headerimgr from '../images/WindowsXPWindowHeader-Right.png';

let isFocused = false;

export const HeaderContent = styled.div`    
    height: 24px;
    padding: 0.2rem 0.2rem;
    font-weight: bold;
    color: white;
    text-shadow: rgb(0, 0, 0) 1px 1px;
    padding-top: 5px; 
    font-family: 'Trebuchet MS', sans-serif;
`;

const Header = () => {
  const handleRedirect = () => {
    window.location.href = 'https://blogs.vmware.com/workstation/files/2014/05/XP-EOL-Support-and-IE-Patch-for-Zero-Day.jpg'; // Replace with your desired URL
  };
  
  const [bgcolor, setBgcolor] = useState('#005adf'); // initial background color

  useEffect(() => {
    const handleFocusChange = () => {
      isFocused = document.hasFocus();
      if (isFocused) {
        setBgcolor('#005adf'); // change background color when tab is focused        
        document.documentElement.style.setProperty(`--bg-color`, `'${bgcolor}'`);
      } else {
        setBgcolor('#7793db'); // change background color when tab is not focused

        document.documentElement.style.setProperty(`--bg-color`, `'${bgcolor}'`);
      }
    };

    document.addEventListener('focus', handleFocusChange);
    return () => {
      document.removeEventListener('focus', handleFocusChange);
    };
  }, [bgcolor]);

  return (
    <div style={{ backgroundColor: bgcolor }}>
      <HeaderContent style={{ backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', backgroundColor: 'transparent', backgroundImage: `url(${headerimg})`}}>
      <img src={imgicon} alt="Icon" style={{ float: 'left', width: 'auto', height: '15px', margin: "2px 0px 0px 0px"}} />&ensp;AstroVulpes
      
      <button class="button-close" onClick={handleRedirect} style={{ float: 'right', width: '21px', height: '21px'}} />
      <button class="button-restore" style={{ float: 'right', width: '21px', height: '21px'}} />
      <button class="button-minimize" style={{ float: 'right', width: '21px', height: '21px'}} />
      </HeaderContent>
    </div>
  );
};

export default Header;