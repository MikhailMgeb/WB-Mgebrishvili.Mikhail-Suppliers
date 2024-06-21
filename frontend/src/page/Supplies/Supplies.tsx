import { useMemo, useState } from 'react';
import { cn } from '@bem-react/classname';

import { Button } from '../../components/Button/Button';
import AddIcon from '../../assets/icons/icon-plus.svg';
import { TableView } from '../../components/Table/TableView';
import { mockData } from '../../assets/mock-data';
import { CustomModal } from '../../components/CustomModal/CustomModal';
import { SupplyData } from '../../models/models';
import { useDeleteSupplyMutation, useGetSuppliesQuery } from '../../store/supplies/supplies.api';
import { SearchInput } from '../../components/SearchInput/SearchInput';

import './Supplies.css';

const cnSupplies = cn('Supplies');

export const Supplies = () => {
  const { isLoading, isError, data } = useGetSuppliesQuery();
  const [deleteSupply] = useDeleteSupplyMutation();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentSupply, setCurrentSupply] = useState<SupplyData | null>(null);

  const handleDelete = async (id: string) => {
    try {
      await deleteSupply(id).unwrap();
      console.log(`Удалить: ${id}`);
    } catch (error) {
      console.error('Ошибка', error);
    }
  };

  const handleEdit = (id: string) => {
    const supply = suppliesData.find((item) => item.id === id);
    if (supply) {
      setCurrentSupply(supply);
      setModalIsOpen(true);
    }
  };

  const handleClick = () => {
    setCurrentSupply(null);
    setModalIsOpen(true);
  };

  const suppliesData: SupplyData[] = useMemo(() => {
    if (isError || !data) {
      return mockData;
    }
    return data;
  }, [data, isError]);

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentSupply(null);
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
        {isError ? <p className={cnSupplies('ContentError')}>Произошла ошибка при загрузке данных.</p> : null}
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
        type={currentSupply ? 'edit' : 'create'}
        supplyData={currentSupply}
      />
    </main>
  );
};
