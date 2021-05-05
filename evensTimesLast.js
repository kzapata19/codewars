/*
Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.

*/

/*
Parameters: an array of integers

Returns: one integer 

Examples/Edge Cases:
- Integer collection with two integers with even indeces:
evenLast([2, 3, 4, 5]) -> 30
(2 + 4) * 5 = 30

- Only one element has an even index:
evenLast([9, 12]) -> 108
9 * 12 = 108

- Last integer also has an even index (included in both calculations: sum and product):
evenLast([-9, 3, 2, -98, 6]) -> -6
(-9 + 2 + 6) = -1 * 6 = -6 

Pseudocode:
1. Iterate through the array 
  - Select all integers with an even index (even index includes 0)
  - add all of the above integers
  - multiply sum by value of last item in the array
2. Return calculation result

*/

function evenLast(numbers) {

}