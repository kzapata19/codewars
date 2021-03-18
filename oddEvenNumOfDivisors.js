Odd/Even number of divisors

Given an integer n return 'odd' if the number of its divisors is odd. Otherwise return 'even'.

Examples:

All prime numbers have exactly two divisors (hence 'even')

For n=12 the divisors are [1,2,3,4,6,12] – 'even'

For n=4 the divisors are [1,2,4] – 'odd'

Test.assertEquals(oddity(1),'odd');
Test.assertEquals(oddity(5),'even');
Test.assertEquals(oddity(16),'odd');



function oddity(n){
  var result = [];
  for(var i = 1; i <= n; i++){
      if(n % i === 0){ result.push(i);}
  }
  if(result.length % 2 === 0 ) { return "even";}
   return "odd";  
}

//take square root or divide by 2, 3, etc to check if n is prime