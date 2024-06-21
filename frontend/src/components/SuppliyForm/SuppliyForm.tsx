/* eslint-disable no-use-before-define */
/* eslint-disable react/jsx-props-no-spreading */
//* eslint-disable @typescript-eslint/no-explicit-any */
import { cn } from '@bem-react/classname';
import { useForm, Controller } from 'react-hook-form';

import { CustomModal } from '../CustomModal/CustomModal';
import { Button } from '../Button/Button';
import { FormTextInput } from '../FormTextInput/FormTextInput';
import { FormSelect } from '../FormSelect/FormSelect';
import { FieldCalendar } from '../FieldCalendar/FieldCalendar';
import { getAddressForWarehouse } from '../../assets/utils';
import { SupplyData } from '../../models/models';
import { useAddSupplyMutation, useUpdateSupplyMutation } from '../../store/supplies/supplies.api';

import {
  deliveryStatusesOption,
  deliveryTypeOption,
  dropdownDataCityOption,
  listWarehousesOption,
} from '../MenuDropdown/DropData';

import './SupplyForm.css';

type SupplyFormProps = {
  isModalOpen: boolean;
  onCloseModal: () => void;
  supplyData?: SupplyData;
};

const cnSupplyForm = cn('SupplyForm');

export const SupplyForm = ({
  onCloseModal,
  isModalOpen,
  supplyData,
}: SupplyFormProps) => {
  const isEditableModal = supplyData !== undefined;

  const [addSupply] = useAddSupplyMutation();
  const [updateSupply] = useUpdateSupplyMutation();

  const {
    handleSubmit, control,
  } = useForm<SupplyData>({
    values: supplyData,
  });

  const onSubmit = async (formData: SupplyData) => {
    const warehouseAddress = getAddressForWarehouse(formData.warehouseName);

    try {
      const request = isEditableModal ? updateSupply : addSupply;
      await request({ ...formData, warehouseAddress });
    } catch (error) {
      console.error(error);
    }
    onCloseModal();
  };

  return (
    <CustomModal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      title={isEditableModal ? 'Редактировать поставку' : 'Добавить поставку'}
    >
      <form className={cnSupplyForm()} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="date"
          control={control}
          render={({ field: { value, onChange } }) => (
            <FieldCalendar
              label="Дата поставки"
              value={value}
              onChange={onChange}
              htmlId="calendar"
            />
          )}
        />

        <Controller
          name="city"
          control={control}
          render={({ field: { value, onChange } }) => {
            return (
              <FormSelect
                label="city"
                options={dropdownDataCityOption}
                value={value}
                onChange={onChange}
                htmlId="city"
                type="text"
              />
            );
          }}
        />
        <Controller
          name="quantity"
          control={control}
          render={({ field: { value, onChange } }) => (
            <FormTextInput
              label="Кол-во"
              value={value}
              onChange={onChange}
              htmlId="quantity"
              type="number"
            />
          )}
        />
        <Controller
          name="supplyType"
          control={control}
          render={({ field: { value, onChange } }) => (
            <FormSelect
              label="Тип поставки"
              options={deliveryTypeOption}
              value={value}
              onChange={onChange}
              htmlId="deliveryType"
              type="text"
            />
          )}
        />
        <Controller
          name="warehouseName"
          control={control}
          render={({ field: { value, onChange } }) => (
            <FormSelect
              label="Склад"
              options={listWarehousesOption}
              value={value}
              onChange={onChange}
              htmlId="warehouse"
              type="text"
            />
          )}
        />
        <Controller
          name="status"
          control={control}
          render={({ field: { value, onChange } }) => (
            <FormSelect
              label="Статус"
              options={deliveryStatusesOption}
              value={value}
              onChange={onChange}
              htmlId="status"
              type="text"
            />
          )}
        />
        <div className={cnSupplyForm('GroupButton')}>
          <Button
            scheme="primary"
            text={isEditableModal ? 'Сохранить' : 'Создать'}
          />
          <Button
            scheme="cloudy"
            text="Отменить"
            onClick={onCloseModal}
          />
        </div>
      </form>
    </CustomModal>
  );
};
