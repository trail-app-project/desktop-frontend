import Link from 'next/link';
import React from 'react';
import Button from '../Components/Button';

const SignUp = () => {
  return (
    <section id='signup'>
      <div id="box">
        <form className='signupform'>
          <h1 className='signup-title'>Sign Up</h1>
          <input type="text" placeholder='Username' className='username'/>
          <input type="email" placeholder='Email' className='email'/>
          <input type="password" placeholder='Password' className='password'/>
          <input type="password" placeholder='Confirm Password' className='confirmpassword'/>
        </form>
        <div className='buttons'>
          <Link href='./Dashboard'>
            <Button className="signup" label="Sign Up" />
          </Link>
          <Link href='./Login'>
            <Button className="login" label="Login" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SignUp;
