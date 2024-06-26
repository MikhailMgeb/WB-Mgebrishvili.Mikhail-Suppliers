const warehouseAddresses: Record<string, string> = {
  'Белая дача': 'пр. Ленинский, д. 7, Новосибирск',
  Внуково: 'пр. Победы, д. 25, Санкт-Петербург',
  'Черная грязь': 'Адрес склада 3',
  'СЦ Абакан': 'ул. Игарская, д. 21г',
  Электросталь: 'ул. Индустриальная, д. 9/1',
  Вёшки: 'Ногинский р-н, Московская обл., г. Электросталь',
  Склад: 'Посёлок Кудьма, логистический комплекс Южный, ул. Индустриальная, 10',
};

export const getAddressForWarehouse = (warehouseName: string): string => {
  const address = warehouseAddresses[warehouseName] || 'Адрес не найден';

  return address;
};
