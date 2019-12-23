import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Header from './layout/Header';
import Footer from './layout/Footer';
import { AuthProvider } from './auth/Auth';
import '../style/sass/App.scss';
import '../utils/i18n';

const App = () => (
  <Suspense fallback={null}>
    <AuthProvider>
      <BrowserRouter>
        <Header />

        <div className="container" id="content">
          <Routes />
        </div>

        <Footer />
      </BrowserRouter>
    </AuthProvider>
  </Suspense>
);

export default App;
