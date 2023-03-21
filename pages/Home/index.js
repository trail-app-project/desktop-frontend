import React, { Suspense } from 'react';
import Landing from './Landing';

const Home = () => {
  const Dashboard = React.lazy(() => import('../Dashboard'))

  const isAuthenticated = 0;

  return (
    <div>
      {isAuthenticated ? (
        <Suspense fallback={<div>Loading...</div>}>
          <Dashboard />
        </Suspense>
      ) : (
        <Landing />
      )}
    </div>
  )
}

export default Home
