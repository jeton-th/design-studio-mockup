import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (event) => (i18n.changeLanguage(event.target.value));

  return (
    <header className="main-header">
      <div className="container">
        <div className="brand">
          <Link to="/" className="logo">
            Design Studio
          </Link>

          <nav className="main-nav">
            <Link to="login">{t('login.link')}</Link>
            <Link to="/">{t('logout.link')}</Link>
            <Link to="/">{t('signup.link')}</Link>
            <div className="lang">
              <button type="button" value="en" onClick={changeLanguage}>English</button>
              <button type="button" value="fr" onClick={changeLanguage}>Français</button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
