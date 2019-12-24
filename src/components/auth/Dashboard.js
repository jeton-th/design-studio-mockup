import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from './Auth';
import Products from '../products/Products';

const Dashboard = () => {
  const { t } = useTranslation();
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <h2>{t('dashboard')}</h2>
      <div className="info">
        <h3>{currentUser.name}</h3>
        <i>{currentUser.role}</i>
        <p>{currentUser.email}</p>
      </div>

      {(currentUser.role === 'admin' || currentUser.role === 'seller')
      && (
      <div className="products">
        <Products />
      </div>
      )}
    </div>
  );
};

export default Dashboard;
