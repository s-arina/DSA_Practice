## Problem Solving Approach

==========

> > 5 Main Steps

1. Understand the problem
2. Explore concrete examples
3. Break it down
4. Solve / Simplify
5. Look back and refactor

==========

1. Understand the problem

Ask questions:

- can I restate the problem in my own words?
- what are the inputs that go into the problem?
- what are the outputs that should come from the solution?
- can the outputs be determined from the inputs?
- is there enough information to solve the problem?
- how should I label the important pieces of data that are a part of the problem?

Ex: Write a function which takes two numbers and returns their sum.

- what types of numbers are you allowed to pass in?
- what happens if someone doesn't put in another number?
- how large are the numbers?

==========

2. Explore concrete examples

Coming up with examples can help you understand the problem better.

- start with simple examples
- progress to more complex examples
- explore exmaples with empty inputs
- explore examples with invalid inputs

Ex: write a function which takes in a string and returns a count of each character in the string.

- how should it be formatted? `{h:1, e:1, l:2, p:1}` ?
- what happens if there are numbers? empty spaces?
- different case characters? do they count twice?
- what happens if nothing is passed in?

==========

3. Break it down

Take the steps of the problem and write them down.

Ex: write a function which takes in a string and returns a count of each character in the string.

    function charCount(str) {
        // make object to return at end
        // loop over string, for each character...
            // if the char is a number/letter && key in object, add one to count
            // if the char is a number/letter && !key in object, add it to object and set value to 1
            // if the char is !number/letter, don't do anything
        // return object at end
    }

==========

4. Solve / Simplify

Solve the problem.

If you can't...solve a simpler problem.
Do the stuff you know first if you're stuck on a hard part of the problem.

Ex: write a function which takes in a string and returns a count of each character in the string.

- if you don't know how to account for non-alphanumeric characters, do the other work first
- start off with `.toLowerCase()`
- create an object and a for loop to count the characters
- return the object

==========

5. Look back and refactor

- can you check the result?
- can you derive the result differently?
- can you understand it at a glance?
- can you use the result or method for some other problem?
- can you improve the performance of your solution?
- can you think of other ways to refactor?
- how have other people solved this problem?

Ex: write a function which takes in a string and returns a count of each character in the string.

- turn a `for loop` into a `for of`
- turn the `if/else` into a one liner
- talk about how RegExp may not be the fatest method (`.charCodeAt()`) is faster

==========

> > Recap

1. Make sure you understand the problem

- ask questions

2. Explore concrete examples

- understanding inputs/outputs
- how do you handle errors
- what happens when a user enters something invalid

3. Break it down

- pseudocode, talk out loud
- write down steps

4. Solve / Simplify

- remove some core difficulty
- try and solve something you can then reincorporate back later

5. Look back and refactor

- what could you have done better?
- how does this compare to others’ solutions?
