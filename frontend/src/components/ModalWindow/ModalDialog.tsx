// import type { ReactNode } from 'react';

import { Button } from '../Button/Button';
import { Dropdown } from '../Dropdown/Dropdown';
import { Input } from '../Input/Input';

import { cnModalWindow } from './ModalDialog.classname';

import './ModalDialog.css';

type ModalWindowProps = {
  title: string;
  id: string;
  // children?: ReactNode;

};

const ModalWindow = ({
  title, id,
}: ModalWindowProps) => {
  return (
    <div className={cnModalWindow()}>
      <div className={cnModalWindow('Window')}>
        <form className={cnModalWindow('Form')}>
          <div className={cnModalWindow('Title')}>
            <p className={cnModalWindow('SubTitle')}>{title}</p>
            <span className={cnModalWindow('Id')}>{id}</span>
          </div>
          <label className={cnModalWindow('Label')}>Option 1</label>
          <Dropdown options={[]} />
          <label className={cnModalWindow('Label')}>Option 2</label>
          <Dropdown options={[]} />
          <label className={cnModalWindow('Label')}>Option 3</label>
          <Dropdown options={[]} />
          <label className={cnModalWindow('Label')}>Input Field</label>
          <Input />
          <label className={cnModalWindow('Label')}>Option 4</label>
          <Dropdown options={[]} />
          <label className={cnModalWindow('Label')}>Option 5</label>
          <Dropdown options={[]} />
          <div>
            <Button scheme="cloudy" />
            <Button scheme="cloudy" />
          </div>
        </form>
      </div>
    </div>
  );
};

export { ModalWindow };
