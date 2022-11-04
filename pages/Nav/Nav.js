
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Components/Button'

const Nav = () => {
  return (
    <>
      <nav>
        <Link href="./Login">
          <Button label="Login" />
        </Link>
        <Link href='./Register'>
          <Button label="Register"/>
        </Link>
        <Link href='./Recovery'>
          <Button label="Forgot Password?"/>
        </Link>
    </nav>
    <div className='banner'/>
    </>
    
  )
}

export default Nav