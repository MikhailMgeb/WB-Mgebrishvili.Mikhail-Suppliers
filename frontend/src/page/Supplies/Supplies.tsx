import { useState } from 'react';
import { cn } from '@bem-react/classname';

import { Button } from '../../components/Button/Button';

import { useGetSuppliesQuery } from '../../store/supplies/supplies.api';
import AddIcon from '../../assets/icons/icon-plus.svg';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { TableView } from '../../components/Table/TableView';
import { mockData } from '../../assets/mock-data';
import { CustomModal } from '../../components/CustomModal/CustomModal';

import './Supplies.css';

const cnSupplies = cn('Supplies');

export const Supplies = () => {
  const { isLoading, isError, data } = useGetSuppliesQuery();
  const [usedId, setUsedId] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleDelete = (id: string) => {
    console.log(`Удалить: ${id}`);
  };

  const handleEdit = (id: string) => {
    console.log(`Изменить: ${id}`);
    setModalIsOpen(true);
    setUsedId(id);
  };

  const handleClick = () => {
    console.log('Добавить товар');
  };
  // const columns = useMemo(
  //   () => getMainTableColumns(handleOpenModal),
  //   [handleOpenModal],
  // );

  const suppliesData = isError || !data ? mockData : data;

  const closeModal = () => {
    setModalIsOpen(false);
  };

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
      <section className={cnSupplies('Content')}>
        {isLoading ? <p className={cnSupplies('ContentLoading')}>Загрузка данных...</p> : null}
        {!isError ? <p className={cnSupplies('ContentError')}>Произошла ошибка при загрузке данных.</p> : null}
        {suppliesData && suppliesData.length === 0 && <p className={cnSupplies('ContentInfo')}>Нет доступных поставок.</p>}
        {suppliesData && suppliesData.length > 0 && (
          <TableView
            cards={suppliesData}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        )}
      </section>
      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        type="edit"
        id={usedId}
      />
    </main>
  );
};
