import { cn } from '@bem-react/classname';
import React, { ChangeEvent, useEffect, useState } from 'react';

import ChevronDown from '../../assets/icons/icon-chevron-down.svg';
import './TextInput.css';

const cnTextInput = cn('TextInput');

type TextInputProps = {
  className?: string;
  disabled?: boolean;
  rightIcon?: React.ReactNode;
  placeholder?: string;
  type?: 'text' | 'date' | 'number' | 'select';
  value?: string | number;
  options?: (string | number)[];
  onChange?: (value: string | number) => void;
};

export const TextInput: React.FC<TextInputProps> = ({
  className,
  disabled = false,
  rightIcon,
  placeholder = '',
  type = 'text',
  value = '',
  options = [],
  onChange,
}) => {
  const handleChangeValue = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (onChange) {
      let newValue: string | number = event.target.value;
      if (type === 'number') {
        newValue = Number(newValue);
      }
      onChange(newValue);
    }
  };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOutsideClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (!target.closest(`.${cnTextInput('Select')}`)) {
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string | number) => {
    if (onChange) onChange(option);
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  if (type === 'select') {
    return (
      <div className={cnTextInput({ type, disabled })}>
        <div className={cnTextInput('Select')} onClick={toggleDropdown}>
          {selectedOption}
          <span className={cnTextInput('Arrow', { open: isOpen })}><ChevronDown /></span>
        </div>
        {isOpen && (
          <div className={cnTextInput('List')}>
            {options.map((option) => (
              <div
                key={option}
                className={cnTextInput('Option')}
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={cnTextInput({ type, disabled, 'has-value': !!value }, className)}>
      <input
        className={cnTextInput('TextInput')}
        value={value}
        placeholder={placeholder}
        type={type === 'number' ? 'number' : 'text'}
        disabled={disabled}
        onChange={handleChangeValue}
      />
      {type !== 'date' && <span className={cnTextInput('RightIcon')}>{rightIcon || 'шт'}</span>}
    </div>
  );
};
