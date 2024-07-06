import { useState } from 'react';
import { cn } from '@bem-react/classname';
import { ru } from 'date-fns/locale';

import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from 'date-fns';

import IconChevronLeft from '../../assets/icons/arrow-left.svg';
import IconChevronRight from '../../assets/icons/arrow-right.svg';

import './Calendar.css';

type CalendarProps = {
  selectedDate: Date | string;
  onDateChange: (date: Date | string) => void;
};

const cnCalendar = cn('Calendar');

export const Calendar = ({ selectedDate, onDateChange }: CalendarProps) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const renderHeader = () => (
    <div className={cnCalendar('Header', { row: true })}>
      <div className={cnCalendar('Header', { col: true, start: true })}>
        <div className={cnCalendar('Icon', { clickable: true })} onClick={prevMonth}>
          <IconChevronLeft />
        </div>
      </div>
      <div className={cnCalendar('Header', { col: true, center: true })}>
        <span>{format(currentMonth, 'LLLL yyyy', { locale: ru })}</span>
      </div>
      <div className={cnCalendar('Header', { col: true, end: true })} onClick={nextMonth}>
        <div className={cnCalendar('Icon', { clickable: true })}>
          <IconChevronRight />
        </div>
      </div>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(currentMonth, { locale: ru });

    for (let i = 0; i < 7; i += 1) {
      const currentDate = addDays(startDate, i);
      const dayClass = cnCalendar('Day', { col: true, center: true });
      const isWeekend = i === 5 || i === 6;

      days.push(
        <div className={`${dayClass} ${isWeekend ? cnCalendar('Day', { weekend: true }) : ''}`} key={i}>
          {format(currentDate, 'EEEEEE', { locale: ru })}
        </div>,
      );
    }

    return <div className={cnCalendar('Days', { row: true })}>{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { locale: ru });
    const endDate = endOfWeek(monthEnd, { locale: ru });

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i += 1) {
        formattedDate = format(day, 'd');
        const cloneDay = day;

        days.push(
          <div
            className={cnCalendar('Cell', {
              col: true,
              disabled: !isSameMonth(day, monthStart),
              selected: isSameDay(day, selectedDate),
            })}
            key={day.toISOString()}
            onClick={() => onDateChange(format(new Date(cloneDay), 'yyyy-MM-dd'))}
          >
            <span className={cnCalendar('Number')}>{formattedDate}</span>
          </div>,
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className={cnCalendar('Row')} key={day.toISOString()}>
          {days}
        </div>,
      );
      days = [];
    }
    return <div className={cnCalendar('Body')}>{rows}</div>;
  };

  return (
    <div className={cnCalendar()}>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
};
