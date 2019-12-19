import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import firebaseApp from '../../utils/auth';
import { AuthContext } from '../auth/Auth';

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (event) => (i18n.changeLanguage(event.target.value));
  const { currentUser } = useContext(AuthContext);

  return (
    <header className="main-header">
      <div className="container">
        <div className="brand">
          <Link to="/" className="logo">
            Design Studio
          </Link>

          <nav className="main-nav">
            {currentUser ? (
              <Link to="/" onClick={() => firebaseApp.auth().signOut()}>{t('logout.link')}</Link>
            ) : (
              <div>
                <Link to="/login">{t('login.link')}</Link>
                <Link to="/signup">{t('signup.link')}</Link>
              </div>
            )}

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
