/*
You are given a string of n lines, each substring being n characters long: For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Symmetry with respect to the main diagonal: diag_1_sym (or diag1Sym or diag-1-sym)
diag_1_sym(s) => "aeim\nbfjn\ncgko\ndhlp"
Clockwise rotation 90 degrees: rot_90_clock (or rot90Clock or rot-90-clock)
rot_90_clock(s) => "miea\nnjfb\nokgc\nplhd"
selfie_and_diag1(s) (or selfieAndDiag1 or selfie-and-diag1) 
It is initial string + string obtained by symmetry with respect to the main diagonal.

s = "abcd\nefgh\nijkl\nmnop" --> 
"abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"
or printed for the last:
selfie_and_diag1
abcd|aeim
efgh|bfjn
ijkl|cgko 
mnop|dhlp
Task:
Write these functions diag_1_sym, rot_90_clock, selfie_and_diag1
and

high-order function oper(fct, s) where

fct is the function of one variable f to apply to the string s (fct will be one of diag_1_sym, rot_90_clock, selfie_and_diag1)

Examples:
s = "abcd\nefgh\nijkl\nmnop"
oper(diag_1_sym, s) => "aeim\nbfjn\ncgko\ndhlp"
oper(rot_90_clock, s) => "miea\nnjfb\nokgc\nplhd"
oper(selfie_and_diag1, s) => "abcd|aeim\nefgh|bfjn\nijkl|cgko\nmnop|dhlp"
Notes:
The form of the parameter fct in oper changes according to the language. 
You can see each form according to the language in "Your test cases".
It could be easier to take these katas from number (I) to number (IV)
Bash Note: The output strings should be separated by \r instead of \n. See "Sample Tests".
*/

/*
********* diag1Sym(strng) fx *********
Parameters: one string
- A string of substrings with a "\n" character between each substring
- All substrings have an identical length

Return: one string
- The string is made of substrings of identical lengths
- Each substring is separated by a "\n" character
- Each substring is a collection of the nth index of each substring belonging to the original string

Examples/Edge Cases:
s = "abcd\nefgh\nijkl\nmnop"
diag_1_sym(s) -> "aeim\nbfjn\ncgko\ndhlp"

Pseudocode:
- Separate the input string into substrings, save in an array(?)
- Iterate through the array of substrings to select the a character from each substring at the current n-th index
- Collect each newly formed substring (in an array? object?)
- Iterate through collection to add "\n" between each substring
- Join all substrings into one string
- Return output string
*/

function vertMirror(strng) {
  let subStrsArr = strng.split("\n");
  let subStrArrLength = subStrsArr.length;
  let lastSubStr = subStrsArr.length - 1;
  let currentSubStr = 0;
  let verticalMirror = "";
  
  while(currentSubStr < subStrArrLength) {
    if(currentSubStr === lastSubStr) verticalMirror += subStrsArr[currentSubStr].split("").reverse().join("")
    else verticalMirror += subStrsArr[currentSubStr].split("").reverse().join("")+"\n"
    currentSubStr++;
  }
  return verticalMirror;
}

function diag1Sym(strng) {
  let strArr = strng.split("\n") 
  let diagArr = "";
  for(let i = 0; i < strArr.length; i++) {
    for(let j = 0; j < strArr.length; j++) {
      diagArr += strArr[j][i];
    }
    diagArr += "\n";
  }
  return diagArr.slice()
}
function rot90Clock(strng) {
  let diag1SymResult = diag1Sym(strng);
  return vertMirror(diag1SymResult);
}
function selfieAndDiag1(strng) {
  // your code
}
function oper(fct, s) {
  // your code
}
let str ="abcd\nefgh\nijkl\nmnop";
// console.log(diag1Sym(str)); // expected output: "aeim\nbfjn\ncgko\ndhlp"
console.log(rot90Clock(str)); // expected output: "miea\nnjfb\nokgc\nplhd"