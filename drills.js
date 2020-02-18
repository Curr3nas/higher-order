/* eslint-disable no-console */
'use strict';
// drill 1 Functions as arguments(1)
function repeat(fn, n) {
  for (let i = 1; i <= n; i++) {
    fn();
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye() {
  console.log('Goodbye world');
}


repeat(hello, 5);

repeat(goodbye, 5);

// drill 2 Functions as arguments(2)
function filter(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
  // TASK: Define your function here
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filteredNames); // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES

// Bonus
const filteredNamesAlt = filter(myNames, (name) => name[0] === 'R');
console.log(filteredNamesAlt);

// drill 3 Functions as return values

function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;
  return function (location) {
    warningCounter++;
    if (warningCounter === 1) {
      console.log(`"DANGER! There is a ${typeOfWarning} hazard at ${location}!"`);
      console.log(`"The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!"`);
    } else if (warningCounter === 0 || warningCounter >= 2) {
      console.log(`"DANGER! There is a ${typeOfWarning} hazard at ${location}!"`);
      console.log(`"The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!"`);
    }
  };
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const debrisWarning = hazardWarningCreator('Debris on the Freeway');
const powerlineWarning = hazardWarningCreator('Powerline on the Road');

rocksWarning('Main St and Pacific Ave');
rocksWarning('Sugardale and Sugar Grove');
debrisWarning('Main St and Pacific Ave');
debrisWarning('Sugardale and Sugar Grove');
powerlineWarning('Main St and Pacific Ave');
powerlineWarning('Sugardale and Sugar Grove');

// drill 4 forEach, filter and map

const movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function findPositive(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++)
    if (array[i][1] >= 0 && array[i][2] >=0 ) {
      newArray.push(array[i]);
    }
  return newArray;
}


console.log(movements.filter(findPositive));