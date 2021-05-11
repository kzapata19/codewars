/*
One:
Given a non-empty array of integers, return the result of multiplying the values together in order. 
Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

Two:
You will be given an array of all the family members' ages, in any order. 
The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed 'age' of 0. 
Return a new array with [youngest age, oldest age, difference between the youngest and oldest age].

Three:
Sum all the numbers of the array except the highest and the lowest element (the value, not the index!).
Example:
[ 6, 2, 1, 8, 10 ] => 16
[ 1, 1, 11, 2, 3 ] => 6
*/

/* One:
Parameters: array with integers
Return: Product of all integers
Examples/Edge Cases:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
Pseudocode: 
- Iterate through the input array
- Multiply each integer by the subsequent one
- Continue until reaching the end of the array
- Return the product
*/
function getProduct(arr) {
  return arr.reduce((product, int) =>{
    return product * int;
  }, 1)
}
// console.log(getProduct([1,2,3,4]))

/* Two:
Parameters: array with integers
- Integers are family members' ages
- Random order
- Any age that is less than one year will be 0

Return: array with three integers
- First integer should be age of the youngest member
- Second integer should be age of the oldest member
- Third integer should be the difference between youngest and oldest member
- Assuming all integers should be positive, specifically the third one

Examples/Edge Cases:
getAges([9, 35, 40, 0, 10]) --> [0, 40, 40]
getAges([1, 30, 28, 5]) --> [1, 30, 29]
getAges([9, 33, 1, 2]) --> [1, 33, 32] Note: don't use native sort method bc will place 9 as largest int

Pseudocode:
- Sort input array in ascending order, save sorted array in a new variable 
- Select first item (smallest integer), last time (largest integer) and find the difference
- Save all three integers in results array
*/

function getMin(arr) {
  return arr.reduce((currentMin, int) => int < currentMin ? int : currentMin, Infinity);
}

function getMax(arr) {
  return arr.reduce((currentMax, int) => int > currentMax ? int : currentMax, -Infinity);
}

function getAges(arr) {
  let youngest = getMin(arr);
  let oldest = getMax(arr);
  let diff = oldest - youngest;
  return [youngest, oldest, diff];
}

/*
Three: 
Parameters: one array of integers

Return: one integer (a sum)
- Must be the sum of all integers except the lower and highest integer values

Examples/Edge Cases:
[ 6, 2, 1, 8, 10 ] => 16
[ 1, 1, 11, 2, 3 ] => 6

Pseudocode:
- Sort the array in ascending order
- Iterate through the sorted array starting at index 1 and stopping (and including) array.length - 2
- Add all relevant integers
- Return sum
*/
function getSum(arr) {
  let sorted = arr.sort((a, b) => a - b)
  let removeMin = sorted.shift()
  let removeMax = sorted.pop()
  
  return sorted.reduce((sum, currentInt) => {
    return sum += currentInt;
  }, 0)
}