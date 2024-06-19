import { FieldWrapper } from '../FieldWrapper/FieldWrapper';
import { TextInput } from '../TextInput/TextInput';

type FormTextInputProps = {
  label?: string;
  className?: string;
  disabled?: boolean;
  rightIcon?: React.ReactNode;
  placeholder?: string;
  type?: 'text' | 'date' | 'number' | 'select';
  value?: string | number;
  options?: (string | number)[];
  onChange?: (value: string | number) => void;
};

export const FormTextInput = ({
  label,
  className,
  disabled = false,
  rightIcon,
  placeholder = '',
  type = 'text',
  value = '',
  options = [],
  onChange,
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
        options={options}
        className={className}
      />
    </FieldWrapper>
  );
};
