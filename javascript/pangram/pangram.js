var Pangram = function(input){
  this.string = input
}

Pangram.prototype.isPangram = function(){
  var gram = this.string.toLowerCase()
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'
  var alphaCount = 0;
  var alphaArray = alphabet.split('')

  for(var i = 0; i < gram.length; i++){
    for(var j = 0; j < alphaArray.length; j++){
      if(gram[i] === alphaArray[j]){
      alphaArray[j] = 1
      alphaCount += alphaArray[j]
    }
  }
}
  if(alphaCount >= 26){
    return true
  }else{
    return false
}
}

module.exports = Pangram
