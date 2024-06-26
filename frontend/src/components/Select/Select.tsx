import { useState } from 'react';
import { cn } from '@bem-react/classname';

import ChevronDown from '../../assets/icons/icon-chevron-down.svg';
import { TextInput } from '../TextInput/TextInput';

import './Select.css';

const cnSelect = cn('Select');

type SelectProps = {
  options: string[];
  onChange: (value: string) => void;
  htmlId: string;
  value: string;
  type: 'search' | 'text';
};

export const Select = ({
  options, onChange, htmlId, value, type,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    onChange(option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={cnSelect()}>
      <TextInput
        className={cnSelect('Select')}
        value={selectedOption}
        rightIcon={<ChevronDown />}
        onClick={toggleDropdown}
        htmlId={htmlId}
        type={type}
      />
      {isOpen && (
        <div className={cnSelect('List')}>
          {options.map((option) => (
            <div
              key={option}
              className={cnSelect('Option')}
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
