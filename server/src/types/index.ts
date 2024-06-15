type RussianCity = 'Москва' | 'Псков' | 'Тверь' | 'абакан' | 'Нижний Новгород' | 'Кострома' | 'Ярославль';
type SupplyType = 'Короб' | 'Монопаллета';
type Status = 'В пути' | 'Задерживается';
type Warehouse = 'Склад' | 'СЦ Абакан' | 'Черная грязь' | 'Внуково' | 'Белая дача' | 'Электросталь' | 'Вёшки';
type WarehouseAddress =
  'ул. Ленина, д. 10, Москва' |
  'пр. Победы, д. 25, Санкт-Петербург' |
  'ул. Гагарина, д. 5, Екатеринбург' |
  'пр. Ленинский, д. 7, Новосибирск' |
  'ул. Пушкина, д. 15, Казань'
  ;

export type Supply = {
  id: string;
  date: string;
  city: RussianCity;
  quantity: number;
  supplyType: SupplyType;
  warehouseName: Warehouse;
  warehouseAddress: WarehouseAddress;
  status: Status;
};

export type Supplies = Supply[];
