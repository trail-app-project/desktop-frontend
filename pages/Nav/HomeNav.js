
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Components/Button'

const Nav = () => {
  return (
    <>
      <nav>
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
    </nav>
    <div className='banner'/>
    </>
    
  )
}

export default Nav