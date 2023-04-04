import Image from 'next/image';
import React from 'react';
import Nav from '../../Components/Nav';

import { gsap, Power3 } from "gsap";
import background from '../../public/background.svg';
import bottom from '../../public/bottom.svg';
import clouds from '../../public/clouds.svg';
import middle from '../../public/middle.svg';
import top from '../../public/top.svg';

const Home = () => {

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

  return (
    <div id='home'>
      <Nav/>
      <h1 className='title main' onMouseEnter={onEnter} onMouseLeave={onLeave}> Trail </h1>
      <h1 className='title back1' > Trail </h1>
      <h1 className='title back2' > Trail </h1>
      <div className='background'/>
    </div>
  )
}

export default Home
