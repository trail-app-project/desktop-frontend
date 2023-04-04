import React, { Suspense } from 'react';
import HomeNav from './HomeNav';

const index = ({ isAuthenticated = 0}) => {
  const UserNav = React.lazy(() => import('./UserNav'));

  return (
    <nav>
      {isAuthenticated ? (
        <Suspense fallback={<div>Loading...</div>}>
          <UserNav />
        </Suspense>
      ) : (
        <HomeNav />
      )}
    </nav>
  );
};

export default index;
