import { cn } from '@bem-react/classname';

import SearchIcon from '../../assets/icons/icon-search.svg';
import { FormSelect } from '../FormSelect/FormSelect';
import { TextInput } from '../TextInput/TextInput';

import './SearchInput.css';

const cnSearchInput = cn('SearchInput');

type SearchInputProps = {
  placeholder?: string;
  value?: string | number;
  onChange?: (event: string | number) => void;
};

export const SearchInput = ({
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
      <FormSelect label="" options={['По номеру', 'По городу', 'По типу поставки', 'По типу поставки']} htmlId="Search" type="search" />
      <TextInput
        className={cnSearchInput('Input')}
        value={value}
        placeholder={placeholder}
        type="text"
        onChange={handleChangeValue}
        htmlId="dsadsa"
      />
      <span className={cnSearchInput('Icon')}><SearchIcon /></span>
    </div>
  );
};
