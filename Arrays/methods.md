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
What it does: sorts the source array elements in place (using a compare callback) and returns the sorted array. If a compare callback is not provided, the default sort order is ascending, determined by converting all elements into strings and then comparing their sequences of UTF-16 code units.

How it works: The compare callback takes in two arguments: the first element for comparison and the second element for comparison. 
- If compareFunction(firstElem, secondElem) returns less than 0, leave both elements unchanged in the collection's sequence
- If compareFunction(firstElem, secondElem) returns 0, leave both elements unchanged with respect to each other but sorted with respect to the rest of the collection
- If compareFunction(firstElem, secondElem) returns greater than 0, sort secondElem before firstElem 

Time Complexity: Depends on the implementation of the callback

Examples:
```
Alphabetical order with no compare callback defined:

let names = ["Dora", "Swiper", "Bellini", "Tuna"]
let alphabeticalOrder = names.sort() --> ["Bellini", "Dora", "Swiper", "Tuna"]

Sort numerically:

let integers = [-1, 0, 8,-19, 88, 193, -183, 9]
let sortAscending = (num1, num2) => num1 - num2;
let sorted = integers.sort(sortAscending) --> [-183, -19, -1, 0, 8, 9, 88, 193]

Sort an array of objects:

let cats = [
  {name: "Bellini", weight: 12},
  {name: "Tuna", weight: 5},
  {name: "Dora", weight: 10},
  {name: "Swiper", weight: 11}
]
let sortDescending = (cat1, cat2) => cat2.weight - cat1.weight
let heaviestToSmallest = cats.sort(sortDescending) --> 
[ 
  {name: "Bellini", weight: 12},
  {name: "Swiper", weight: 11},
  {name: "Dora", weight: 10},
  {name: "Tuna", weight: 5}
]

```

### slice
What it does: method returns an array with a shallow copy of the portion of the source array.  

How it works: The method takes two (optional) arguments (in order): start and end, where each represents the index of the array elements. The end element is not included. The source array remains unmodified. If no arguments are provided, the method will return a shallow copy of the entire source array. 
  - Start index: 
    - zero-based index
    - a negative index, *n*, will extract n elements from the end of the array in reverse order
    - if undefined, start index is 0
    - if index is greater than the index range, method returns an empty array
  - End index:
    - zero-based index
    - exclusive, meaning the element at the end index is not included in the copy
    - a negative index, *n*, will extract n elements from the end of the array in reverse order
    - if undefined or end is greater than the array length, the method will copy through the end of the array (inclusive)

Time Complexity: linear 0(n)

Examples:
```
Both start and end provided:

let vegetables = ["kale", "onion", "spinach", "leek", "celery", "tomato"];
let removeImposter = vegetables.slice(0, 5) // or vegetables.slice(0, vegetables.length -1)
output: ["kale", "onion", "spinach", "leek", "celery"]

Negative indeces for start and end:

let vegetables = ["kale", "onion", "tomato", "spinach", "leek", "celery"];
let selectImposter = vegetables.slice(-4, -3) --> ["tomato"]

Negative index for end:

let vegetables = ["kale", "onion", "spinach", "leek", "celery", "tomato"];
let soupVeggies = vegetables.slice(1, -1) --> ["onion", "spinach", "leek", "celery"]

```

### pop
What it does: method removes the last element of an array, modifying the array, and returns that element.

How it works: method mutates the source array, no arguments are passed. If the collection is empty, method returns undefined

Time Complexity: constant O(1), the run time is independent of the (input size) of the collection

Examples:
##### Removes the last element and mutates the source array:
```
let winterDrinks = ["hot chocolate",  "tea", "latte", "matcha", "ice coffee"];
let summerDrink = drinks.pop(); --> "ice coffee"
let winterDrinks = ["hot chocolate",  "tea", "latte", "matcha"];

##### Empty source array, returns undefined:

let badCoffeeDrinks = [];
let drink = badCoffeeDrinks.pop() --> undefined
```
##### Collection of objects:
```
let winterMenu = [
  {
    caffeinatedDrinks: ["latte", "cappuccino"],
    nonCaffeinatedDrinks: ["apple cider", "hot chocolate"]
  },
  {
    soups: ["chicken noodle", "tortilla", "split pea", "peanut soup", "lima beans"],
    hotPlates: ["ramen", "beef stroganoff", "veggie lasagna", "dumplings", "cajun jambalaya", "ravioli"]
  }
]
let winterFoodOnly = winterMenu.pop() --> 
[
  {
    soups: ["chicken noodle", "tortilla", "split pea", "peanut soup", "lima beans"],
    hotPlates: ["ramen", "beef stroganoff", "veggie lasagna", "dumplings", "cajun jambalaya", "ravioli"]
  }
]

WinterMenu is modified (only the drinks remain):
winterMenu = [
  {
    caffeinatedDrinks: ["latte", "cappuccino"],
    nonCaffeinatedDrinks: ["apple cider", "hot chocolate"]
  }
]
```
##### Remove last key/value pair:
An array-like object with enumerated keys and a length property can use pop. The last element (with the highest numbered key) is removed and the length property is updated.
```
let numbers = { 0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", length: 6 };
let six = Array.prototype.pop.call(numbers); --> "five"
numbers = { 0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", length: 5 };
```
### shift
What it does: method removes the first element of an array, modifying the array, and returns that element. When the element is removed, all remaining elements are shifted one index to the left.

How it works: method mutates the source array by removing the first element and shifting each remaining element one index down. No arguments are passed. If the collection is empty, method returns undefined. 

Time Complexity: linear O(n)
Like pop and push, shift (and unshift, below) is operating *on* the array instead of simply copying it (like slice). But unlike pop and push, shift (and unshift, below) must "shift" all the elements of the array.

Examples:
##### Remove an element from an array 
```
let snackySnacks = ["pie", "carrots", "hummus", "olives", "green apples", "frozen grapes"];
let cheatdaySnack = snackySnacks.shift(); --> "pie"
snackySnacks = ["carrots", "hummus", "olives", "green apples", "frozen grapes"]
```
##### Remove first key/value pair:
An array-like object with enumerated keys and a length property can use shift. The first element (with the lowest numbered key) is removed and the length property is updated.
```
let numbers = { 0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", length: 6 };
let six = Array.prototype.pop.call(numbers); --> "zero"
numbers = { 1: "one", 2: "two", 3: "three", 4: "four", 5: "five", length: 5 };
```
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