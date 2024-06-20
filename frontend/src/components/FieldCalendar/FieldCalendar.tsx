import React from 'react';

import { DatePicker } from '../DatePicker/DatePicker';
import { FieldWrapper } from '../FieldWrapper/FieldWrapper';

type FieldCalendarProps = {
  label?: string;
  placeholder?: string;
  value?: string | number | Date; // Добавлен тип Date для value
  onChange?: (value: string | number | Date) => void; // Изменен тип onChange
  htmlId: string;
};

export const FieldCalendar = ({
  label,
  placeholder = '___.__.____',
  value = '',
  onChange,
  htmlId,
}: FieldCalendarProps) => {
  const handleDataChange = (date: Date) => {
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
