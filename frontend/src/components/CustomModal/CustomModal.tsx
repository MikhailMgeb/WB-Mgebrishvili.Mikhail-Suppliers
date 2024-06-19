/* eslint-disable react/jsx-no-bind */
import { cn } from '@bem-react/classname';
import React, { useRef } from 'react';
import Modal from 'react-modal';

import { Button } from '../Button/Button';
// import { Input } from '../Input/Input';

import IconClose from '../../assets/icons/icon-close.svg';

import './CustomModal.css';

import { Dropdown } from '../Dropdown/Dropdown';
import { Input } from '../Input/Input';
import {
  deliveryStatuses, deliveryType, dropdownDataCity, listWarehouses,
} from '../MenuDropdown/DropData';

const cnCustomModal = cn('CustomModal');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0px 0px 26px 0px rgba(0, 0, 0, 0.19)',
    maxWidth: '80%',
    maxHeight: '80%',
    padding: '32px 48px',
    background: 'rgba(45, 44, 50, 1)',
    borderRadius: '16px',
  },
};

Modal.setAppElement('#root');

type CustomModalProps = {
  isOpen: boolean;
  type: 'edit' | 'create';
  id: string;
  onRequestClose: () => void;
};

export const CustomModal: React.FC<CustomModalProps> = ({
  isOpen, onRequestClose, type, id,
}) => {
  const subtitle = useRef<HTMLHeadingElement>(null);

  function afterOpenModal() {
    if (subtitle.current) {
      subtitle.current.style.color = '#f00';
    }
  }

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Modal"
    >
      <div className={cnCustomModal('Description')}>
        <h2 className={cnCustomModal('Title')} ref={subtitle}>{type === 'create' ? 'Редактирование' : 'Новая поставка'}</h2>
        <p className={cnCustomModal('TitleId')}>{id}</p>
      </div>
      <div className={cnCustomModal('CloseButton')}>
        <Button scheme="cloudy" onClick={onRequestClose} icon={<IconClose />} />
      </div>
      <form className={cnCustomModal('From')}>
        {type !== 'create' || (<label className={cnCustomModal('Label')}>Дата поставки</label>)}
        {type !== 'create' || <Input type="date" />}
        <label className={cnCustomModal('Label')}>Город</label>
        <Dropdown options={dropdownDataCity} />
        <label className={cnCustomModal('Label')}>Кол-во</label>
        <Input type="number" />
        <label className={cnCustomModal('Label')}>Тип поставки</label>
        <Dropdown options={deliveryType} />
        <label className={cnCustomModal('Label')}>Склад</label>
        <Dropdown options={listWarehouses} />
        <label className={cnCustomModal('Label')}>Статус</label>
        <Dropdown options={deliveryStatuses} />
        <div className={cnCustomModal('GroupButton')}>
          <Button scheme="primary" text="Создать" />
          <Button scheme="cloudy" text="Отменить" />
        </div>
      </form>
    </Modal>
  );
};
