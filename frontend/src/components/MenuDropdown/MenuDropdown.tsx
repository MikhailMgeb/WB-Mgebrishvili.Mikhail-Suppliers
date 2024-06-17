import type { FC } from 'react';

import { cnMenuDropdown } from './MenuDropdown.classname';

import './MenuDropdown.css';

type MenuDropdownProps = {
  options: string[];
  isOpenMenu: boolean;
};

export const MenuDropdown: FC<MenuDropdownProps> = ({ options, isOpenMenu }) => {
  if (!isOpenMenu) {
    return null;
  }

  return (
    <div className={cnMenuDropdown({})}>
      {options.map((option, index) => (
        <div className={cnMenuDropdown('Item')} key={String(index + option)}>
          {option}
        </div>
      ))}
    </div>
  );
};
