/*
You will be given an array and a limit value. 
You must check that all values in the array are below or equal to the limit value. 
If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/

/*
Parameters: one array, one number
- Array will have all numbers
- Number will be the limit that all array values will either be below or equal to 
- Do not assume input array is sorted 

Returns: one boolean  
- Return true if all numbers in array are below to equal to the limit
- Return false if all numbers in array are greater than the limit

Examples/Edge Cases:
- smallEnough([66, 101], 200) --> true
- smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100) --> false
- smallEnough([101, 45, 75, 105, 99, 107], 107) --> true
- smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120) --> true

Pseudocode:
- Consider sorting the input array. Native sort method returns array in ascending order
- Once sorted, identify the largest value and compare it to the limit
- Return the appropriate boolean

*/

function smallEnough(a, limit){
  return a.sort((a, b) =>  a - b)[a.length - 1] <= limit;
}

console.log(smallEnough([66, 101], 200))// --> true
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))// --> false
console.log(smallEnough([101, 45, 75, 105, 99, 107], 107))// --> true
console.log(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120))// --> true