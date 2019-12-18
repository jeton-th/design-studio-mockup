import React from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Dashboard = ({ currentUser }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>
        {t('dashboard')}
      </h2>

      <p>{currentUser && currentUser.email}</p>
    </div>
  );
};

Dashboard.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.shape),
};

Dashboard.defaultProps = {
  currentUser: null,
};
export default Dashboard;
