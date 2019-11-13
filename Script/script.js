'use strict';
// logics191112
// При помощи цикла for..in перебрать объект-справочник с датами рождения и смерти людей и вернуть справочник с продолжительностью их жизни. Например:
// const persons = {
//     'Уитни Хьюстон': { born: 1963, died: 2012 },
//     'Оскар Уайльд': { born: 1854, died: 1900 },
//     'Коко Шанель': { born: 1869, died: 1971 },
//     'Джими Хендрикс': { born: 1942, died: 1970 },
// };
// console.log(ages(persons));
//  {
//    'Уитни Хьюстон': 56,
//    'Оскар Уайльд': 46,
//    'Коко Шанель': 87,
//    'Джими Хендрикс': 27,
//  }
const persons = {
  'Уитни Хьюстон': { born: 1963, died: 2012 },
  'Оскар Уайльд': { born: 1854, died: 1900 },
  'Коко Шанель': { born: 1869, died: 1971 },
  'Джими Хендрикс': { born: 1942, died: 1970 },
};

function  ages(persons) {
let persons_ages = {};
  for (let key in persons){
    persons_ages[key]=parseInt(persons[key].died)-parseInt(persons[key].born);
  }
  return persons_ages;
}


console.log(ages(persons));

