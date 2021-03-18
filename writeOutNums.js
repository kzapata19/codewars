function number2words(n){
  var uno = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var dos = {10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 2: "twenty", 3: "thirty", 4: "forty", 5: "fifty", 6: "sixty", 7: "seventy", 8: "eighty", 9: "ninety"};
  var cienes = {100: "hundred", 1000: "thousand"};
  
  var numStr = num.toString()
  var length = numStr.length;
  var output = "";
  
  if(Number.isInteger(n) > 0) {
    
    if(length === 1) { return uno[n];}
    
    else if(length === 2) { 
         for(var key in dos) {
           if(numStr === key) { output += dos[key];}
           else { 
             for(var key in dos) { if(key === numStr[0]) { output+= dos[key];}
             uno.forEach(function(val) { if(val === numStr[1]) { output+= val});
           }
         }
    }
    else if(length === 3) {
              
         
      
      }
      
      
    else if(length === 3) { return
    
  
}