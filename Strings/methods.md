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
What it does: 

How it works: 

Time Complexity:  

Examples:

### repeat
What it does: 

How it works: 

Time Complexity:  

Examples:

### replace
What it does: 

How it works: 

Time Complexity:  

Examples:

### search
What it does: 

How it works: 

Time Complexity:  

Examples:

### slice
What it does: 

How it works: 

Time Complexity:  

Examples:

### split
What it does: 

How it works: 

Time Complexity:  

Examples:

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

