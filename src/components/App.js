import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import firebaseApp from '../utils/auth';
import Header from './layout/Header';
import Dashboard from './auth/Dashboard';
import Login from './auth/Login';
import Signup from './auth/Signup';
import '../utils/i18n';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => (firebaseApp.auth().onAuthStateChanged(setCurrentUser)), []);

  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path="/" component={Dashboard} currentUser={currentUser} />
          <Route path="/login" component={Login} currentUser={currentUser} />
          <Route path="/signup" component={Signup} currentUser={currentUser} />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};
export default App;
