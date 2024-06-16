import type { FC } from 'react';

import { cnTag } from './Tag.classname';

import './Tag.css';

type TagProps = {
  supplyStatus: 'inTransit' | 'delayed';
};

const Tag: FC<TagProps> = ({ supplyStatus }) => {
  return (
    <span
      className={cnTag({ supplyStatus })}
    >
      {supplyStatus === 'inTransit' ? 'В пути' : 'Задерживается'}
    </span>
  );
};

export { Tag };
