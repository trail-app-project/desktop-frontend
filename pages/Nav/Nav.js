
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { BsQuestion } from 'react-icons/bs'
import { IoLogInOutline } from 'react-icons/io5'
const Nav = () => {
  return (
    <nav>
    <a>
      <Link href="./Login">
        <IoLogInOutline />
        Login
      </Link>
      </a>
      <a>
        <Link href='./Register'>
          Register
        </Link>
      </a>
      <a>
      <Link href='./Recovery'>
        Forgot password
        <BsQuestion />
      </Link>
      </a>
    </nav>
  )
}

export default Nav