import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthContext } from './Auth';

const Dashboard = () => {
  const { t } = useTranslation();
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      <h2>{t('dashboard')}</h2>
      <p>{currentUser.displayName}</p>
      <p>{currentUser.email}</p>
    </div>
  );
};

export default Dashboard;
