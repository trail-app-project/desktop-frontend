import Link from 'next/link';
import React from 'react';
import Button from '../Components/Button';

const Login = () => {
  return (
    <section id='login'>
      <div id="box">
        <form className='loginform'>
          <h1 className='login-title'>Login</h1>
          <input type="text" placeholder='Username or Email' className='username'/>
          <input type="text" placeholder='Password' className='password'/>
        </form>
        <div className='buttons'>
          <Link href='./Home'>
            <Button className="login" label="Login" />
          </Link>
          <Link href='./Register'>
            <Button className="signup" label="Sign-Up" />
          </Link>
          <Link href='./Recovery'>
            <Button className="forgotpass" label="Forgot Password" variant="link"/>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Login
