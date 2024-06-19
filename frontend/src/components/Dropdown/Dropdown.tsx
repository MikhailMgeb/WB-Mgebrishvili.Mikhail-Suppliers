import { useState } from 'react';
import { cn } from '@bem-react/classname';

import ChevronDown from '../../assets/icons/icon-chevron-down.svg';

import './Dropdown.css';

const cnDropdown = cn('Dropdown');

type DropdownProps = {
  options: string[];
  type?: 'search';
  onChange: (value: string) => void;
};

export const Dropdown = ({ options, type, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option: string) => {
    onChange(option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={cnDropdown()}>
      <div className={cnDropdown('Select', { type })} onClick={toggleDropdown}>
        {selectedOption}
        <span className={cnDropdown('Arrow', { open: isOpen })}><ChevronDown /></span>
      </div>
      {isOpen && (
        <div className={cnDropdown('List')}>
          {options.map((option) => (
            <div
              key={option}
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
