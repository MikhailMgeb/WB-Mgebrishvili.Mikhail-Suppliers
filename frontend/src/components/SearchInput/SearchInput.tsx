import { cn } from '@bem-react/classname';

import { Select } from '../Select/Select';
import SearchIcon from '../../assets/icons/icon-search.svg';
import { TextInput } from '../TextInput/TextInput';
import { searchSelectItems } from '../../assets/mock-data';

import './SearchInput.css';

const cnSearchInput = cn('SearchInput');

type SearchInputProps = {
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (event: string | number) => void;
};

export const SearchInput = ({
  disabled = false,
  placeholder = 'Поиск...',
  value = '',
  onChange,

}: SearchInputProps) => {
  const handleChangeValue = (event: string | number) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={cnSearchInput()}>
      <Select options={searchSelectItems} onChange={handleChangeValue} htmlId="Search" value={value} type="search" />
      <TextInput
        className="Search-style"
        value={value}
        placeholder={placeholder}
        type="text"
        disabled={disabled}
        onChange={handleChangeValue}
        htmlId="search"
      />
      <span className={cnSearchInput('Icon')}><SearchIcon /></span>
    </div>
  );
};
