'use strict'

function functionTrain(speedTrain1, speedTrain2, distance){
  
  let timeNum = distance / (speedTrain1+speedTrain2),
       timeHour = Math.trunc(timeNum),
       timeMin = Math.trunc((timeNum - timeHour) * 60),
       timeSec = Math.floor(((timeNum - timeHour) * 60 - timeMin)* 60);
  return timeHour + ' h ' + timeMin + ' min  ' + ' sec ';

}
consol.log (functionTrain(60, 80, 140));

  