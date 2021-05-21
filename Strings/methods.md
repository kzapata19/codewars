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
What it does: 

How it works: 

Time Complexity:  

Examples:

### includes
What it does: 

How it works: 

Time Complexity:  

Examples:

### indexOf
What it does: 

How it works: 

Time Complexity:  

Examples:

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

