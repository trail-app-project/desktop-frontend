import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { AuthContext } from '../../src/context/auth-context';
import Dashboard from './Dashboard';
const Index = () => {
  const router = useRouter();
  const authContext = useContext(AuthContext);

  useEffect(() => {
  // checks if the user is authenticated
    const auth = async () => {
      return await authContext.isUserAuthenticated()
    }
    auth
    ? router.push("/Dashboard")
    : router.push("/");
  }, []);
  return (
    <>
      <Dashboard />
    </>
    
  )
}

export default Index
