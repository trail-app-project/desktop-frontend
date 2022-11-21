
import Image from 'next/image'
import Link from 'next/link'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import Logo from '../../public/Logo'
import Button from '../Components/Button'

import styled from 'styled-components'
import useDimensions from '../Components/hooks/useDimensions'

const Nav = () => {
  const [winHeight, setWinHeight] = useState();
	const [winWidth, setWinWidth] = useState();

	const handleWindowSizeChange = () => {
		setWinWidth(window.innerWidth);
	};

	useEffect(() => {
	setWinHeight(window.innerHeight);
	setWinWidth(window.innerWidth);

	window.addEventListener('resize', handleWindowSizeChange);
		return () => {
			window.removeEventListener('resize', handleWindowSizeChange);
		};
	}, [])

const Style = styled.div`
  #logo{
      width: 150px;
      z-index: 2;
      display: flex;
      position: absolute;
      top: 2rem;
      filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, .5));
      transform-origin: 50% 50%;
      transform: translateX(${String((winWidth/2)-(150/2))+'px'});
      &:hover{
          .primary{
              transform: rotate(180deg);
          }
          .secondary{
              transform: rotate(-90deg);
          }
      }
  }
`;

  return (
    <>
      <Style>
        <Logo />
      </Style>
        <nav className='navbar'>
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
    </>
  )
}

export default Nav