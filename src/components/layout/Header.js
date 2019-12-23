import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import firebaseApp from '../../utils/auth';
import { AuthContext } from '../auth/Auth';
import '../../style/sass/Header.scss';

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (event) => (i18n.changeLanguage(event.target.value));
  const { currentUser } = useContext(AuthContext);

  return (
    <header className="main-header">
      <div className="container">
        <div className="brand">
          <Link to="/" className="logo">
            <h1>Design Studio</h1>
          </Link>
        </div>

        {currentUser ? (
          <nav className="main-nav">
            <Link to="/home">{t('home')}</Link>
            <Link to="/dashboard">{t('dashboard')}</Link>
            <Link to="/" onClick={() => firebaseApp.auth().signOut()}>{t('logout')}</Link>
          </nav>
        ) : (
          <nav className="main-nav">
            <Link to="/home">{t('home')}</Link>
            <Link to="/login">{t('login')}</Link>
            <Link to="/signup">{t('signup')}</Link>
          </nav>
        )}

        <div className="lang">
          <button type="button" value="en" onClick={changeLanguage}>English</button>
          <button type="button" value="fr" onClick={changeLanguage}>Français</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
