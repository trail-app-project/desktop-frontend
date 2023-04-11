import Link from 'next/link';
import React from 'react';
import Button from '../../Components/Button';

const CheckInbox = () => {
  return (
    <section id='check-inbox'>
      <div id="box">
        <h1 className='check-inbox-title'>Check Your Inbox</h1>
        <p className='check-inbox-text'>We have sent a password reset link to your email. Please check your inbox and follow the instructions to reset your password.</p>
        <Link href='./Login'>
          <Button className="back-to-login" label="Back to Login" />
        </Link>
      </div>
    </section>
  );
};

export default CheckInbox;
