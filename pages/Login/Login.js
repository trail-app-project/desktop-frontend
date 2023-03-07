import React from 'react';
import Button from '../Components/Button';

const Login = () => {
  return (
    <section id='login'>
      <div id="box">
        <form>
          <h1>Login</h1>
          <input type="text" placeholder='username' className='username'/>
          <input type="text" placeholder='password' className='password'/>
          <Button label="Login" />
          <Button label="Forgot Password" />
        </form>
      </div>
    </section>
  )
}

export default Login
