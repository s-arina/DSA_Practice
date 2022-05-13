# Overview of Searching Algorithms

==========

## Linear Search

Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want.

This works for UNSORTED arrays.

JS search methods:

- `.indexOf()`
- `.includes()`
- `.find()`
- `.findIndex()`

> > Time Complexity

- O(n) – as the length of the array grows, so does the time needed to search through it, worst case
- O(1) – best case if the element is the first thing we search for

=====

## Binary Search

Binary search is a much faster form of search.

Rather than eliminating one element at the time, you can eliminate half of the remaining elements at a time.

Binary search only works on SORTED arrays.

It uses the divide and conquer method.

Ex: write a function that takes an array and value and returns the index position of the value if it exists.

> > Time Complexity

- O(log n) – worst/average case (but still just as good as O(1))
- O(1) – best case if the element is the first thing we search for

=====

## Naive String Search

Suppose you want to count the number of times a smaller string appears in a longer string.

A straightforward approach involves checking pairs of characters individually.

Ex: Count the number of times string2 appears in string1.

> > Time Complexity

- O(n)
