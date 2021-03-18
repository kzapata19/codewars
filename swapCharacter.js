function convertToASC(str){
  var newWord = "";
  for(var i = 0; i < str.length; i++) {
     newWord += str.charCodeAt(i) + 1 + ", ";
   }
   return newWord;
}
  
 
convertToASC("hello");
