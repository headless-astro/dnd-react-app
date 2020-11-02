import React, { FC } from 'react';

import Routes from './routes';

import './styles/index.scss';

import Footer from './components/Footer';
import Navigation from './components/Navigation';

const App: FC = () => {
  return (
    <div className="fullpage flex-container column">
      <a className="skip-link screen-reader-text" href="#content">
        Skip to content
      </a>
      <div className="flex-item">
        <Navigation />
      </div>

      <main id="content" className="flex-item main-content content">
        <Routes />
      </main>

      <Footer className="flex-item" style={{ flex: '0' }} />
    </div>
  );
};

export default App;
