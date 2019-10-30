'use strict';
// logics191030
function functionTrain(speedTrain1, speedTrain2, distance){
  
  let timeNum = distance / (speedTrain1+speedTrain2),
       timeHour = Math.trunc(timeNum),
       timeMin = Math.trunc((timeNum - timeHour) * 60),
       timeSec = Math.floor(((timeNum - timeHour) * 60 - timeMin)* 60);
  return timeHour + 'hh ' + timeMin + 'mm ' + timeSec + 'ss';

}
console.log ('Время до встречи двух поездов: ' + functionTrain(60, 80, 804));


  //sdsdsd