import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAuth } from '../../Components/hooks/useAuth';
import Landing from './Landing';

const Home = () => {

  const router = useRouter();
  const { isAuthenticated } = useAuth;

  useEffect(() => {
    if (isAuthenticated){
      router.push("/Dashboard")
    }
  }, [isAuthenticated]);

  return (
    <div>
        <Landing />
    </div>
  )
}

export default Home
