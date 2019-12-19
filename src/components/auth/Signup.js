import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import firebaseApp from '../../utils/auth';
import { AuthContext } from './Auth';

const Login = () => {
  const { t } = useTranslation();
  const { currentUser } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleName = ((event) => (setName(event.target.value)));
  const handleEmail = ((event) => (setEmail(event.target.value)));
  const handlePassword = ((event) => (setPassword(event.target.value)));
  const handleSignup = (event) => {
    event.preventDefault();
    firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .then((result) => result.user.updateProfile({ displayName: name }))
      .catch((error) => setError(t(error.code)));
  };

  if (currentUser) {
    return (
      <Redirect exact to="/dashboard" />
    );
  }

  return (
    <div>
      <h2>{t('signup.link')}</h2>
      <div className="error">{error}</div>
      <form className="signup-form" onSubmit={handleSignup}>
        <input type="text" placeholder={t('name')} onChange={handleName} required />
        <input type="email" placeholder={t('email')} onChange={handleEmail} required />
        <input type="password" placeholder={t('password')} onChange={handlePassword} required />
        <input type="submit" value={t('signup.link')} />
      </form>
    </div>
  );
};

export default Login;
