import { cnTag } from './Tag.classname';

import './Tag.css';

type TagProps = {
  supplyStatus: 'inTransit' | 'delayed';
};

export const Tag = ({ supplyStatus }: TagProps) => {
  return (
    <span
      className={cnTag({ supplyStatus })}
    >
      {supplyStatus === 'inTransit' ? 'В пути' : 'Задерживается'}
    </span>
  );
};
