import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from './auth/Auth';
import Home from './layout/Home';
import Dashboard from './auth/Dashboard';
import Login from './auth/Login';
import Signup from './auth/Signup';
import Loading from './layout/Loading';

const Routes = () => {
  const { userLoading, currentUser } = useContext(AuthContext);

  if (userLoading) return <Loading />;
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/dashboard"
        render={() => (
          currentUser
            ? <Dashboard />
            : <Redirect to="/login" />
        )}
      />
      <Route
        path="/login"
        render={() => (
          currentUser
            ? <Redirect to="/dashboard" />
            : <Login />
        )}
      />
      <Route
        path="/signup"
        render={() => (
          currentUser
            ? <Redirect to="/dashboard" />
            : <Signup />
        )}
      />
    </Switch>
  );
};
export default Routes;
