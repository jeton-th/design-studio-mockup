import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import firebaseApp from '../../utils/firebaseApp';
import 'firebase/auth';
import '../../style/sass/Auth.scss';

const Login = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleEmail = ((event) => (setEmail(event.target.value)));
  const handlePassword = ((event) => (setPassword(event.target.value)));
  const handleLogin = (event) => {
    event.preventDefault();
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => setError(t(error.code)));
  };

  return (
    <div className="login">
      <h2>{t('login')}</h2>
      <div className="error">{error}</div>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder={t('email')} onChange={handleEmail} required />
        <input type="password" placeholder={t('password')} onChange={handlePassword} required />
        <input type="submit" value={t('login')} />
      </form>

      <div className="demo">
        <strong>Demo users:</strong>
        <code>
          <p>admin@example.com 123456</p>
          <p>seller@example.com 123456</p>
          <p>guest@example.com 123456</p>
        </code>
      </div>
    </div>
  );
};

export default Login;
