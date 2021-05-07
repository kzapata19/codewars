/*
Given two arrays of strings a1 and a2 return a sorted array r 
in lexicographical order of the strings of a1 which are substrings of strings of a2.

#Example 1: a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

#Example 2: a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.

In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

Beware: r must be without duplicates.
Don't mutate the inputs.
*/

/*
Parameters: two arrays
  - First array is a list of strings that may or may not be substrings 
    of the strings in second array. 

Return: one array
  - A lexicographical ordered array of string in first array input that are substrings of second array input
  - Return array must be without duplicates
  - Return empty array if no substrings were found

Examples/Edge Cases:
  - a1 = ["arp", "live", "strong"], a2 = ["lively", "alive", "harp", "sharp", "armstrong"] --> ["arp", "live", "strong"]
  - a1 = ["tarp", "mice", "bull"], a2 = ["lively", "alive", "harp", "sharp", "armstrong" --> []

Pseudocode: 
  - Iterate through second array
    - compare each substring in first array to each string in the first array
      - if the substring is found in the string, push substring into results array
  - If no matches found, return empty array
  - Remove duplicates from results array
  - Sort results arrays alphabetically
  - Return results
  */
