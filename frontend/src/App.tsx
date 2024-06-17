import Table from 'rc-table';

import { cards } from './assets/mock-data';
import { columns } from './components/Table/TableData';

export const App = () => {
  // const handleDe = (id: string) => {

  // }

  // const handleEdit = () => {

  // }

  // const columns = useMemo(
  //   () => getMainTableColumns(handleOpenModal),
  //   [handleOpenModal],
  // );

  return (
    <div>
      <Table columns={columns} data={cards} />
    </div>
  );
};
