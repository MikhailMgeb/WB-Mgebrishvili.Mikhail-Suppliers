import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  return (
    <div>
      <h2>404 - Страница не найдена</h2>
      <p>К сожалению, запрашиваемая вами страница не существует.</p>
      <Link to="/">Вернуться на главную страницу</Link>
    </div>
  );
};
