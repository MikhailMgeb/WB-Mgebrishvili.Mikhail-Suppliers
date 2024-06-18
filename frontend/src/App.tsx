import { useState } from 'react';

import { TableView } from './components/Table/TableView';
import { cards } from './assets/mock-data';
import { ModalWindow } from './components/ModalWindow/ModalDialog';

export const App = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedId, setSelectedId] = useState<string>('');

  const handleDelete = (id: string) => {
    console.log(`Удалить: ${id}`);
  };

  const handleEdit = (id: string) => {
    console.log(`Изменить: ${id}`);
    setIsOpenModal((pre) => !pre);
    setSelectedId(id);
  };

  // const columns = useMemo(
  //   () => getMainTableColumns(handleOpenModal),
  //   [handleOpenModal],
  // );

  return (
    <div>
      <TableView cards={cards} onDelete={handleDelete} onEdit={handleEdit} />
      {isOpenModal ? <ModalWindow title="123" id={selectedId} /> : null}
    </div>
  );
};
