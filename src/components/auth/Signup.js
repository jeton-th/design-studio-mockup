import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import firebaseApp, { firestore } from '../../utils/firebaseApp';
import '../../style/sass/Auth.scss';

const Signup = () => {
  const { t } = useTranslation();
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
      .then((resp) => firestore.collection('users').doc(resp.user.uid).set({ name, role: 'guest' }))
      .catch((error) => setError(t(error.code)));
  };

  return (
    <div className="signup">
      <h2>{t('signup')}</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleSignup}>
        <input type="text" placeholder={t('name')} onChange={handleName} required />
        <input type="email" placeholder={t('email')} onChange={handleEmail} required />
        <input type="password" placeholder={t('password')} onChange={handlePassword} required />
        <input type="submit" value={t('signup')} />
      </form>
    </div>
  );
};

export default Signup;
