// http://www.codewars.com/kata/who-likes-it

// Description:

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
// For more than 4 names, the number in and 2 others simply increases.



var likes = function(array){

  var strings = ""
  
   
  if (array.length === 0) {
    strings = "no one likes this";
  } else if(array.length === 1) {
    strings = array[0] + " likes this";
  } else if(array.length === 2) {
    strings = array[0] +' ' + array[1] + " like this";
  } else if (array.length === 3) {
    strings = array[0] +' '+ array[1] +' '+ array[2] +' '+ " like this";
  } else {
    strings = array[0] + array[1] + " and " + array.length - 2 + " others likes this";
  }
	return strings;
}


var likes = function(array){

  var strings = ""
   
  if (array.length === 0) {
    strings = "no one likes this";
  } else if(array.length === 1) {
    strings = array[0] + " likes this";
  } else if(array.length === 2) {
    strings = array[0] +' ' + array[1] + " like this";
  } else if (array.length === 3) {
    strings = array[0] +' '+ array[1] +' '+ array[2] +' '+ " like this";
  } else {
    strings = array[0] + array[1] + " and " + array.length - 2 + " others likes this";
  }
  return strings;
}

//  check length of array
// create a fx that takes first element of array and concats with corresponding string
var length = function () {
  if(array.length === 0) { return format[0];}
  else if(array.length === 1) { array[0].join(format[1])}
  else if(array.length === 2) { array[0].join(array[1]).join(format[2])}
  else if(array.length >= 3) { format[2]}
  else { format[4]}

};

var format = { 0:"no one likes this", 
               1:" likes this", 
               2: " like this", 
               4: (array.length - 2) + " others like this",
               and: " and ", 
               punc: " , "
             };

array.reduce(function(action, name, index){
  string = length()


}, length);