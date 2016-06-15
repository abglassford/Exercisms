var Anagram = function(input){
  this.gram = input
}

Anagram.prototype.matches = function(match){
  var newInput = this.gram.toLowerCase().split('').sort().join('').toLowerCase().split('').sort().join('')
  var yesMatch = []

  for(var i = 0; i < match.length; i++){
    var matchSort = match[i].toLowerCase().split('').sort().join('')
    if(matchSort === newInput && match[i].toLowerCase() !== this.gram.toLowerCase()){
      yesMatch.push(match[i])
    }
  }
    return yesMatch
}

module.exports = Anagram
