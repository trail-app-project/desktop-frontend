import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { useAuth } from '../../Components/hooks/useAuth';
import Dashboard from './Dashboard';
const Index = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    console.log(isAuthenticated)
    if (!isAuthenticated){
      router.push("/")
    }
  }, [isAuthenticated]);
  
  return (
    <>
      <Dashboard />
    </>
  )
}

export default Index
