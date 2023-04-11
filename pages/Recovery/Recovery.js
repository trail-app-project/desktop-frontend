import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Button from '../../Components/Button';

const PasswordRecovery = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState('valid');
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setEmailValid('invalid');
    } else {
      setEmailValid('valid');
      // Handle sending password reset link logic here
      router.push('/CheckInbox');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const isValidEmail = (email) => {
    // Simple email validation check
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <section id='password-recovery'>
      <div id="box">
        <form className='recovery-form' onSubmit={handleSubmit}>
          <h1 className='recovery-title'>Password Recovery</h1>
          <input
            type="email"
            placeholder='Email'
            className='email'
            value={email}
            onChange={handleEmailChange}
          />
          <Button type='submit' className="recover" label="Recover Password" />
          <p className={emailValid + ' mail'}>Invalid email!</p>
        </form>
      </div>
    </section>
  );
};

export default PasswordRecovery;
