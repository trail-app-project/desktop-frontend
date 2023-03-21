import { gsap, Power3 } from "gsap";

import Image from 'next/image';
import Link from 'next/link';
import React, { forwardRef, useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import Logo from '../../public/Logo';
import Button from '../Components/Button';
import useDimensions from '../Components/hooks/useDimensions';
import { NavStyle } from "./Styles/Nav.styled";


const LogoStyle = styled.div`
  #logo{
    transform: translateX(${props=>props.winWidth+'px'});
  }
`;

const Nav = () => {
  const winWidth = useDimensions().winWidth;
  const back1 = useRef(null);
  const back2 = useRef(null);

  useEffect(() => {
    
  }, []);

  return (
    <>
      <LogoStyle winWidth={((winWidth/2)-(150/2))}>
        <Logo />
      </LogoStyle>
      
      <NavStyle winWidth={winWidth}>

        <div className="navbar">
          <div className ='buttons'>
            <div className ='signing'>
              <Link href="./Login">
                <Button label="Login" size='large'/>
              </Link>
              <Link href='./Register'>
                <Button label="Sign-Up" size='large'/>
              </Link>
            </div>
            <div className='forgotpass'>
              <Link href='./Recovery'>
                <Button label="Forgot Password?" variant='link'/>
              </Link>
            </div>
          </div>
          <div className='banner'/>
        </div>
      </NavStyle>
    </>
  )
}

export default Nav
