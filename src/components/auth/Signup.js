import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import firebaseApp from '../../utils/auth';

const Login = ({ currentUser }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleEmail = ((event) => (setEmail(event.target.value)));
  const handlePassword = ((event) => (setPassword(event.target.value)));
  const handleSignup = (event) => {
    event.preventDefault();
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        setError(error.message);
      });
  };

  if (currentUser) {
    return (
      <Redirect exact to="/" />
    );
  }

  return (
    <div>
      <h2>{t('signup.link')}</h2>
      <div className="error">{error}</div>
      <form className="signup-form" onSubmit={handleSignup}>
        <input type="email" placeholder={t('email')} onChange={handleEmail} />
        <input type="password" placeholder={t('password')} onChange={handlePassword} />
        <input type="submit" value={t('signup.link')} />
      </form>
    </div>
  );
};

Login.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.shape),
};

Login.defaultProps = {
  currentUser: null,
};

export default Login;
