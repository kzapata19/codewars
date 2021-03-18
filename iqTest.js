// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// Examples :

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers){
  var nums = numbers.split(" "); 
  
  var sortedNum = nums.reduce(function(obj, num) {
      num === 0 || num % 2 === 0 ? obj.even.push(num) : obj.odd.push(num);
      return obj;
      }, {even: [], odd: []});
  
  
  var uniq = sortedNum.even.length < sortedNum.odd.length ? 
             sortedNum.even[0] : sortedNum.odd[0];
  
  return nums.reduce(function(position, num, index) {
        return uniq === num ? position += 1 + index : position;
        }, 0);
  
}

// refactored: 

function iqTest (numbers) {
  
  numbers = numbers.split(" ").map(function(num){ return parseInt(num);});

  var odd = numbers.filter(function(num){ return num % 2 === 1;});
  var even = numbers.filter(function(num){ return num % 2 === 0;});

  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);

}