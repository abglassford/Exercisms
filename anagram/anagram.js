var Anagram = function(input){
  this.gram = input
}

Anagram.prototype.matches = function(match){
  var empty = []
  for(var i = 0; i < this.gram.length; i++){
    for(var j = 0; j < i; j++){
      if(this.gram[i] === match[i].charAt(j)){
        return match[i]
      }else{
        return empty
      }
  }
  }
}

module.exports = Anagram
