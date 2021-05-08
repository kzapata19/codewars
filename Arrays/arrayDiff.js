/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

/*
Parameters: two arrays
- First array is a list of numbers
- Second array is at least one or more numbers that should be removed from the first array if found. 
  All instances must be removed

Return: one array
- Return an array with all the numbers not present in the second array

Examples/Edge Cases:
- arrayDiff([], [4,5]) --> [] if array1 is empty, return empty
- arrayDiff([3,4], [3]) --> [4]
- arrayDiff([1,8,2], []) --> [1,8,2]  if array2 is empty, return copy of array1
- arrayDiff([1,2,3], [1,2]) --> [3]
- arrayDiff([1,1,1,1,2,2,3], [1,2]) --> [3] remove all duplicates

Pseudocode:
  - Iterate through the array1
  - Compare each array1 element to each array2 element
    - If there there is not match, push that element to results array
  - Return results array
*/

function arrayDiff(a, b) {
  if(a.length === 0 || b.length === 0) return a;
  let currentResults = []
  function check(currentArray, compareArr) {
    if()
    else return check(currentArray, b)
  }
  return check(a, b)
}

// console.log(arrayDiff([], [4,5])) // --> [] 
console.log(arrayDiff([3,4], [3])) // --> [4]
// console.log(arrayDiff([1,8,2], [])) // --> [1,8,2]   
console.log(arrayDiff([1,2,3], [1,2]))//--> [3]
console.log(arrayDiff([1,1,1,1,2,2,3], [1,2])) // --> [3] 