/*
You are given a string of n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Clock rotation 180 degrees: rot
rot(s) => "ponm\nlkji\nhgfe\ndcba"

selfie_and_rot(s) (or selfieAndRot or selfie-and-rot) 
It is initial string + string obtained by clock rotation 180 degrees with dots interspersed 
in order (hopefully) to better show the rotation when printed.

s = "abcd\nefgh\nijkl\nmnop" --> 
"abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
or printed:
|rotation        |selfie_and_rot
|abcd --> ponm   |abcd --> abcd....
|efgh     lkji   |efgh     efgh....
|ijkl     hgfe   |ijkl     ijkl....   
|mnop     dcba   |mnop     mnop....
                           ....ponm
                           ....lkji
                           ....hgfe
                           ....dcba
Notice that the number of dots is the common length of "abcd", "efgh", "ijkl", "mnop".

Task:
Write these two functions rotand selfie_and_rot

and

high-order function oper(fct, s) where

fct is the function of one variable f to apply to the string s (fct will be one of rot, selfie_and_rot)

Examples:
s = "abcd\nefgh\nijkl\nmnop"
oper(rot, s) => "ponm\nlkji\nhgfe\ndcba"
oper(selfie_and_rot, s) => "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"
Notes:
The form of the parameter fct in oper changes according to the language. 
You can see each form according to the language in "Your test cases".
It could be easier to take these katas from number (I) to number (IV)
Forthcoming katas will study other tranformations.

Bash Note:
The input strings are separated by , instead of \n. The ouput strings should be separated by \r instead of \n. 
See "Sample Tests".
*/

/*
********* rot(s) fx *********
Parameters: one string
- String of substrings separated by a "\n" character. No trailing "\n" character after last substring
- Assume all substrings are identical in length. No mention of their length in prompt

Returns: one string
- The string is a concatenation of each substring, reversed in place, and the sequence of the substrings is also reversed

Examples/Edge Cases:
s = "abcd\nefgh\nijkl\nmnop"
rot(s) -> "ponm\nlkji\nhgfe\ndcba"

Pseudocode:
- Separate the input string into substrings using the "\n" as a delimiter and store results in an array
- Separate each substrings' characters to then reverse
- Reverse the sequence of the substrings
- Join the newly reversed substrings and add a "\n" character between them (no trailing character at the end)
- Return the output string

********* selfieAndRot(s) fx *********
Parameters: one string
- String of substrings separated by a "\n" character. No trailing "\n" character after last substring
- Assume all substrings are identical in length. No mention of their length in prompt

Returns:
- Length of each substring determines the number of trailing dots between each substring (including the "\n" char) in rotated output string.
  Assume substring lengths are identical.
- Output string should be:
  - first half is original substrings separated by dots (number determined by substring length) then "\n" char. No trailing "\n" at end
  - add an extra "\n" char
  - second half is original string with substrings in reverse sequence (including the "\n" chars). No trailing "\n" at the end

Examples/Edge Cases:
s = "abcd\nefgh\nijkl\nmnop" 
selfieAndRot(s) -> "abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba"

Pseudocode:
- 1. Separate the string into substrings using the "\n" delimiter
- 2. Make a copy of the separated string to later reverse and add to the output string
- 3. Calculate the length of the substrings to determine the number of dots used to separate the substrings
- 4. Separate the substrings with number of dots and add a "\n" char
- 5. Take the copy of the separate string, reverse it and perform steps 3 and 4
- 6. Join both strings and insert a "\n" character between them
- 7. Return the output string
*/

function rot(strng) {
  let rotated = strng.split("").reverse().join("")
  return rotated;
}
function selfieAndRot(strng) {
  
}
function oper(fct, s) {
  // your code
}

let str = "abcd\nefgh\nijkl\nmnop";
console.log(rot(str))// expected output: "ponm\nlkji\nhgfe\ndcba"
console.log(typeof rot(str))