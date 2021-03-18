//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


// Test.assertEquals(even_or_odd(2), "Even")
// Test.assertEquals(even_or_odd(0), "Even")
// Test.assertEquals(even_or_odd(7), "Odd")
// Test.assertEquals(even_or_odd(1), "Odd")

function even_or_odd(number) {
	var absNum = Math.abs(number);
  if (absNum === 0 || absNum % 2 === 0) { return "Even";}
  return "Odd";
 }

console.log(even_or_odd(7));
