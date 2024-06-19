import { FieldWrapper } from '../FieldWrapper/FieldWrapper';
import { Select } from '../Select/Select';

type FormSelectProps = {
  label?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  options: string[];
  htmlId: string;
  type?: 'search';
};

export const FormSelect = ({
  label,
  value = '',
  onChange,
  options,
  htmlId,
  type,
}: FormSelectProps) => {
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
      <Select
        value={value}
        onChange={handleInputChange}
        options={options}
        htmlId={htmlId}
        type={type}
      />
    </FieldWrapper>
  );
};
