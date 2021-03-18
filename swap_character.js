var convertToASC = function(str){
  var newWord = "";
  for(var i = 0; i < str.length; i++) {
     newWord += str.charCodeAt(i) + 1 + ", ";
   }
  
  var convertToLetters = function(newWord){
    var newWord2 = "";
    for (var i = 0; i < newWord.length; i++) {
      newWord2 += parseInt(i);
    }
    return newWord2;
}