import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './layout/Header';
import Dashboard from './auth/Dashboard';
import Login from './auth/Login';
import '../utils/i18n';

const App = () => (
  <Suspense fallback={null}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  </Suspense>
);

export default App;
