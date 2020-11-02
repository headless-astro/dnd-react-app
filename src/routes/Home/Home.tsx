import React, { FunctionComponent } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header';
import './Home.scss';

const Home: FunctionComponent = () => {
  const location = useLocation();
  const path = location.pathname.split('/')[1];

  return (
    <div id="container" className="flex-container column">
      <Header path={path} className="flex-item" />

      <div id="main" className="flex-item item ">
        <div className="grid home">
          <p>ha</p>
        </div>
      </div>
      <div id="bottom" className="flex-item item">
        <div className="grid home">
          <p>ha</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
