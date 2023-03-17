import React, { Suspense } from 'react';
import HomeNav from './HomeNav';

const index = ({ isAuthenticated = 0}) => {
  const UserNav = React.lazy(() => import('./UserNav'));

  return (
    <section id='navbar'>
      {isAuthenticated ? (
        <Suspense fallback={<div>Loading...</div>}>
          <UserNav />
        </Suspense>
      ) : (
        <HomeNav />
      )}
    </section>
  );
};

export default index;
