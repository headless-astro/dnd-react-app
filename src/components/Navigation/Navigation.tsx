import React, { FC } from 'react';
import Link from '../Link';
import brand from '../../img/logo-mini.png';
import './Navigation.scss';

type Props = JSX.IntrinsicElements['header'] & {
  path?: string;
};

const Navigation: FC<Props> = () => {
  return (
    <div className="navContainer flex-container">
      <div className="flex-item item">
        <Link to="/">
          <img src={brand} alt="brand" className="brand" />
        </Link>
      </div>
      <div id="section" className="flex-item item">
        <Link to="/login">Wiki</Link>
        <Link to="/login">Lore</Link>
        <Link to="/login">Store</Link>
      </div>
      <div className="flex-item item">
        <Link to="/login">Login</Link>
        <Link cta to="/feed">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
