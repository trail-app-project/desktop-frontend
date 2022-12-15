
import Image from 'next/image'
import Link from 'next/link'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import Logo from '../../public/Logo'
import Button from '../Components/Button'

import styled from 'styled-components'
import useDimensions from '../Components/hooks/useDimensions'


const NavStyle = styled.div`
  nav{
    width: ${props=> props.winWidth+'px'};
  }
`;

const LogoStyle = styled.div`
  #logo{
    transform: translateX(${props=>props.winWidth+'px'});
  }
`

const Nav = () => {

  const winWidth = useDimensions().winWidth
  const navRef = useRef()

  useEffect(() => {
    console.log(navRef)
  }, [navRef]);

  return (
    <section className='navbar' ref={navRef}>
      <LogoStyle winWidth={((winWidth/2)-(150/2))}>
        <Logo />
      </LogoStyle>
      <NavStyle winWidth={winWidth}>
        <nav>
          <h1 className='title'>Trail</h1>
          <div className='buttons'>
            <div className='signing'>
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