import { cnMenuDropdown } from './MenuDropdown.classname';

import './MenuDropdown.css';

type MenuDropdownProps = {
  options: string[];
  isOpenMenu: boolean;
  onSelect: (option: string) => void;
};

export const MenuDropdown = ({ options, isOpenMenu, onSelect }: MenuDropdownProps) => {
  const handleOptionClick = (option: string) => {
    onSelect(option);
  };

  if (!isOpenMenu) {
    return null;
  }

  return (
    <div className={cnMenuDropdown({})}>
      {options.map((option, index) => (
        <div className={cnMenuDropdown('Item')} key={String(index + option)} onClick={() => handleOptionClick(option)}>
          {option}
        </div>
      ))}
    </div>
  );
};
