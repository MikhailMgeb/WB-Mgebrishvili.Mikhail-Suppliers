import type { ChangeEvent } from 'react';
import { cn } from '@bem-react/classname';

import SearchIcon from '../../assets/icons/icon-search.svg';
import { Dropdown } from '../Dropdown/Dropdown';

import './SearchInput .css';

const cnSearchInput = cn('SearchInput');

type SearchInputProps = {
  disabled?: boolean;
  placeholder?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = ({
  disabled = false,
  placeholder = 'Поиск...',
  value = '',
  onChange,
}: SearchInputProps) => {
  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={cnSearchInput()}>
      <Dropdown options={['По номеру', 'По городу', 'По типу поставки', 'По статусу']} type="search" />
      <input
        className={cnSearchInput('Input')}
        value={value}
        placeholder={placeholder}
        type="text"
        disabled={disabled}
        onChange={handleChangeValue}
      />
      <span className={cnSearchInput('Icon')}><SearchIcon /></span>
    </div>
  );
};
