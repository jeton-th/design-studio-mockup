import React from 'react';
import { useTranslation } from 'react-i18next';


const Dashboard = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>
        {t('dashboard')}
      </h2>

      {/* {users.map((user) => user.name)} */}
    </div>
  );
};

export default Dashboard;
