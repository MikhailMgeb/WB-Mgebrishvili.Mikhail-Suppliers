export const headTableParams = [{
  title: 'Номер',
  width: 100,
},
{
  title: 'Дата поставки',
  width: 128,
},
{
  title: 'Город',
  width: 164,
},
{
  title: 'Количество',
  width: 144,
},
{
  title: 'Тип поставки',
  width: 142,
},
{
  title: 'Склад',
  width: 374,
},
{
  title: 'Статус',
  width: 116,
}];

export function getWidth(index: number) {
  return headTableParams[index].width;
}

export const searchOptionDropDown = ['Номер', 'Дата', 'Город', 'Количество', 'Тип', 'Склад', 'Статус'];
