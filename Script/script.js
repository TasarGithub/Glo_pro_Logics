'use strict';
// logics191030
// Для каждого элемента X данного массива подсчитайте, сколько элементов справа от X
// меньше, чем X.
// Последнее значение всегда равно нулю, поскольку справа от последнего элемента нет
// элементов.

function amountSmaller(arr) {
  let arrSmaller = arr.filter(function(v,i,ar){
    return ar[0]>v;
  });
  return arrSmaller.length;
} 

function funcNum(arrNum){
  //let arrNum = [5,4,4,6,1],

  for (let i = 0; i < arrNum.length; i++ ){
    arrNum[i] = amountSmaller (arrNum.slice(i));
  }
  console.log('arrResult: ', arrNum);
}

funcNum([5,4,3,2,1]);