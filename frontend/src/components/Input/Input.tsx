import type { ChangeEvent } from 'react';
import { cn } from '@bem-react/classname';

import './Input.css';

const cnInput = cn('Input');

type InputProps = {
  className?: string;
  disabled?: boolean;
  rightIcon?: React.ReactNode;
  placeholder?: string;
  type?: 'text' | 'date' | 'number';
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({
  className,
  disabled = false,
  rightIcon,
  placeholder = '',
  type = 'text',
  value = '',
  onChange,
}: InputProps) => {
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
