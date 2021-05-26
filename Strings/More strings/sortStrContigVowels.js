/*
The goal of this Kata is to write a function that will receive an array of strings as its single argument, 
then the strings are each processed and sorted (in descending order) based on the length of the single longest 
sub-string of contiguous vowels ( aeiouAEIOU ) that may be contained within the string. 
The strings may contain letters, numbers, special characters, uppercase, lowercase, whitespace, 
and there may be (often will be) multiple sub-strings of contiguous vowels. 
We are only interested in the single longest sub-string of vowels within each string, in the input array.

Example:

str1 = "what a beautiful day today"
str2 = "it's okay, but very breezy"
When the strings are sorted, str1 will be first as its longest sub-string of 
contiguous vowels "eau" is of length 3, while str2 has as its longest sub-string of contiguous vowels "ee", 
which is of length 2.

If two or more strings in the array have maximum sub-strings of the same length, 
then the strings should remain in the order in which they were found in the original array.
*/

/*

Parameters: a single array with one or more strings

Return: a single array with the input string(s) sorted in descending order based on the length of a single longest string of contiguous vowels.
  - If two or more strings have the same length of most contiguous vowels, keep the strings in the same order provided in the input array
  - The input strings may contain letters, numbers, special characters, whitespace, upper and lower case characters
  - The input strings may have more than one substring of contiguous vowels

Examples/Edge Cases:
str1 = "what a beautiful day today"
str2 = "it's okay, but very breezy"
sortStringsByVowels([str1, str2]) --> ["what a beautiful day today", "it's okay, but very breezy"]

Pseudocode:
- Create a dictionary that will keep track of source array's string sequence
- Create a variable to hold the vowel string to use for comparison
- Create two counters to track the LARGEST vowel substring length and the CURRENT vowel count
- Create two pointers to track positions of the vowel string and of the current string in the input array
- Iterate through the input array (for each string)
  - Compare each current string character to each vowel character
    - If the character is a vowel, increment the CURRENT vowel counter
      - If the next character is a vowel, increment the CURRENT vowel counter
      - If the next character is not a vowel 
        - Compare the LARGEST and CURRENT counters
          - if CURRENT is larger than LARGEST, replace LARGEST value with CURRENT value
          - if CURRENT is smaller than LARGEST, reset CURRENT to 0
        - If current position is last character of string  
          - assign LARGEST counter as value and key is the index of current string (Map automatically orders keys in sequence of insertion)
    - If there is no match, move the pointer to the next character 
- Iterate through the populated Map
  - sort the Map based on its keys (the strings' LARGEST counter value) in descending order
  - Store the strings in an output array
  - Return results array
*/


function sortStringsByVowels(strings){

  var results = [];
  
  
  return results;
  }