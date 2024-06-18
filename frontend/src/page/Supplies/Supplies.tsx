import { cn } from '@bem-react/classname';

import { Button } from '../../components/Button/Button';

import AddIcon from '../../assets/icons/icon-plus.svg';
import { SearchInput } from '../../components/SearchInput/SearchInput ';
import { TableView } from '../../components/Table/TableView';
import { cards } from '../../assets/mock-data';

import './Supplies.css';

const cnSupplies = cn('Supplies');

export const Supplies = () => {
  const handleDelete = (id: string) => {
    console.log(`Удалить: ${id}`);
  };

  const handleEdit = (id: string) => {
    console.log(`Изменить: ${id}`);
  };

  const handleClick = () => {
    console.log('Добавить товар');
  };
  // const columns = useMemo(
  //   () => getMainTableColumns(handleOpenModal),
  //   [handleOpenModal],
  // );

  return (
    <main className={cnSupplies()}>
      <header className={cnSupplies('Header')}>
        <div className={cnSupplies('Title')}>
          <p className={cnSupplies('TitleText')}>
            Поставки
          </p>
        </div>
        <div className={cnSupplies('ActionMenu')}>
          <div className={cnSupplies('AddSupply')}>
            <Button text="Добавить поставку" icon={<AddIcon />} size="large" scheme="cloudy" onClick={handleClick} />
          </div>
          <div className={cnSupplies('Search')}>
            <SearchInput />
          </div>
        </div>
      </header>
      <TableView
        cards={cards}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </main>
  );
};
