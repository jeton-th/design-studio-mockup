import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import firebaseApp from '../../utils/auth';

const Header = ({ currentUser }) => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (event) => (i18n.changeLanguage(event.target.value));
  const logout = () => {
    firebaseApp
      .auth()
      .signOut();
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="brand">
          <Link to="/" className="logo">
            Design Studio
          </Link>

          <nav className="main-nav">
            {currentUser ? (
              <Link to="/" onClick={logout}>{t('logout.link')}</Link>
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

Header.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.shape),
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
