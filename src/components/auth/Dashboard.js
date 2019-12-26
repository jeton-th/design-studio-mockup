import React, { useContext } from 'react';
import { AuthContext } from './Auth';
import Products from '../products/Products';
import '../../style/sass/Dashboard.scss';

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <div className="dashboard">
        <div className="profile">
          <h1>{currentUser.name}</h1>
          <small>Role: </small>
          <small>{currentUser.role}</small>
          <p>{currentUser.email}</p>
        </div>

        <div className="products">
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
