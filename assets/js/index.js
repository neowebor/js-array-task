/* 
Створити масив [ 1, 2, 3 ]. Додати до нього в кінець наступні значення : 6, 5 , 4. Після цього до нього же додати у початок значення: -3, -2, -1
*/
const arr = [1, 2, 3];
arr.push(6, 5, 4);
arr.unshift(-3, -2, 1);
console.log(arr);

/* 
Створити масив [ 100, -273.15, 0,1, 2, 3, 4, 5, 6, 9, 10 ]. Видалити перші два та остані три елементи цього масиву.
*/
const arr2 = [100, -273.15, 0, 1, 2, 3, 4, 5, 6, 9, 10];

arr2.shift();
arr2.shift();

arr2.pop();
arr2.pop();
arr2.pop();

console.log(arr2);

/*
Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворити його на [1, 4, 5].
*/

const arr3 = [1, 2, 3, 4, 5];
arr3.splice(1, 2);
console.log(arr3);

/*
Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice записати у новий масив елементи [2, 3, 4].
*/

const arr4 = [1, 2, 3, 4, 5];
const changedArr = arr4.splice(1, 3);
console.log(changedArr);

/* 
Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворити його на масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
*/

const arr5 = [1, 2, 3, 4, 5];
arr5.splice(3, 0, 'a', 'b', 'c')
console.log(arr5);

/* 
Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворити його на масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
*/

const arr6 = [1, 2, 3, 4, 5];
arr6.splice(1, 0, 'a', 'b');
arr6.splice(-1, 0, 'c');
arr6.splice(arr6.length, 0, 'e')
console.log(arr6);

/* 
Створити масив [1, 2, 3, 4, 5]. За допомогою методу slice зробити копію масива зі значеннями [4, 5]
*/

const arr7 = [1, 2, 3, 4, 5];
const copyArr7 = arr7.slice(3, arr7.length);
console.log('test');
console.log(copyArr7);

/* 
Створити масив ['first', 'second', 'third', 'fourth', 'last']. Зробити копію зі значеннями  ['second', 'third'].
*/

const arr8 = ['first', 'second', 'third', 'fourth', 'last'];
const copyArr8 = arr8.splice(1, 2);
console.log(copyArr8);


/*
Створити масив ['first', 'second', 'third', 'fourth', 'last']. Перетворити його на масив ['last', 'fourth', 'third', 'second', 'first']
*/

const arr9 = ['first', 'second', 'third', 'fourth', 'last'];
arr9.reverse();
console.log(arr9);

/* 
Створити масив [1, 2, [3, 4, [5]], 6, 7]. Створити на його основі масив [1, 2, 3, 4, 5, 6, 7]
*/

const arr10 = [1, 2, [3, 4, [5]], 6, 7];
const changedArr10 = arr10.flat(Infinity);
console.log(changedArr10);

/* 
Створити масив з довільними значенням та перевірити, чи є у ньому елемент, який є рядком 'secret string'.
*/

const arr11 = [1, 2, 3, 4, 5, 'secret string'];
console.log(arr11.includes('secret string'));

/* 
Створити масив ['first', 'second', 'third', 'fourth', 'last']. Створити новий масив методом concat якому передати наступні параметри: 
1000, 2000, [true, false];
*/

const arr12 = ['first', 'second', 'third', 'fourth', 'last'];
const newArr12 = arr12.concat(1000, 2000, [true, false]);
console.log(newArr12);

/* 
Створити масив з довільними елементами. За допомогою циклу вивести всі елементи масиву послідовно в консоль
*/

function getEachArrElem(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
getEachArrElem([1, 2, 3]);

/* 
Створити масив з довільними елементами. За допомогою циклу вивести всі елементи масиву з парними індексами послідовно в консоль
*/

function getEvenArrElem(arr) {
  for(let i = 0; i < arr.length; i += 2) {
    console.log(arr[i])
  }
}

getEvenArrElem([1, 2, 3, 4, 5, 6])






