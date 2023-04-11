import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Button from '../../Components/Button';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState('valid');
  const [passValid, setPassValid] = useState('valid');
  const [confirmPassValid, setConfirmPassValid] = useState('valid');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setEmailValid('invalid');
    } else {
      setEmailValid('valid');
    }

    if (!isValidPassword(password)) {
      setPassValid('invalid');
    } else {
      setPassValid('valid');
    }

    if (!isPasswordConfirmed(password, confirmPassword)) {
      setConfirmPassValid('invalid');
    } else {
      setConfirmPassValid('valid');
    }

    if (
      isValidEmail(email) &&
      isValidPassword(password) &&
      isPasswordConfirmed(password, confirmPassword)
    ) {
      // Handle signup logic here
      router.push('/Dashboard');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const isValidEmail = (email) => {
    // Simple email validation check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    // Password length check
    return password.length >= 8;
  };

  const isPasswordConfirmed = (password, confirmPassword) => {
    return password === confirmPassword && confirmPassword.length > 0;
  };

  return (
    <section id='signup'>
      <div id="box">
        <form className='signupform' onSubmit={handleSubmit}>
          <h1 className='signup-title'>Sign Up</h1>
          <input type="text" placeholder='Username' className='username'/>
          <input
            type="email"
            placeholder='Email'
            className='email'
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
          <input
            type="password"
            placeholder='Confirm Password'
            className='confirmpassword'
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <div className='buttons'>
            <Button type='submit' className="signup" label="Sign Up" />
            <Link href='./Login'>
              <Button className="login" label="Login" />
            </Link>
          </div>
          <p className={emailValid + ' mail'}>Invalid email!</p>
          <p className={passValid + ' pass'}>Invalid password!</p>
          <p className={confirmPassValid + ' confirmPass'}>Passwords do not match!</p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
