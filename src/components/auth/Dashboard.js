import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthContext } from './Auth';

const Dashboard = () => {
  const { t } = useTranslation();
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Redirect to="/login" />;

  return (
    <div>
      <h2>{t('dashboard')}</h2>
      <p>{currentUser.email}</p>
    </div>
  );
};

export default Dashboard;
