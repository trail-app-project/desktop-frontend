
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { BsQuestion } from 'react-icons/bs'
import { IoLogInOutline } from 'react-icons/io5'
const Nav = () => {
  return (
    <nav>
        <Link href="./Login">
          <IoLogInOutline />
          Login
        </Link>
        <Link href='./Register'>
          Register
        </Link>
        <Link href='./Recovery'>
          Forgot password
          <BsQuestion />
        </Link>
    </nav>
  )
}

export default Nav