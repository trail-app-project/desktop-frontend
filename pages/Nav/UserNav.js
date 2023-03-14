import Image from "next/image";
import Link from "next/link";
import React, { forwardRef, useEffect, useRef, useState } from "react";

import styled from "styled-components";

import Logo from "../../public/Logo";
import Button from "../Components/Button";
import useDimensions from "../Components/hooks/useDimensions";

const NavStyle = styled.div`
  nav {
    width: ${(props) => props.winWidth + "px"};
  }
`;

const LogoStyle = styled.div`
  #logo {
    transform: translateX(${(props) => props.winWidth + "px"});
  }
`;

const Nav = () => {
  const winWidth = useDimensions().winWidth;
  const back1 = useRef(null);
  const back2 = useRef(null);

  useEffect(() => {}, []);

  return (
    <section className="navbar">
      <LogoStyle winWidth={winWidth / 2 - 150 / 2}>
        <Logo />
      </LogoStyle>
      <NavStyle winWidth={winWidth}>
        <nav>
          <div className="buttons">
            <div className="signing">
              <Link href="./Home">
                <Button label="Logout" size="large" />
              </Link>
            </div>
          </div>
          <div className="banner" />
        </nav>
      </NavStyle>
    </section>
  );
};

export default Nav;
