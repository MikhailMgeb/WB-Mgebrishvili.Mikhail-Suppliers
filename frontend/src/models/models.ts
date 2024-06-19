export type RussianCity = 'Москва' | 'Псков' | 'Тверь' | 'абакан' | 'Нижний Новгород' | 'Кострома' | 'Ярославль';
export type SupplyType = 'Короб' | 'Монопаллета';
export type Status = 'В пути' | 'Задерживается';
export type Warehouse = 'СЦ Абакан' | 'Черная грязь' | 'Внуково' | 'Белая дача' | 'Электросталь' | 'Вёшки';
export type WarehouseAddress =
    'ул. Ленина, д. 10, Москва' |
    'пр. Победы, д. 25, Санкт-Петербург' |
    'ул. Гагарина, д. 5, Екатеринбург' |
    'пр. Ленинский, д. 7, Новосибирск' |
    'ул. Пушкина, д. 15, Казань';

export type SupplyData = {
  id: string;
  date: string;
  city: RussianCity;
  quantity: number;
  supplyType: SupplyType;
  warehouseName: Warehouse;
  warehouseAddress: WarehouseAddress;
  status: Status;
  key: string,
};
