import { gsap, Power3 } from "gsap";

import Image from 'next/image';
import Link from 'next/link';
import React, { forwardRef, useEffect, useRef, useState } from 'react';

import styled from 'styled-components';

import Logo from '../../public/Logo';
import Button from '../Components/Button';
import useDimensions from '../Components/hooks/useDimensions';


const NavStyle = styled.div`
  nav{
    width: ${props=> props.winWidth+'px'};
  }
`;

const LogoStyle = styled.div`
  #logo{
    transform: translateX(${props=>props.winWidth+'px'});
  }
`;

const Nav = () => {
  const winWidth = useDimensions().winWidth;
  const back1 = useRef(null);
  const back2 = useRef(null);

  const onEnter = ( ) => {
    gsap.to(".back1", {  
      x:20,ease: Power3.easeOut, duration:.8,});
    gsap.to(".back2", {  
        x:10,ease: Power3.easeOut, duration:.8, delay:.2  , });
  };

  const onLeave = ( ) => {
    gsap.to(".back1", {  
      x:0,ease: Power3.easeOut, duration:.8,});
    gsap.to(".back2", {  
      x:0,ease: Power3.easeOut, duration:.8, delay:.1, });
  };

  useEffect(() => {
    
  }, []);

  return (
    <section className='navbar' >
      <LogoStyle winWidth={((winWidth/2)-(150/2))}>
        <Logo />
      </LogoStyle>
      <NavStyle winWidth={winWidth}>
      <h1 className='title main' onMouseEnter={onEnter} onMouseLeave={onLeave}> Trail </h1>
      <h1 className='title back1' > Trail </h1>
      <h1 className='title back2' > Trail </h1>
        <nav>
          <div className ='buttons'>
            <div className ='signing'>
              <Link href="./Login">
                <Button label="Login" size='large'/>
              </Link>
              <Link href='./Register'>
                <Button label="Register" size='large'/>
              </Link>
            </div>
            <div className='forgotpass'>
              <Link href='./Recovery'>
                <Button label="Forgot Password?" variant='link'/>
              </Link>
            </div>
          </div>
          <div className='banner'/>
        </nav>
      </NavStyle>
    </section>
  )
}

export default Nav