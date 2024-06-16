import { useState } from 'react';
import type { FC } from 'react';
import { uid } from 'uid';

import ChevronDown from '../../assets/icons/icon-chevron-down.svg';

import { cnDropdown } from './Dropdown.classname';

import './Dropdown.css';

type DropdownProps = {
  options: string[];
};

const Dropdown: FC<DropdownProps> = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={cnDropdown()}>
      <div className={cnDropdown('Select')} onClick={toggleDropdown}>
        {selectedOption}
        <span className={cnDropdown('Arrow', { open: isOpen })}><ChevronDown /></span>
      </div>
      {isOpen && (
        <div className={cnDropdown('List')}>
          {options.map((option) => (
            <div
              key={uid()}
              className={cnDropdown('Option')}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { Dropdown };
