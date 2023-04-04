import Image from "next/image";
import Link from "next/link";
import React, { forwardRef, Suspense, useEffect, useRef, useState } from "react";

import styled from "styled-components";

import Logo from "../../public/Logo";
import Button from "../Button";
import useDimensions from "../hooks/useDimensions";
import { NavStyle } from "./Styles/Nav.styled";

const LogoStyle = styled.div`
  #logo {
    transform: translateX(${({winWidth, logosize}) => (winWidth/20 - logosize/2) + "px"});
    width: ${({ logosize }) => logosize +"px"};
  }
`;

const Nav = () => {
  const winWidth = useDimensions().winWidth;
  const logosize = 100;
  const back1 = useRef(null);
  const back2 = useRef(null);

  useEffect(() => {}, []);

  return (
    <>
      <LogoStyle winWidth={winWidth} logosize={logosize}>
        <Suspense fallback={<div>Loading...</div>}>
          <Logo />
        </Suspense>
      </LogoStyle>
      
      <NavStyle winWidth={winWidth}>
        <div className="navbar">
          <h1 className="username">Usergeneric&apos;s trails</h1>
          <div className="buttons">
            <div className="signing">
              <Link href="./Home">
                <Button label="Logout" size="large" />
              </Link>
            </div>
          </div>
          <div className="banner" />
        </div>
      </NavStyle>
    </>
  );
};

export default Nav;
