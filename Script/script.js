'use strict';
// logics191101
// Написать функцию, которая рассчитает угол между часовой и минутной стрелками
// часов!
// Функция принимает два аргумента (часы, минуты)

// например
// func(6, 0) =>>> 180
// func(3, 0) =>>> 90
// func(3, 30) =>>> 75

let funcDegree = function (h,m){
  //коррекция на прохождение часовой стрелки, от точного значения в течении часа.
  const correctionHour = 5 * (m / 60 ),
  //градусы минутной стрелки
        degM = m * 360 / 60 ,
  //градусы часовой стрелки
        degH = h * 360 / 12 + correctionHour.toFixed(1)* 360 / 60;
  
  // Cчитаем угол от часовой стрелки к минутной в направлению по часовой.
  // мин впереди часовой
  if  (degM >= degH) {
    return (degM - degH).toFixed(1);
  // часовая впереди мин
  } else if (degM < degH){
    return (360 - (degH - degM)).toFixed(1); 
  } 
}


console.log('время: 01:06: ', funcDegree(1,6));
console.log('время: 06:48: ', funcDegree(6,48));
console.log('время: 11:05: ', funcDegree(11,5));
console.log('время: 5:35: ', funcDegree(5,35));

console.log('время: 3:50: ', funcDegree(3,50));
console.log('время: 6:10: ', funcDegree(6,25));
console.log('время: 7:1: ', funcDegree(7, 1));
console.log('время: 10:05: ', funcDegree(10,5));