import type { FC } from 'react';

import { cnTag } from './Tag.classname';

import './Tag.css';

type TagProps = {
  supplyStatus: 'InTransit' | 'delayed';
};

const Tag: FC<TagProps> = ({ supplyStatus }) => {
  return (
    <span
      className={cnTag({ supplyStatus })}
    >
      {supplyStatus === 'InTransit' ? 'В пути' : 'Задерживается'}
    </span>
  );
};

export { Tag };
