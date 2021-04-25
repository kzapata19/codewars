/*
This kata is the first of a sequence of four about "Squared Strings".

You are given a string of n lines, each substring being n characters long: 

For example:

s = "abcd\nefgh\nijkl\nmnop"

We will study some transformations of this square of strings.

Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"

Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"

or printed:

vertical mirror   |horizontal mirror   
abcd --> dcba     |abcd --> mnop 
efgh     hgfe     |efgh     ijkl 
ijkl     lkji     |ijkl     efgh 
mnop     ponm     |mnop     abcd 

Task:
Write these two functions and
high-order function oper(fct, s) where:
fct is the function of one variable f to apply to the string s (fct will be one of vertMirror, horMirror)

Examples:
s = "abcd\nefgh\nijkl\nmnop"
oper(vert_mirror, s) => "dcba\nhgfe\nlkji\nponm"
oper(hor_mirror, s) => "mnop\nijkl\nefgh\nabcd"

Note:
The form of the parameter fct in oper changes according to the language. 
You can see each form according to the language in "Sample Tests".

Bash Note:
The input strings are separated by , instead of \n. 
The output strings should be separated by \r instead of \n. See "Sample Tests".
*/

/*
********* Vert-mirror fx *********
Parameters: one string
- One string, with N number of substrings (size not predetermined, may or may not be identical for all substrings <- not relevant I don't think)
- Each substring is separated by a "\n"

Returns: one string
- The string is a concatenation of the original string's substrings, each reversed. The original order of the substrings remains
  (substrings reversed in place)

Examples/Edge Cases:
string: "abc\ndefg\nhij\nk"
expected output: "cba\ngfed\njih\nk (notice that the last character 'k' remains the same since no other character available to reverse in that substring"

Pseudocode:
Using native array and string methods: split, reverse, join 
- separate the substrings 
- separate each substring's characters
- reverse each substring's characters
- join each substring's characters
- while keeping the original sequence of the substrings, rejoin the reversed substrings 
- return the vertical mirror of the original string

********* Horizontal-mirror fx *********
Parameters: same as vertical

Returns: one string
- The string is a concatenation of the original string's substrings, where the sequence of the substrings is reversed
  (each substring remains the same, not reversed in place like it was in vertical-mirror fx)

Examples/Edge Cases:
string: "abc\ndefg\nhij\nk"
expected output: "k\nhij\ndefg\nabc 
(notice the "\n" character placement does not change, it follows each substring starting with the first one in the output) 

Pseudocode:
Using native array and string methods: split, reverse, join
- separate the substrings
- reverse the sequence of the substrings (the substring characters remain the same!)
- join the newly sequenced substrings into one string
- return the horizontal mirror of the original string

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
function horMirror(strng) {
  let subStrsArr = strng.split("\n");
  let reversed = subStrsArr.reverse();
  let reversedLength = reversed.length;
  let lastSubStr = reversedLength - 1;
  let currentSubStr = 0;
  let horizontalMirror = "";

  while(currentSubStr < reversedLength) {
    if(currentSubStr === lastSubStr) horizontalMirror += reversed[lastSubStr];
    else horizontalMirror += reversed[currentSubStr]+"\n";
    currentSubStr++;
  }
  return horizontalMirror;
}
function oper(fct, s) {
  return fct(s);
}

let myStr = "abcd\nefgh\nijkl\nmnop";
// console.log(vertMirror(myStr)) //expected output: "dcba\nhgfe\nlkji\nponm"
// console.log(horMirror(myStr)) //expected output: "mnop\nijkl\nefgh\nabcd"
console.log(oper(vertMirror, myStr)) //expected output: "dcba\nhgfe\nlkji\nponm"
console.log(oper(horMirror, myStr)) //expected output: "mnop\nijkl\nefgh\nabcd"