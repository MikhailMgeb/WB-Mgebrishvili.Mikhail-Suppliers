import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@bem-react/classname';

import './Logo.css';

const cnLogo = cn('Logo');

type LogoProps = {
  logoComponent: React.ReactNode;
  linkTo: string;
};

export const Logo = ({ logoComponent, linkTo }: LogoProps) => {
  return (
    <div className={cnLogo()}>
      <Link to={linkTo}>
        {logoComponent}
      </Link>
    </div>
  );
};
