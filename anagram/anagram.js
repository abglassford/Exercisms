function Anagram (word) {
  this.word = word;
}

Anagram.prototype.matches = function (matches){
  if (typeof matches === 'string') {
      matches = [].slice.call(arguments);
    }
  let protoWord = this.word
  let matchList = []
  let sortedWord = protoWord.toLowerCase().split('').sort().join('')

  matches.forEach(function(match){
    if(protoWord.toLowerCase() === match.toLowerCase()){
      return matchList
    } else {
      let newMatch = match.toLowerCase().split('').sort().join('')
      if(newMatch === sortedWord){
        matchList.push(match)
      }
    }
  })
  return matchList
}
module.exports = Anagram;
