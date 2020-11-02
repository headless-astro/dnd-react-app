import React, { FC } from 'react';

import './Header.scss';

type Props = JSX.IntrinsicElements['header'] & {
  path?: string;
};

const Header: FC<Props> = ({ className, path }) => {
  const baseStyle = 'flex-container';
  const headerStyle = path === '' ? `homepage` : ``;
  const classNames = className
    ? `${baseStyle} ${headerStyle}  ${className}`
    : `${baseStyle} ${headerStyle}`;

  return <header className={classNames} />;
};

export default Header;
