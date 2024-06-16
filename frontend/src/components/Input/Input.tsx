import type { ChangeEvent, FC } from 'react';

import { cnInput } from './Input.classname';

import './Input.css';

type InputProps = {
  className?: string;
  disabled?: boolean;
  rightIcon?: React.ReactNode;
  placeholder?: string;
  type?: 'text' | 'date' | 'number';
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<InputProps> = ({
  className,
  disabled = false,
  rightIcon,
  placeholder = '',
  type = 'text',
  value = '',
  onChange,
}) => {
  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={cnInput({ type, disabled, 'has-value': !!value }, className)}>
      <input
        className={cnInput('Input')}
        value={value}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        onChange={handleChangeValue}
      />
      {type !== 'date' && <span className={cnInput('RightIcon')}>{rightIcon || 'шт'}</span>}
    </div>
  );
};

export { Input };
