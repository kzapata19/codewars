// Raise Me to The Third Power, Search My Divisors

// The number six has this interesting property, and is the smallest number in having it 
// (after the integer 1 that obviously fulfills this condition): 
// Its cube, is divisible by the sum of its divisors. 
// Let's see it:

// 6 ^ 3 = 216
// divisors of 6: 1, 2, 3, 6
// sum of its divisors= 1 + 2 + 3 + 6 = 12
// And 216 / 12 = 18 (integer) and 18.12 = 216
// The first terms of this sequence are:

// n    a(n)
// 1       6 
// 2      28
// 3      30
// 4      84
// 5     102
// Your challenge is to create a function int_cube_sum_div() (or similar in other languages), 
// that may receive, n, the ordinal number of the term of the sequence, as an argument, 
// and outputs the corresponding value of the term of that sequece of integers. Or explained in this way:

// int_cube_sum_div(n) -------> a(n)
// Let's see some cases:

// int_cube_sum_div(4) ------> 84
// /// divisors of 84 : 1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84
//     sum of divisors = 1 + 2 + 3 + 4 + 6 + 7 + 12 + 14 + 21 + 28 + 42 + 84 = 224
//     cube of 84 = 84^3 = 592704
//     592704 is a multiple of 224///

// int_cube_sum_div(5) ------> 102
// Your code should use memoization in order to have higher speed for testing. 
// Does your code reach up to the 120-th term? We can get this upper limit in the tests.