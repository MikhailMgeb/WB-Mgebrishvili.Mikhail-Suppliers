import React from 'react';
import { cn } from '@bem-react/classname';
import { NavLink } from 'react-router-dom';

import './NavBar.css';

const cnNavBar = cn('NavBar');

type NavBarProps = {
  navItems: { id: string; to: string; label: string }[];
};

export const NavBar = ({ navItems }: NavBarProps) => {
  return (
    <nav className={cnNavBar()}>
      {navItems.map((item) => (
        <NavLink
          to={item.to}
          className={cnNavBar('Link')}
          key={item.id}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
};
