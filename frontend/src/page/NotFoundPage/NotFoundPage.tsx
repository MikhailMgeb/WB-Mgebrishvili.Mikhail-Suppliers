import { Link } from 'react-router-dom';

import { cnMain } from '../page.classname';

export const NotFoundPage = () => {
  return (
    <section className={cnMain()}>
      <h2>404 - Страница не найдена</h2>
      <p>К сожалению, запрашиваемая вами страница не существует.</p>
      <Link to="/">Вернуться на главную страницу</Link>
    </section>
  );
};
