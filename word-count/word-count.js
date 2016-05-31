var Words = function(){
};

Words.prototype.count = function(input){
  var prev
  var newObj = {}
  var newString = input.split(' ')

  newString.sort()

  for(var j = 0; j < newString.length; j++){
    newObj[newString[j]] = 1
  }

  for(var i = 0; i < newString.length; i++){
    if (newString[i] === prev){
      newObj[newString[i]]++
    }
    prev = newString[i]
  }

return newObj
}

module.exports = Words
