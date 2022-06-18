// ============================== PROBLEMS ==============================

// ======================================== FIND THE DUPLICATES IN TWO ARRAYS

/*
Given two arrays, find the intersection (the items occur in both arrays).

    - arrays are not sorted, and might have duplicates.
    - you can modify the arrays
    - you can return the items in any order, but without duplicates.
*/

function getIntersection(arr1, arr2) {
  let array1 = new Set(arr1); // [...new Set(arr1)] slower
  let array2 = new Set(arr2);
  return [...array1].filter((array1) => array2.has(array1));
  // set.has is faster than array.includes, O(1) vs. O(n)
}

console.log(
  getIntersection(
    [1, 100, 200, 8, 8, 8, 3, 6, 100, 10, 10],
    [8, 7, 7, 50, 50, 1, 1, 1, 1, 3, 3]
  )
); // [1, 8, 3]
console.log(getIntersection([1, 1, 2, 3], [3, 2, 1])); // [1, 2, 3]

// ======================================== FIND THE NUMBER THAT APPEARS ONCE

/*
Given an array of integers, all integers appear twice except one integer:
    - return the integer
*/

function findSingle(arr) {
  let single = 0;
  // forEach to loop through the array without returning anything
  arr.forEach((num) => (single ^= num));
  // if there's two of a number, XOR removes them
  return single;
}

console.log(findSingle([10, 2, 2, 1, 0, 0, 10])); // 1

// ======================================== COUNTERS

/*
Create a function count():
    - when called it should return how many times it has been called
    - count.reset() should also be implemented, resetting count back to 1 when it's called
*/

function count() {
  count.val = count.val || 1;
  return count.val++;
}

count.reset = function () {
  count.val = 1;
};

console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3

count.reset();

console.log(count()); // 1

// ====================

// CLOSURES
const countClosure = (() => {
  let num = 0;
  const func = () => ++num;
  // invoking the func will increment the count
  func.reset = () => (num = 0);
  // invoking countClosure.reset() will set the count back to 0
  return func;
})(); // all this will happen when you invoke it

console.log(countClosure()); // 1
console.log(countClosure.reset()); // 0
console.log(countClosure()); // 1

// ======================================== COUNTERS

/*
Create an object with:
    - a property count, which increments everytime count is invoked
    - the initial value is 0
*/

function createCounter() {
  let counter = 0;
  return {
    get count() {
      return counter++;
    },
  };
}

const counter = createCounter();
console.log(counter.count); // 0
console.log(counter.count); // 1
console.log(counter.count); // 2
console.log((counter.count = 100)); // it cannot be altered
console.log(counter.count); // 3

// ======================================== MOST FREQUENTLY OCCURRING CHARACTER(S)

/*
Given a string:
    - return the character that appears the most often
    - if there is more than one, return them in an array
*/

function mostFrequent(str) {
  const map = new Map();
  const result = [];

  for (const letter of str) {
    // map.set(key, value)
    // set the letter in the map, and check if the letter already exists with .get
    // if not, set the value as 0, else 1
    map.set(letter, (map.get(letter) || 0) + 1);
  }

  const max = Math.max(...map.values()); // get the highest value count in the map

  for (const [key, value] of map) {
    // [key, value] = [a, 1], [b, 2], [c, 3]
    if (value === max) {
      // push the KEY whose VALUE matches the max into the array
      result.push(key);
    }
  }
  // only return an array if there is more than one character or none
  // else, just return the first item
  return result.length === 1 ? result[0] : result;
}

console.log(mostFrequent('')); // []
console.log(mostFrequent('abbccc')); // 'c'
console.log(mostFrequent('abbcccddd')); // ['c', 'd']

// ======================================== INTERSECTION OF TWO SORTED ARRAYS (TWO POINTER)

/*
Given 2 sorted arrays:
    - return the elements that exist in both arrays
*/

function intersect(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  let res = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      res.push(arr1[p1]);
      p1++;
      p2++;
    } else {
      if (arr1[p1] < arr2[p2]) {
        p1++;
      } else {
        p2++;
      }
    }
  }
  return res;
}

console.log(intersect([1, 2, 2, 3, 4, 4], [2, 2, 4, 5, 5, 6, 7])); // [2, 2, 4]
