import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import firebaseApp from '../../utils/firebaseApp';
import { AuthContext } from '../auth/Auth';
import '../../style/sass/Header.scss';


const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (event) => (i18n.changeLanguage(event.target.value));
  const { currentUser } = useContext(AuthContext);
  const [navShow, setNavShow] = useState('');

  const togglenavShow = () => {
    setNavShow((prevnavShow) => (prevnavShow ? '' : 'show'));
  };

  const closeNav = (event) => {
    if (event.key === 'Escape') {
      setNavShow('');
    } else if (event.key === 'Enter' || event.key === ' ') {
      setNavShow('show');
    }
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="brand">
          <Link to="/" className="logo">
            <h1>Design Studio</h1>
          </Link>
        </div>

        <nav className={`main-nav ${navShow}`}>
          {currentUser ? (
            <div className="nav-links">
              <Link to="/dashboard">{t('dashboard')}</Link>
              <Link to="/" onClick={() => firebaseApp.auth().signOut()}>{t('logout')}</Link>
            </div>
          ) : (
            <div className="nav-links">
              <Link to="/login">{t('login')}</Link>
              <Link to="/signup">{t('signup')}</Link>
            </div>
          )}

          <div className="lang">
            <button type="button" value="en" onClick={changeLanguage}>English</button>
            <button type="button" value="fr" onClick={changeLanguage}>Français</button>
          </div>
        </nav>

        <div
          className={`nav-icon ${navShow}`}
          onKeyDown={closeNav}
          onClick={togglenavShow}
          role="button"
          tabIndex="0"
        >
          <div className="bar one" />
          <div className="bar two" />
        </div>
      </div>
    </header>
  );
};

export default Header;
