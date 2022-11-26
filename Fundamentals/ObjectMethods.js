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

// =====

let values = { Quarters: 25, Dimes: 10, Nickels: 5, Pennies: 1 };

// looping over the keys in an object
// in - key, returns a list of keys on the object being iterated
// in for index
for (let val in values) {
  console.log('FOR IN LOOP');
  console.log('values =>', values); // {'Quarters': 25, 'Dimes': 10, 'Nickels': 5, 'Pennies': 1};
  console.log('val =>', val); // 'Quarters', 'Dimes', 'Nickels', 'Pennies'
  console.log('values[val] =>', values[val]); // 25, 10, 5, 1
}

// looping over the values in an object
// of - val, returns a list of values of the props on the object being iterated
for (let val of Object.keys(values)) {
  console.log('FOR OF LOOP');
  console.log('values =>', values); // {'Quarters': 25, 'Dimes': 10, 'Nickels': 5, 'Pennies': 1};
  console.log('val =>', val); // 'Quarters', 'Dimes', 'Nickels', 'Pennies'
  console.log('values[val] =>', values[val]); // 25, 10, 5, 1
}

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
