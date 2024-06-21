import type { ChangeEvent, ReactNode } from 'react';
import { cn } from '@bem-react/classname';

import './TextInput.css';

const cnTextInput = cn('TextInput');

type TextInputProps = {
  className?: string;
  disabled?: boolean;
  rightIcon?: ReactNode;
  placeholder?: string;
  type?: 'text' | 'search' | 'number';
  value?: string | number;
  onChange?: (event: string | number) => void;
  onClick?: () => void;
  htmlId: string;
};

export const TextInput = ({
  className,
  disabled = false,
  rightIcon,
  placeholder = '',
  type,
  value = '',
  onChange,
  onClick,
  htmlId,
}: TextInputProps) => {
  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      let newValue: string | number = event.target.value;
      if (type === 'number') {
        newValue = Number(newValue);
      }
      onChange(newValue);
    }
  };

  return (
    <div className={cnTextInput({ type, disabled, 'has-value': !!value }, className)} onClick={onClick}>
      <input
        className={cnTextInput('Input')}
        value={value}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        onChange={handleChangeValue}
        id={htmlId}
      />
      {rightIcon ? <span className={cnTextInput('RightIcon')}>{rightIcon || 'шт'}</span> : null}
      {type === 'number' ? <span className={cnTextInput('RightIcon')}>шт</span> : null}
    </div>
  );
};
