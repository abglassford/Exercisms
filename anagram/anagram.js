var Anagram = function(input){
  this.gram = input
}

Anagram.prototype.matches = function(match){
  var sublist = []

  for(var i = 0; i < match.length; i++){
      for(var j = 0; j < this.gram.length; j++){
        for(var k = 0; k < match[j].length; k++){
            if(this.gram[j] === match[j].charAt(k)){
              

            }
        }

      }


  }
  return sublist
}

module.exports = Anagram
