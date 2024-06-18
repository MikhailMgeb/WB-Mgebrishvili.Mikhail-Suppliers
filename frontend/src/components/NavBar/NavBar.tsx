import React from 'react';
import { NavLink } from 'react-router-dom';

import { cnNavBar } from './NavBar.classname';

import './NavBar.css';

type NavBarProps = {
  navItems: { id: string; to: string; label: string }[];
};

export const NavBar = ({ navItems }: NavBarProps) => {
  return (
    <nav className={cnNavBar()}>
      <ul className={cnNavBar('List')}>
        {navItems.map((item) => (
          <li className={cnNavBar('Item')} key={item.id}>
            <NavLink
              to={item.to}
              className={cnNavBar('Link')}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
