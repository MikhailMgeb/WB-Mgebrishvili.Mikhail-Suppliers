import { FieldWrapper } from '../FieldWrapper/FieldWrapper';
import { Select } from '../Select/Select';

type FormSelectProps = {
  label?: string;
  onChange?: (value: string | number) => void;
  options: string[];
  htmlId: string;
  value: string;
};

export const FormSelect = ({
  label,
  onChange,
  options,
  htmlId,
  value,
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
        onChange={handleInputChange}
        options={options}
        htmlId={htmlId}
        value={value}
      />
    </FieldWrapper>
  );
};
