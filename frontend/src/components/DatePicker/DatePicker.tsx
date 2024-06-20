import React, { useState } from 'react';
import { cn } from '@bem-react/classname';
import { format } from 'date-fns';

import { TextInput } from '../TextInput/TextInput';
import { Calendar } from '../Calendar/Calendar';

import CalendarIcon from '../../assets/icons/icon-cal.svg';

import './DatePicker.css';

type DatePickerProps = {
  value?: Date;
  onChange: (date: Date) => void;
  htmlId: string;
  placeholder: string;
};

const cnDatePicker = cn('DatePicker');

export const DatePicker = ({
  value, onChange, htmlId, placeholder,
}: DatePickerProps) => {
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(value || new Date());

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    onChange(date);
    setShowCalendar(false);
  };

  const toggleCalendar = () => setShowCalendar(!showCalendar);

  return (
    <div className={cnDatePicker()}>
      <TextInput
        className={cnDatePicker('Input')}
        value={format(selectedDate, 'dd.MM.yyyy')}
        rightIcon={<CalendarIcon />}
        onClick={toggleCalendar}
        htmlId={htmlId}
        placeholder={placeholder}
      />
      {showCalendar && (
        <div className={cnDatePicker('Calendar')}>
          <Calendar selectedDate={selectedDate} onDateChange={handleDateChange} />
        </div>
      )}
    </div>
  );
};
