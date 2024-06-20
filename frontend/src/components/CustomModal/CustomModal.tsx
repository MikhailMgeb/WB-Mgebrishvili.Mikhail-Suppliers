/* eslint-disable max-len */
/* eslint-disable react/jsx-no-bind */
import { cn } from '@bem-react/classname';
import React, { useRef, useState, useEffect } from 'react';
import Modal from 'react-modal';

import IconClose from '../../assets/icons/icon-close.svg';
import { Button } from '../Button/Button';
import { FormTextInput } from '../FormTextInput/FormTextInput';
import { FormSelect } from '../FormSelect/FormSelect';
import {
  deliveryStatusesOption, deliveryTypeOption, dropdownDataCityOption,
  listWarehousesOption,
} from '../MenuDropdown/DropData';
import { getAddressForWarehouse } from '../../assets/utils';
import { SupplyData } from '../../models/models';

import './CustomModal.css';

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
  supplyData?: SupplyData | null;
  onRequestClose: () => void;
};

export const CustomModal: React.FC<CustomModalProps> = ({
  isOpen, onRequestClose, type, supplyData,
}) => {
  const [deliveryDate, setDeliveryDate] = useState<string>('');
  const [city, setCity] = useState('');
  const [quantity, setQuantity] = useState<number>();
  const [deliveryType, setDeliveryType] = useState('');
  const [warehouse, setWarehouse] = useState('');
  const [status, setStatus] = useState('');
  const subtitle = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (supplyData) {
      setDeliveryDate(supplyData.date);
      setCity(supplyData.city);
      setQuantity(supplyData.quantity);
      setDeliveryType(supplyData.supplyType);
      setWarehouse(supplyData.warehouseName);
      setStatus(supplyData.status);
    }
  }, [supplyData]);

  function afterOpenModal() {
    if (subtitle.current) {
      subtitle.current.style.color = 'rgba(0, 0, 0, 0.7)';
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const warehouseAddress = getAddressForWarehouse(warehouse);

    const formData = {
      id: supplyData?.id || '',
      date: deliveryDate,
      city,
      quantity,
      supplyType: deliveryType,
      warehouseName: warehouse,
      warehouseAddress,
      status,
      key: supplyData?.key || '',
    };
    console.log('Form Data:', formData);
  };

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Modal"
    >
      <div className={cnCustomModal('Description')}>
        <h2 className={cnCustomModal('Title')} ref={subtitle}>{type === 'create' ? 'Новая поставка' : 'Редактирование'}</h2>
        {supplyData && <p className={cnCustomModal('TitleId')}>{supplyData.id}</p>}
      </div>
      <div className={cnCustomModal('CloseButton')}>
        <Button scheme="cloudy" onClick={onRequestClose} icon={<IconClose />} />
      </div>
      <form className={cnCustomModal('Form')} onSubmit={handleSubmit}>
        {type === 'create' && (
          <FormTextInput
            label="Дата поставки"
            type="date"
            value={deliveryDate}
            onChange={(value) => setDeliveryDate(value as string)}
            htmlId=""
          />
        )}

        <FormSelect
          label="Город"
          value={city}
          onChange={(value) => setCity(value as string)}
          options={dropdownDataCityOption}
          htmlId="city"
        />

        <FormTextInput
          label="Кол-во"
          type="number"
          value={quantity}
          onChange={(value) => setQuantity(value as number)}
          htmlId="quantity"
        />

        <FormSelect
          label="Тип поставки"
          value={deliveryType}
          onChange={(value) => setDeliveryType(value as string)}
          options={deliveryTypeOption}
          htmlId=""
        />

        <FormSelect
          label="Склад"
          value={warehouse}
          onChange={(value) => setWarehouse(value as string)}
          options={listWarehousesOption}
          htmlId=""
        />

        <FormSelect
          label="Статус"
          value={status}
          onChange={(value) => setStatus(value as string)}
          options={deliveryStatusesOption}
          htmlId=""
        />

        <div className={cnCustomModal('GroupButton')}>
          <Button scheme="primary" text={type === 'create' ? 'Создать' : 'Сохранить'} />
          <Button scheme="cloudy" text="Отменить" onClick={onRequestClose} />
        </div>
      </form>
    </Modal>
  );
};
