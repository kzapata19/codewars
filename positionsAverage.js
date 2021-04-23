/*
Suppose you have 4 numbers: '0', '9', '6', '4' and 3 strings composed with them:

s1 = "6900690040"
s2 = "4690606946"
s3 = "9990494604"
Compare s1 and s2 to see how many positions they have in common: 0 at index 3, 6 at index 4, 4 at index 8 
ie 3 common positions out of ten.

Compare s1 and s3 to see how many positions they have in common: 9 at index 1, 0 at index 3, 9 at index 5 
ie 3 common positions out of ten.

Compare s2 and s3. We find 2 common positions out of ten.

So for the 3 strings we have 8 common positions out of 30 ie 0.2666... or 26.666...%

Given n substrings (n >= 2) in a string s our function pos_average will calculate the average percentage of 
positions that are the same between the (n * (n-1)) / 2 sets of substrings taken amongst the given n substrings. 
It can happen that some substrings are duplicate but since their ranks are not the same in s they are considered 
as different substrings.

The function returns the percentage formatted as a float with 10 decimals but the result is tested at 1e.-9 
(see function assertFuzzy in the tests).  

Example:
Given string s = "444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490" composing a 
set of n = 10 substrings (hence 45 combinations), pos_average returns 29.2592592593.

In a set the n substrings will have the same length ( > 0 ).
*/

// P.R.E.P - for whiteboard questions
// - Parameters (input) numbers (positive, negative, floated values, whole numbers), string, array, object, etc.
// - Returns (output) - same as above, boolean, nothing? (side-effect)
// - Examples/Edge cases
// - Pseudo Code

/*
Parameters: one string with at least two or more substrings of numbers. Substrings will only be numbers.
- All substrings have identical length 
- Identical substrings should be considered different substrings

Returns: percentage (formatted as a float with 10 decimals). Percentage will be average positions that are the same between
the sets of substrings taken over the total of all substrings. 

Examples/Edge Cases:
Input: "21, 22, 31, 42, 55"
Expected Output: 15%

Pseudo Code:
- Parse the input string to separate the substrings and store in an array (substring array)
- Calculate the total possible substring comparisons to eventually calculate the average percentage of common positions
- Iterate through the substring array:
  - Determine the substring pairs that will be compared. Remember to not compare two substrings twice. 
    Though if there are duplicate substrings in the original input string, treat them as separate substrings
  - Perform the comparison for each substring pair
  - Create a variable to store the running total of common positions for the original input string
- Divide the total number of common positions by the total possible positions. Convert result to percentage
- Return percentage
*/
function posAverage(s) {
  let subStrArr = s.split(",");
  let totalSubstrSets = [subStrArr.length * (subStrArr.length - 1)]/2;
  let subStrLength = subStrArr[0].length; //assumes all subStrs are identical length
  let totalPossPositions = subStrArr.length * subStrLength;
  let totalCommPositions = 0;

  function comparePositions(str1, str2) {
    let pointer = 0;
    while(pointer < str1.length) {
      if(str1[pointer] === str2[pointer]) totalCommPositions++
      pointer++;
    }
    // return totalCommPositions;
  }

  for(let currStr = 0; currStr < subStrArr.length; currStr++) {
    for(let nextStr = currStr + 1; nextStr < subStrArr.length; nextStr++) {
      comparePositions(subStrArr[currStr], subStrArr[nextStr]);
    }
  }
  console.log(totalCommPositions)
  return (totalCommPositions/totalPossPositions)* 100;
}

let numStr = "21, 22, 23" // 1 - might be counting duplicate comparisons of sets?
console.log(posAverage(numStr)) // 1/6 16.67%

// function comparePositions(str1, str2) {
//   let totalCommPositions = 0;
//   // for(let i = 0; i < str1.length; i++) {
//   //   for(let j = i; j < str2.length; j++) {
//   //     if(str1[i] === str2[j]) totalCommPositions++;
//   //     console.log(totalCommPositions)
//   //   }
//   // }
//   let pointer = 0;
//   while(pointer < str1.length) {
//     if(str1[pointer] === str2[pointer]) totalCommPositions++
//     pointer++;
//   }
//   return totalCommPositions;
// }

// console.log(comparePositions("21201", "22205"))