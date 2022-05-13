# Problem Solving Patterns

==========

## 1. Frequency Counters

This pattern uses objects or sets to collect values/frequencies of values.

This can often avoid the need for nested loops of O(n^2) operations with arrays/strings.

### Useful for algorithms with:

- multiple pieces of data/inputs
- comparing similar values
- checking for anagrams
- if a value is inside another value
- comparing pieces of data to inputs or more than two
- frequencies of things occurring

It’s usually O(n) time.

> > THE IDEA

The idea behind the frequency counter is to usually use an object and provide a way of breaking down the contents of an array or a string.

Then you’re able to quickly compare that breakdown to how another object looks that was constructed from a string or an array.

In an example, we break the arrays down into objects that classify what’s in those arrays, and then we compare them.

==========

## 2. Multiple Pointers

Creating pointers or values that correspond to an index or position and move towards the beginning/end/middle based on a certain condition.

This is efficient for solving problems with minimal space complexity as well.

### Useful for algorithms with:

- problems dealing with sorted arrays (or linked lists) and need to find a set of elements that fulfill certain constraints
- the set of elements in the array is a pair/triplet/subarray
- squaring a sorted array (easy)
- triplets that sum to zero (medium)
- coparing strings that contain backspaces (hard)

> > THE IDEA

Use two references in a linear structure (array/string/linked lists/etc.) and move those references ([i], [j] indicies for ex.) to compare values against each other.

==========

## 3. Sliding Window

This pattern involves creating a window which can either be an array or number from one position to another.

Depending on a certain condition, the window either increases or closes (and a new window is created).

Very useful for keeping track of a subset of data in an array/string/etc.

### Useful for algorithms with:

- linear data structures (linked lists/array/string)
- finding the longest/shortest substring, subarray, or value
- maximum sum subarray of size 'K' (easy)
- longest substring with 'K' distinct characters (medium)
- string anagrams (hard)

> > THE IDEA

Make a “window”, which can be a single variable or it can be a sub-array or even another string.

Then slide the window, usually from left to right, to compare a specific group of elements.

==========

## 4. Divide and Conquer

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

This pattern can tremendously decrease time complexity.

Usually use for larger, more complex things like sorting a really large list of data,

> > THE IDEA

Say there is a larger set of data (usually an array/string/linked list/tree/etc.).

# If we’re searching for a value, rather than starting from the left and moving all the way to the right, we start by dividing it into smaller pieces and then doing something to each smaller piece to determine where to go next.

## 5. Tree BFS

## 6. Tree DFS
