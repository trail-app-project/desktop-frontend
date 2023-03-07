import Image from 'next/image';
import React from 'react';
import Nav from '../Nav/';

import background from '../../public/background.svg';
import bottom from '../../public/bottom.svg';
import clouds from '../../public/clouds.svg';
import middle from '../../public/middle.svg';
import top from '../../public/top.svg';

const Home = () => {

  return (
    <section id='home'>
      <Nav/>
      <Image src={background} alt='background' className='background' ></Image>
      <Image src={bottom}     alt='bottom'     className='bottom'     ></Image>
      <Image src={middle}     alt='middle'     className='middle'     ></Image>
      <Image src={top}        alt='top'        className='top'        ></Image>
      <Image src={clouds}     alt='clouds'     className='clouds'     ></Image>
    </section>
  )
}

export default Home