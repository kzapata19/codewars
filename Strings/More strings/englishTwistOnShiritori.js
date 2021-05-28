/*
Background:
In Japan, a game called Shiritori is played. The rules are simple, a group of people take turns calling 
out a word whose beginning syllable is the same as the previous player's ending syllable. 
For example, the first person would say the word ねこ, and the second player must make a word that starts 
with こ, like　こむぎ. This repeats until a player can not think of a word fast enough or makes a word that 
ends in ん, because there are no words that begin with ん　in the Japanese language.

English Shiritori has the same principle, with the first and last letters of words. 
That being said the lose condition is saying a word that doesn't start with the previous word's last letter 
or not saying a word quick enough.

For example: apple -> eggs -> salmon -> nut -> turkey ...

Your Task:
You will be given a list of strings, a transcript of an English Shiritori match. 
Your task is to find out if the game ended early, and return a list that contains every valid string until 
the mistake. If a list is empty return an empty list. If one of the elements is an empty string, 
that is invalid and should be handled.

Examples:
All elements valid:
The array {"dog","goose","elephant","tiger","rhino","orc","cat"}

should return {"dog","goose","elephant","tiger","rhino","orc","cat"}

An invalid element at index 2:
The array {"dog","goose","tiger","cat", "elephant","rhino","orc"}

should return ("dog","goose") since goose ends in 'e' and tiger starts with 't'

An invalid empty string at index 2:
The array {"ab","bc","","cd"}

should return ("ab","bc")

All invalid empty string at index 0:
The array {"","bc","","cd"}

should return An Empty List
*/

/*
Parameters: one array with a list of strings
  - if array is empty, return an empty array
  - if array has empty strings only, return an empty array
  - if array has one or more empty strings, treat them as invalid and do not include in the return array

Return: one array with all valid strings
  - valid strings should be returned in sequence of original input

Example/Edge Cases:
1. All strings are valid:
shiritori(["dog","goose","elephant","tiger","rhino","orc","cat"]) --> ["dog","goose","elephant","tiger","rhino","orc","cat"]);

2. Only some strings are valid:
shiritori(["dog","goose","tiger","cat", "elephant","rhino","orc"]) --> ["dog","goose"] 
Note: the losing condition started with "tiger" since last letter is "e"
and first letter of next string is "t". No more strings are included in output array after "goose"

3. Empty array and array with only empty strings:
shiritori([]) --> []
shiritori(["","","","","",""]) --> []

4. Array with valid and invalid strings:
shiritori(["ab","bc","","de","","",""]) --> ["ab","bc"] 
Note: the losing condition starts with the empty string so last valid string in output array is "bc". No other strings are included in output.

Pseudocode:
- iterate through the input array
  - for current string, compare the last character to next string's first character
    - if there is a match, push current string and subsequent string to output array
    - if there is no match, exit loop
- return output array
*/

function shiritori(words) {
  let results = []
  if (words.length === 0) return results
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i]
    if(currentWord === "") break
    else if(words[i + 1] !== undefined && currentWord[currentWord.length - 1] === words[i + 1][0]) results.push(currentWord)
    else {
      results.push(currentWord)
      break;
    }
  }
  return results;
}
console.log(shiritori(["dog","goose","elephant","tiger","elephant","rhino","orc"]))
console.log(shiritori(["dog","goose","tiger","cat", "elephant","rhino","orc"]))
console.log(shiritori([]))
console.log(shiritori(["","","","","",""]))
console.log(shiritori(["ab","bc","","de","","",""]))
console.log(shiritori(["dog","goose","elephant","tiger","rhino","orc","cat"]))
