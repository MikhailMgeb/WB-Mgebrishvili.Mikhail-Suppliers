import { Routes, Route } from 'react-router-dom';

import { Advertising } from './page/Advertising/Advertising';
import { Analytics } from './page/Analytics/Analytics';
import { PricingAndDiscounts } from './page/PricesAndDiscounts/PricesAndDiscounts';
import { NotFoundPage } from './page/NotFoundPage/NotFoundPage';

import { Supplies } from './page/Supplies/Supplies';
import { Goods } from './page/Goods/Goods';

// import { TableView } from './components/Table/TableView';
// import { cards } from './assets/mock-data';

import { NavBar } from './components/NavBar/NavBar';
import { navItems } from './assets/mock-data';
import { cnApp } from './App.classname';

export const App = () => {
  // const handleDelete = (id: string) => {
  //   console.log(`Удалить: ${id}`);
  // };

  // const handleEdit = (id: string) => {
  //   console.log(`Изменить: ${id}`);
  // };

  // const columns = useMemo(
  //   () => getMainTableColumns(handleOpenModal),
  //   [handleOpenModal],
  // );

  return (
    <main className={cnApp()}>

      <NavBar navItems={navItems} />
      <Routes>
        <Route path="/" element={<Supplies />} />
        <Route path="/goods" element={<Goods />} />
        <Route path="/pricing-and-discounts" element={<PricingAndDiscounts />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/advertising" element={<Advertising />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* <div>
        <TableView cards={cards} onDelete={handleDelete} onEdit={handleEdit} />
      </div> */}
    </main>
  );
};
