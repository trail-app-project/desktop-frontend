import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Button from '../../Components/Button';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [emailValid, setEmailValid] = useState('valid');
  const [passValid, setPassValid] = useState('valid');
  const router = useRouter();
  
  const handleSubmit = (event) => {
    console.log("im here")
    event.preventDefault();
    if (!isValidEmail(email) && !isValidPassword(password)) {
      setEmailValid('invalid')
      setPassValid('invalid')
    } 
    else if (!isValidEmail(email)) {
      setEmailValid('invalid');
      setPassValid('valid');
    }
    else if (!isValidPassword(password)) {
      setEmailValid('valid');
      setPassValid('invalid');
    }
    else {
      setEmailValid('valid');
      setPassValid('valid');
      // Handle login logic here
      router.push('/Dashboard');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log("email changed")
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    console.log("password changed")
  };

  const isValidEmail = (email) => {
    // Simple email validation check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    // Password length check
    return password.length >= 8;
  };

  return (
    <section id='login'>
      <div id="box">
        <form className='loginform' onSubmit={handleSubmit}>
          <h1 className='login-title'>Login</h1>
          <input
            type="text"
            placeholder='Username or Email'
            className='username'
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder='Password'
            className='password'
            value={password}
            onChange={handlePasswordChange}
          />
          <div className='buttons'>
            <Button type='submit' className="login" label="Login" />
            <Link href='./Register'>
              <Button className="signup" label="Sign-Up" />
            </Link>
            <Link href='./Recovery'>
              <Button className="forgotpass" label="Forgot Password" variant="link"/>
            </Link>
          </div>
          <p className={emailValid + ' mail'}>Invalid email!</p>
          <p className={passValid + ' pass'}>Invalid password!</p>
        </form>
      </div>
    </section>
  );
};

export default Login;
