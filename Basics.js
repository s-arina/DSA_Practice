// ARRAYS

let array = [];

array.push(1, 2); // [1, 2] – add to end
array.pop(); // [1] – return first element
array.shift(); // [2] – return last element
array.unshift(0); // [0, 1, 2] – add to front
array.map((x) => x * 2); // [0, 2, 4]

let array2 = [1, 2, 3, 4, 5];

array2.reduce((a, b) => a + b, 0); // 15 – sum
array2.filter((x) => x % 2); // [1, 3, 5] – filter out/remove the condition

// OBJECTS

var obj = {
  France: 'Paris',
  England: 'London',
};

// for...in
// returns a list of keys on the object being iterated
for (let i in obj) {
  console.log(i);
  // France
  // England
}

// for...of
// returns a list of values of the props on the object being iterated
for (let i of Object.keys(obj)) {
  console.log(obj[i]);
  //  Paris
  //  London
}

// SORT

let arraySort = [-5, 2, -3, 1, 0, -4];
let str = ['banana', 'apple', 'carrot'];

arraySort.sort((a, b) => a - b); // [-5, -4, -3, 0, 1, 2] ascending
arraySort.sort((a, b) => b - a); // [2, 1, 0, -3, -4, -5] descending
str.sort(); // ['apple', 'banana', 'carrot'] ABC order

console.log(str);
