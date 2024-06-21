import { DatePicker } from '../DatePicker/DatePicker';
import { FieldWrapper } from '../FieldWrapper/FieldWrapper';

type FieldCalendarProps = {
  label?: string;
  placeholder?: string;
  value?: string | number | Date;
  onChange?: (value: string | Date) => void;
  htmlId: string;
};

export const FieldCalendar = ({
  label,
  placeholder = '___.__.____',
  value = '',
  onChange,
  htmlId,
}: FieldCalendarProps) => {
  const handleDataChange = (date: Date | string) => {
    if (onChange) {
      onChange(date);
    }
  };

  return (
    <FieldWrapper label={label}>
      <DatePicker
        value={value as Date}
        onChange={handleDataChange}
        htmlId={htmlId}
        placeholder={placeholder}
      />
    </FieldWrapper>
  );
};
