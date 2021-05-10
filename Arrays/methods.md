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
What it does: executes a reducer callback on every array element and outputs a single value (reduces the collection to a single value). The callback function has four arguments (in order): accumulator, array element, index, source array.

How it works: call the method on target array. The method takes a start value/accumulator (either one is defined or if not, the first array element's value is the start value) and the next array element (either the first or second depending on the initial start value) and processes the values by applying a callback (reducer) function. The reducer's output value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, which will be the final output value.

Time Complexity: linear O(n)

Examples:
```
Finding the sum
let numbers = [2, 4, 5, 10, 11, 5920, 20580]
let add = (initialVal, nextVal) => initialVal += nextVal;
let sum = numbers.reduce(add, 0) // will return 26532

Finding the max (or min) value
let dates = [
  '2021/05/01',
  '2021/05/02',
  '2019/01/04',
  '2018/12/09',
  '1939/09/19'
].map( val => new Date(val) );

let mostRecentDate = dates.reduce( (recent, date) => date > recent ? date : recent, dates[0]);
Note: the initial value for the accumulator is set to be the first date in the dates array.
If no initial value is set, the first value of the array is set as the default initial value.

Grouping Values
let pets = [
  { name: 'Bellini', type: 'cat'},
  { name: 'Tuna', type: 'cat'},
  { name: 'Sally', type: 'dog'},
  { name: 'Kitty', type: 'cat'}
]
let reducer = ( map, value ) =>  {
  if(map[value] == null) map[value] = 1
  else map[value]++;
  return map;
}
let totalPetCount = pets.map(pet => pet.type).reduce(reducer, {})
Note: the initial value is set to be an empty object which will store the tally for the pet types
```

### filter
What it does: creates a new array with all elements that pass the test implemented by the provided callback. The callback takes the following arguments (in order): elements, index (optional), source array (optional), thisArg (optional)

How it works: call filter on the source array, pass a callback as the argument

Time Complexity: linear O(n)

Examples:
```
Search for one item in an array:

let pastries = ["donuts", "croissants", "muffins", "cookies", "pies", "tarts", "quiches"]
let findCookies = pastry => pastry === "cookies";
let getCookies = pastries.filter(findCookies);

Find the specific values in a collection:

let friends = [
  {name: "Dan", age: 28}, 
  {name: "Janice", age: 30}, 
  {name: "Robert", age: 35},
  {name: "Greg", age: 40},
  {name: "Sammy", age: 31},
  {name: "Dolores", age: 32}
]
let friendsOverThirty = friend => friend.age > 30;
let getFriendsOverThirty = friends.filter(friendsOverThirty)

Filter for all even numbers:

let integers = [1, -3, 29, 100, -2910, 384, 38, 99]
let findEvenInt = int => int % 2 === 0;
let getEvenInt = integers.filter(findEvenInt);
```

### forEach
What it does: Applies a callback function to each element. This is an iteration method with no return value.

How it works: Iterates through the source array and applies a function to every element. Method is used in place of a for loop. The callback function has the following arguments (in order): element, index (optional), source array (optional)

Time Complexity: linear O(n)

Examples:
```
Console.log a string for each element:

let names = ["Belini", "Tuna", "Dora", "Swiper"]
let petGreetings = pet => console.log(`Hello, I am a cat. My name is ${pet}.`);
let greet = names.forEach(petGreetings);

Use the index param in the callback:

let pets = ["Belini", "Tuna", "Dora", "Swiper"]
let petOrder = (pet, index) => console.log(`Hello, I am ${pet}. I am number ${index+1} in the collection.`);
let petIndex = pets.forEach(petOrder);

Use the array param in the callback:

let pets = ["Belini", "Tuna", "Dora", "Swiper"]
let petList = (pet, index, array) => {
  if(index === array.length - 1) console.log(`Hello, I am ${pet}. I am number ${index+1} (the last pet) in the collection.`)
  else console.log(`Hello, I am ${pet}. I am number ${index+1} in the collection.`)
}
let petIntros = pets.forEach(petList);
```

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