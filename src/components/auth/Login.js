import React from 'react';
import { useTranslation } from 'react-i18next';


const Login = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('login.link')}</h2>
      <form className="login-form">
        <input type="email" placeholder={t('email')} />
        <input type="password" placeholder={t('password')} />
      </form>
    </div>
  );
};

export default Login;
