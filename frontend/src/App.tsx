import { Routes, Route } from 'react-router-dom';
import { cn } from '@bem-react/classname';

import LogoSVG from './assets/icons/wb-logo.svg';

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
import { Logo } from './components/Logo/Logo';

import './App.css';

const cnApp = cn('App');

export const App = () => {
  return (
    <main className={cnApp()}>
      <div className={cnApp('Header')}>
        <Logo logoComponent={<LogoSVG />} linkTo="/" />
      </div>
      <section className={cnApp('Content')}>
        <NavBar navItems={navItems} />
        <Routes>
          <Route path="/" element={<Supplies />} />
          <Route path="/goods" element={<Goods />} />
          <Route path="/pricing-and-discounts" element={<PricingAndDiscounts />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/advertising" element={<Advertising />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </section>
    </main>
  );
};
