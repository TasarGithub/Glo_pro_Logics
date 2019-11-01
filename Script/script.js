'use strict';
// logics191030
// Для каждого элемента X данного массива подсчитайте, сколько элементов справа от X
// меньше, чем X.
// Последнее значение всегда равно нулю, поскольку справа от последнего элемента нет
// элементов.


let funcDegree = function (h,m){
  const degreeInHour = 360/12,
        degreeInMin = 360/60,
        //коррекция на прохождение часовой стрелки, от точного значения в течении часа.
        correctionHour = (5 * (m / 60 )),
   //console.log('correctionHour: ', correctionHour.toFixed(1));
        degM = m*degreeInMin ,
        degH = h*degreeInHour + correctionHour.toFixed(1)*degreeInMin;
    console.log('degM: ', degM);
    console.log('degH: ', degH);
    let result;
  // мин впереди часовой
  if  (degM >= degH) {
    return degM - degH;
  // часовая впереди мин
  } else if (degM < degH){
    return degH + degM; 
  } 
}

console.log('funcDegree(10,45);: ', funcDegree(10,45));

console.log('funcDegree(11, 05);: ', funcDegree(11, 5));

console.log('funcDegree(3,50);: ', funcDegree(3,50));

console.log('funcDegree(6,10);: ', funcDegree(6,10));

console.log('funcDegree(7,17);: ', funcDegree(7,17));