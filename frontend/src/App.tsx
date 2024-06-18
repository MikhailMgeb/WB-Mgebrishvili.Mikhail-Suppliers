import { TableView } from './components/Table/TableView';
import { cards } from './assets/mock-data';

export const App = () => {
  // const handleDe = (id: string) => {

  // };

  // const handleEdit = () => {

  // };

  // const columns = useMemo(
  //   () => getMainTableColumns(handleOpenModal),
  //   [handleOpenModal],
  // );

  return (
    <div>
      <TableView cards={cards} />
    </div>
  );
};
