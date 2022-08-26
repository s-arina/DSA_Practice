// ======================================== ARRAYS

let array = [];

array.push(1, 2); // [1, 2] – add to end
array.pop(); // [1] – return first element
array.shift(); // [2] – return last element
array.unshift(0); // [0, 1, 2] – add to front
array.map((x) => x * 2); // [0, 2, 4]

let array2 = [1, 2, 3, 4, 5];

array2.reduce((a, b) => a + b, 0); // 15 – sum
array2.filter((x) => x % 2); // [1, 3, 5] – filter out/remove the condition

// ======================================== OBJECTS

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

// ======================================== SORT

let arraySort = [-5, 2, -3, 1, 0, -4];
let str = ['banana', 'apple', 'carrot'];

arraySort.sort((a, b) => a - b); // [-5, -4, -3, 0, 1, 2] ascending
arraySort.sort((a, b) => b - a); // [2, 1, 0, -3, -4, -5] descending
str.sort(); // ['apple', 'banana', 'carrot'] ABC order

console.log(str);

// ======================================== OBJECT.CREATE() & THIS

const sayHi = {
  greet() {
    console.log(`Hi, ${this.firstname} ${this.lastname}!`);
    // a method on function person
    // the `this` context is brought over from the function it belongs to
  },
};

function person(firstname, lastname) {
  const newPerson = Object.create(sayHi);
  newPerson.firstname = firstname;
  newPerson.lastname = lastname;

  return newPerson;
}

const me = person('Sarina', 'Chang');
console.log(me.greet()); // Hi, Sarina Chang!

let newPerson = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st street',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

// let copiedPerson = JSON.parse(JSON.stringify(newPerson));
// console.log returns different objects

let copiedPerson = Object.assign({}, newPerson);
// even if values are changed, console.log still returns the original

copiedPerson.firstName = 'Jane'; // disconnected

copiedPerson.address.street = 'Amphitheatre Parkway';
copiedPerson.address.city = 'Mountain View';

console.log(copiedPerson);
