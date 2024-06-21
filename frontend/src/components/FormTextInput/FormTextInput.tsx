import { ReactNode } from 'react';

import { FieldWrapper } from '../FieldWrapper/FieldWrapper';
import { TextInput } from '../TextInput/TextInput';

type FormTextInputProps = {
  label?: string;
  className?: string;
  disabled?: boolean;
  rightIcon?: ReactNode;
  placeholder?: string;
  type: 'text' | 'number';
  value?: string | number;
  onChange?: (value: string | number) => void;
  htmlId: string;
};

export const FormTextInput = ({
  label,
  className,
  disabled = false,
  rightIcon,
  placeholder = '',
  type = 'text',
  value = '',
  onChange,
  htmlId,
}: FormTextInputProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | string | number) => {
    if (typeof event === 'string' || typeof event === 'number') {
      if (onChange) {
        onChange(event);
      }
    } else {
      const newValue = event.target.value;
      if (onChange) {
        onChange(newValue);
      }
    }
  };

  return (
    <FieldWrapper label={label}>
      <TextInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        rightIcon={rightIcon}
        disabled={disabled}
        className={className}
        htmlId={htmlId}
      />
    </FieldWrapper>
  );
};
