### charAt
What it does: method returns a new string with a single code unit located at the specified index in the string

How it works: the method takes the target index as an argument. The index should be within the range of 0 and the string.length - 1. If the index is out of range, method returns an empty string. If the index passed can't be converted to an integer or none is provided, the default is 0.

Time Complexity: linear O(n)

Examples:
```
let goal = "sleep seven hours nightly"
let firstE = goal.charAt(2) --> "e"

let outOfRange = goal.charAt(300) --> ""

let space = goal.charAt(5) --> " "
```

### charCodeAt
What it does: The method returns a Unicode character set code unit (ranging between 0 and 65535) of the target string character at a given index.

How it works: method takes one argument, the index of the character whose Unicode will be used. The index must be between 0 and the length - 1 of the string. If the index provided is out of range the return value will be NaN.

Time Complexity: Constant O(1). The index look-up is constant. The corresponding character code look-up is also constant (uses a hashmap?)

Examples:
```
let petName = "Bellini"
petName.charCodeAt(1) --> 101 (for "e")

let belliniAge = "Bellini is about 4 years old"
belliniAge.charCodeAt(17) --> 52 (for "4")

let belliniDrama = "Pet me now!"
belliniDrama.charCodeAt(10) --> 33 (for "!")
```

### concat
What it does: method concatenates the string arguments to the calling string and returns a new (concatenated) string.

How it works: method takes one or more strings to merge. None of the input strings are mutated. A new string, with a copy of the strings to be merged, will be the output.

Time Complexity: linear O(n) Think of the strings to be concatenated as immutable arrays. Every time strings are concatenated, a new string is allocated and the string characters are copied to the new output string. 

Examples:

Concatenating two strings
```
let greeting = "Good morning. "
greeting.concat("What's for breakfast?") --> "Good morning. What's for breakfast?"
```

Concatenating more than two strings
```
let greeting = "Good morning. "
greeting.concat("What's for breakfast? ", "How's the coffee? ", "I'm drinking an almond milk latte.") --> "Good morning. What's for breakfast? How's the coffee? I'm drinking an almond milk latte."
```

Concatenating an array of strings
```
let morning = ["Good ", "morning. ", "What ", "kind ", "of ", "coffee ", "are ", "you ", "drinking", "?"]
"".concat(...morning) --> "Good morning. What kind of coffee are you drinking?"
```

### includes
What it does: method conducts a case-sensitive search to determine whether one string is found within another string. Returns a boolean.

How it works: method takes one argument, a string that will be searched in the string called on. Takes an optional argument, position, to indicate which position to start the search

Time Complexity:  Linear O(n)

Examples:

Includes is case-sensitive
```
let tongueTwister = "Fred fed Ted bread, and Ted fed Fred bread"
let gotBread = tongueTwister.includes("Bread") --> false
```

Start search at a specific index
```
let tongueTwister = "Fred fed Ted bread, and Ted fed Fred bread"
let gotTed = tongueTwister.includes("Ted", 27) --> false
```
Search for punctuation or space
```
let tongueTwister = "Fred fed Ted bread, and Ted fed Fred bread"
let gotComma = tongueTwister.includes(",") --> true
let gotSpace = tongueTwister.includes(" ") --> true
```
### indexOf
What it does: method returns the index of the first occurrence of the target value. Conducts the search at index 0 by default.

How it works: method takes a string argument and will return the index of the first occurrence found on the calling string. Will return -1 if the value is not found. Takes a second optional argument, fromIndex, that specifies the start index of the search. If no target string is specified, the method will search for "undefined" at position 0. 

Time Complexity:  linear, O(n)

Examples:
```
let cat = "My cat Tuna likes to eat pastries."
let findFirstA = cat.indexOf("a") --> 4
```
Get the index of a substring's first instance
```
let bell = "Bellini likes bells and lives in Bellflower."
let findFirstBell = bell.indexOf("bell") --> 14 (search is case-sensitive)
```
Get the index of a substring using fromIndex param
```
let bell = "Bellini likes bells and lives in Bellflower."
let findSecondBell = bell.indexOf("Bell", 1) --> 33
```

### match
What it does: method returns an array with the all the matches made after comparing the source string with the target search string. Can also be used to return a copy of the source string with specified modifications. 

How it works: method takes in a regular expression as an argument to specify the search conditions. The search results are returned in a new array. If a non-regular expression is passed, the method will create a regular expression instance with the input. If no argument is passed, the method will return an array with an empty string [""].

Time Complexity: Depends on the search input  

Examples:
Find all the As in the entire string
```
let lunch = "Today we had salmon and quinoa with a side of veggies."
let allTheAs = /a/gi;
let findAllTheAs = lunch.match(allTheAs) --> ["a", "a", "a", "a", "a", "a"]
```
Find all the the capital Bs only
```
let desserts = "Bagels, banana pie, Bavarian cream, banana split"
let lowerCaseBs = /b/g
let findLowercaseBs = desserts.match(lowerCaseBs) --> ["b", "b"]
```
Find all capital letters within a specific range
```
let animals = "Pig, dog, Cat, mouse, Horse, bird"
let findCaps = /[A-Z]/g
let getAllCaps = animals.match(findCaps) --> ["P", "C", "H"]
```

### repeat
What it does: method creates a new string with all the specified number of copies (concatenated together) of the string on which it is called

How it works: method takes an argument of an integer between 0 and +Infinity that specifies the number of times to repeat the string. Number must not overflow the maximum string size

Time Complexity:  linear O(n)

Examples:
```
let bottles = "99 bottles of beer on the wall, "
let song = bottles.repeat(3) --> "99 bottles of beer on the wall, 99 bottles of beer on the wall, 99 bottles of beer on the wall, "

let blankOutput = bottles.repeat(0) --> ""

let rangeError = bottles.repeat(1/0) --> RangeError
```

### replace
What it does: method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp

How it works: method takes two arguments: the substring that will be replaced and the string that will be the replacement.

Time Complexity:  

Examples:
```
let greeting = "hello, stranger"
let friend = greeting.replace("stranger", "friend!") --> "hello, friend!"
```
Replace using RegEx
```
let greeting = "Hello, stranger. Let's go get drinks!"
let friend = greeting.replace(/stranger/i, "friend") --> "Hello, friend. Let's go get drinks!"
```
Switching words within a string
```
let question = "Drinks Friend"
let sw = /(\w+)\s(\w+)/
let drinks = question.replace(sw, '$2, $1?') --> "Friend, Drinks?"
```
### search
What it does: method performs a search for a match between the passed regular expression and the string it is called on

How it works: takes a regular expression as an argument. If a non-regular expression is passed, the input will be converted to a RegExp with the new RegExp(). Method returns the index of the first match or -1 if no match is found.

Time Complexity:  

Examples: 
```
let greeting = "Hey Bellini!"

let regExpression = /[A-G]/g
let findB = greeting.search(regExpression) --> 4

let regExpPunctuation = /[!]/g
let findExclamation = greeting.search(regExpPunctuation) --> 11

let regExpPeriod = /[.]/g
let findA = greeting.search(regExpPeriod) --> -1 (not found)
```

### slice
What it does: method creates a shallow copy of a substring and returns the copy without modifying the source string

How it works: method takes in two optional arguments, beginIndex and endIndex, where each represents the index of the string characters. The endIndex character is not included. If no arguments are provided, the method will return a copy of the entire string. 
  - beginIndex:
    - zero-based index
    - a negative index will be treated as str.length - n
    - if undefined, start index will be 0 (will return a complete string copy)
    - if index is greater than the index range, method returns an empty string ""
  - endIndex:
    - zero-based index
    - exclusive, meaning the element at the end index is not included in the copy
    - a negative index will be treated as str.length - endIndex
    - if undefined or greater than str.length, method will extract to the end of the string
    - must be greater than beginIndex otherwise an empty string is returned ""

Time Complexity: linear O(n)

Examples:

Both start and end provided:
```
let vegetables = "Eat your vegetables"
let eat = vegetables.slice(0, 3) --> "Eat"
```
Negative indeces for start and end:
```
let vegetables = "Eat your vegetables"
let your = vegetables.slice(-15, -11) --> "your"
```
Negative index for end:
```
let vegetables = "Eat your vegetables"
let onlyOneVeggie = vegetables.slice(0, -1) --> "Eat your vegetable"
```

### split
What it does: divides a string into an ordered list of substrings, stores them in an array, and returns it

How it works: the method returns an array of ordered substrings where the order is determined by a search pattern. The pattern is provided as the first argument. The second argument (optional) is a non-negative integer which specifies the limit on the number of substrings to include in the output array. If limit is 0, method returns [].
Separator:
  - if a single character, will be used to split a string
  - if multiple characters, the entire pattern must be found in order to split
  - if undefined or does not occur in string, the output array will contain one element, the complete source string
  - if its an empty string, the output array will be individual UTF-16 characters of the source string

Time Complexity: linear O(n)

Examples:
```
let hair = "Splitting all the hairs"
let splitting = hair.split("") --> ["S", "p", "l", "i", "t", "t", "i", "n", "g", " ", "a", "l", "l", " ", "t", "h", "e", " ", "h", "a", "i", "r", "s"]
```
Returning a limited number of splits:
```
let hair = "Splitting all the hairs"
let onlySplitting = hair.split(" ", 1) -> ["Splitting"]
```
Using split to reverse a string
```
let palindrome = "A nut for a jar of tuna"
let reversed = palindrome.split("").reverse().join("") --> "anut fo raj a rof tun A"
```

### substr
What it does: 

How it works: 

Time Complexity:  

Examples:

### toLowerCase
What it does: 

How it works: 

Time Complexity:  

Examples:

### toUpperCase
What it does: 

How it works: 

Time Complexity:  

Examples:

### trim
What it does: 

How it works: 

Time Complexity:  

Examples:

