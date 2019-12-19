import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './layout/Header';
import Dashboard from './auth/Dashboard';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Footer from './layout/Footer';
import '../utils/i18n';
import { AuthProvider } from './auth/Auth';
import '../style/sass/App.scss';
import Home from './auth/Home';

const App = () => (
  <Suspense fallback={null}>
    <AuthProvider>
      <BrowserRouter>
        <Header />

        <div className="container" id="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  </Suspense>
);

export default App;
