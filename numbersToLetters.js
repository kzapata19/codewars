/*
Given an array of numbers (in string format), you must return a string. 
The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. 
You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.
*/

/*
Parameters: one array with a list of stringified numbers
All inputs are valid
Returns: one string 

Examples/Edge Cases:
- Must account for "!" = 27, "?" = 28, " "=29 respectively. 
switcher(['24', '12', '23', '22', '4', '26', '9', '8']) -> 'codewars'
switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']) -> 'btswmdsbd kkw'
switcher(['4', '24']) -> 'wc'

Pseudocode:
- Create a dictionary with the numbers and their corresponding characters
- Iterate through the array of stringified numbers
  - Iterate through the dictionary to find the matching character
  - Save result string
- Return result string
*/

function switcher(x){

}