import { TableView } from './components/Table/TableView';
import { cards } from './assets/mock-data';

export const App = () => {
  const handleDelete = (id: string) => {
    console.log(`Удалить: ${id}`);
  };

  const handleEdit = (id: string) => {
    console.log(`Изменить: ${id}`);
  };

  // const columns = useMemo(
  //   () => getMainTableColumns(handleOpenModal),
  //   [handleOpenModal],
  // );

  return (
    <div>
      <TableView cards={cards} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};
