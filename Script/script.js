'use strict';
// logics191108
// Есть цепочка ДНК, верните ее комплемент РНК. Обе цепи ДНК и РНК представляют
// собой последовательность нуклеотидов.
// Нуклеотидами ДНК являются аденин (А), цитозин (С), гуанин (G) и тимидин (Т).
// Нуклеотидами РНК являются аденин (A), цитозин (C), гуанин (G) и урацил (U).
// Транскрибируемая цепь РНК цепи ДНК образуется путем замены каждого нуклеотида
// его комплементом: G -> C, C -> G, T -> A, A -> U.
// написать функцию которая будет принимать ДНК и выдавать РНК

// например
// func("ACGTGGTCTTAA");
// результат =>>> "UGCACCAGAAUU" 


let funcDnkToRnk = function (dnk){
  let rnk = '';
  for (let chr of dnk){
    chr = chr.toUpperCase();
    switch (chr) {
      case 'G':
        rnk +='C';
        break;
      case 'C':
        rnk +='G';
        break;
      case 'T':
        rnk +='A';
        break;
      case 'A':
        rnk +='U';
        break;        
      default:
        console.log('Недопустимый символ ' + chr);
        //alert ('Недопустимый символ' + chr);
        break;
    }
  }
  return rnk;
};


console.log(funcDnkToRnk('ACHGTGGTCTTAA'));

