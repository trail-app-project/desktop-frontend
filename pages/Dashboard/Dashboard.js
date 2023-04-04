import React from 'react';
import Card from '../../Components/Card';
import Nav from '../../Components/Nav/UserNav';

const Dashboard = () => {
  return (
    <section className='dashboard'>
      <Nav />
      <div className="card-container">
        <Card className="card"/>
      </div>
    </section>
  )
}

export default Dashboard;
