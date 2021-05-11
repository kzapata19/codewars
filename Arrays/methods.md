### map
What it does: transforms every element of an array by applying a callback function to each element. The callback function has following arguments (in order): array element, index, array

How it works: call the method on the target array and takes in a callback function as an argument, it will return a new array with the transformed elements of the input array

Time Complexity: linear O(n)

Examples:
```
let targetArr = [1, 2, 3]
let double = targetArr.map(number => number * 2) // this returns [2, 4, 6]

let family = [
  { member: "Mom", age: 30 },
  { member: "Dad", age: 28 },
  { member: "Child", age: 2 }
]
let intro = family.map(fam =>  `${fam.member} is ${fam.age}`)

let beers = [99, 98, 97, 96, 95, 94, 0]
let song = beers.map(beer => `${beer} bottles of beers on the wall, ${beer} bottles of beers.\nTake one down, pass it around...`)

```

### reduce
What it does:

How it works:

Time Complexity:

Examples:

### filter
What it does:

How it works:

Time Complexity:

Examples:

### forEach
What it does:

How it works:

Time Complexity:

Examples:

### sort
What it does:

How it works:

Time Complexity:

Examples:

### slice
What it does:

How it works:

Time Complexity:

Examples:

### pop
What it does:

How it works:

Time Complexity:

Examples:

### shift
What it does:

How it works:

Time Complexity:

Examples:

### push
What it does:

How it works:

Time Complexity:

Examples:

### unshift
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

### every
What it does:

How it works:

Time Complexity:

Examples: