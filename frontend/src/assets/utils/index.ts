export const headTableParams = [{
  title: 'Номер',
  width: 98,
},
{
  title: 'Дата поставки',
  width: 126,
},
{
  title: 'Город',
  width: 162,
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

export const searchOptionDropDown = ['Номер', 'Дата поставки', 'Город', 'Количество', 'Тип поставки', 'Склад', 'Статус'];
