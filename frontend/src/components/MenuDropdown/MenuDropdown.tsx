import { useState, type FC } from 'react';

import { cnMenuDropdown } from './MenuDropdown.classname';

import './MenuDropdown.css';

type MenuDropdownProps = {
  options: string[]
};

export const MenuDropdown: FC<MenuDropdownProps> = ({ options }) => {
  const [openMenus, setOpenMenus] = useState<boolean[]>(Array(options.length).fill(false));

  //   const handleClick = (index: number) => {
  //     if (onClick) {
  //       onClick();
  //     }

  //     const newOpenMenus = openMenus.map((isOpen, indexMenu) => (indexMenu === index
  //       ? !isOpen : false));
  //     setOpenMenus(newOpenMenus);
  //   };

  const handleOptionClick = () => {
    setOpenMenus(Array(options.length).fill(false));
  };

  return (
    <div className={cnMenuDropdown()}>
      {openMenus[0] && (
        <div className={cnMenuDropdown('Menu')}>
          {options.map((option, index) => (
            <div
              key={String(index + option)}
              className={cnMenuDropdown('Item')}
              onClick={() => handleOptionClick()}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
