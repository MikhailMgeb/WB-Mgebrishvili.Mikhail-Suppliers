import { useState } from 'react';
import { cn } from '@bem-react/classname';

import ChevronDown from '../../assets/icons/icon-chevron-down.svg';
import { TextInput } from '../TextInput/TextInput';

import './Select.css';

const cnSelect = cn('Select');

type SelectProps = {
  options: string[];
  type?: 'search';
  onChange: (value: string) => void;
  value?: string | number;
  htmlId: string;
};

export const Select = ({
  options, type, onChange, value, htmlId,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  console.log(value);
  const toggleDropdown = () => setIsOpen((!isOpen));

  const handleOptionClick = (option: string) => {
    onChange(option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className={cnSelect()}>
      <TextInput
        className={cnSelect('Select', { type })}
        value={selectedOption}
        rightIcon={<ChevronDown />}
        onClick={toggleDropdown}
        htmlId={htmlId}
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
