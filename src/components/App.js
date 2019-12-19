import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './layout/Header';
import Dashboard from './auth/Dashboard';
import Login from './auth/Login';
import Signup from './auth/Signup';
import '../utils/i18n';
import { AuthProvider } from './auth/Auth';

const App = () => (
  <Suspense fallback={null}>
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  </Suspense>
);

export default App;
