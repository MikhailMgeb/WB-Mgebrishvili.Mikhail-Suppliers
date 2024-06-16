import type { ChangeEvent, FC } from 'react';

import { Dropdown } from '../Dropdown/Dropdown';

import SearchIcon from '../../assets/icons/icon-search.svg';
import { searchOptionDropDown } from '../../assets/utils';

import { cnSearchInput } from './SearchInput .classname';

import './SearchInput .css';

type SearchInputProps = {
  disabled?: boolean;
  placeholder?: string;
  value?: string | number;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: FC<SearchInputProps> = ({
  disabled = false,
  placeholder = '',
  value = '',
  onChange,
}) => {
  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={cnSearchInput()}>
      <Dropdown options={searchOptionDropDown} />
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

export { SearchInput };
