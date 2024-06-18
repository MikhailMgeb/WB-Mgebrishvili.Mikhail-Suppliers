import type { ChangeEvent } from 'react';

// import { Dropdown } from '../Dropdown/Dropdown';

import SearchIcon from '../../assets/icons/icon-search.svg';
// import { searchOptionDropDown } from '../../assets/utils';

import { Dropdown } from '../Dropdown/Dropdown';

import { cnSearchInput } from './SearchInput .classname';

import './SearchInput .css';

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
      <Dropdown options={['По дате', 'Статусу', 'По номеру', 'По городу']} type="search" />
      <input
        className={cnSearchInput('Input')}
        value={value}
        placeholder={placeholder}
        type="text"
        disabled={disabled}
        onChange={handleChangeValue}
      />
      <span><SearchIcon /></span>
    </div>
  );
};
