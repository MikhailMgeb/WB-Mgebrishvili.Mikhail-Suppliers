import type { ChangeEvent } from 'react';
import { cn } from '@bem-react/classname';

import './TextInput.css';

const cnTextInput = cn('TextInput');

type TextInputProps = {
  className?: string;
  disabled?: boolean;
  rightIcon?: React.ReactNode;
  placeholder?: string;
  type?: 'text' | 'date' | 'number';
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
  type = 'text',
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

  const shouldShowShorthand = type === 'text' || type === 'date';

  return (
    <div className={cnTextInput({ type, disabled }, className)} onClick={onClick}>
      <input
        className={cnTextInput('Input')}
        value={value}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        onChange={handleChangeValue}
        id={htmlId}
      />
      {shouldShowShorthand && <span className={cnTextInput('RightIcon')}>{rightIcon || 'шт'}</span>}
    </div>
  );
};
