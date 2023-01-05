/*
- every variable type has to be specified
- even in function arguments
*/

// ========================= FUNCTION / VARIABLE TYPE NAMING

/*
JAVASCRIPT:
const increment = (counterVal) => {
    return counterVal + 1;
};

const counter = increment(10);
*/

const increment = (counterVal: number) => {
  return counterVal + 1;
};

const counter: number = increment(10);

// ========================= ARRAYS

/*
JAVASCRIPT:
let programmingLanguages = ['java', 'typescript', 'python'];
programmingLanguages.push('golang');

console.log(programmingLanguages);
*/

let programmingLanguages: string[] = ['java', 'typescript', 'python'];
programmingLanguages.push('golang');

console.log(programmingLanguages);

// ========================= INTERFACE SCHEMAS FOR OBJECTS

/*
JAVASCRIPT:
const fetchData = (apiUrl) => {
    return fetch(apiUrl).then((res) => res.json());
};

const data = fetchData('myAwesomeApi.com/data/subscribe');
console.log(data.name)
console.log(data.email)
console.log(data.age)
console.log(data.isMarried)
*/

// fetch normally returns a promise and an object
// however this has to be specified in TS
interface IUser {
  name: string;
  email: string;
  age: number;
  isMarried: boolean;
}

// fetchData is returning a Promise with all the properties within the IUser object
const fetchData = (apiUrl: string): Promise<IUser> => {
  return fetch(apiUrl).then((res) => res.json());
};

// =====

interface IProgrammingLanguage {
  name: string;
  awesome: boolean;
  age?: number; // add a ? for optional
}

const typeScript = {
  name: 'typeScript',
  awesome: true,
};

// ========================= ENUMERATIONS (OPTIONS)

/*
in JS:
const serveCheese = (cheeseType, servings) => {
    console.log(`You want ${servings} servings of ${cheeseType}`)
}
*/

// giving a limited amount of options
enum Cheese {
  cheddar = 'cheddar',
  gouda = 'gouda',
  goat = 'goat',
  blueMould = 'blueMould',
}

const serveCheese = (cheeseType: Cheese, servings: number) => {
  console.log(`You want ${servings} servings of ${cheeseType}`);
};

// error: 'argument of type is not assignable to parameter type of 'Cheese'.
// serveCheese('american cheese', 3);

// works
serveCheese(Cheese.blueMould, 3);
