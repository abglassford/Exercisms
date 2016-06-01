var Words = function(){
};

Words.prototype.count = function(input){
  var prev
  var newObj = {}
  var test1 = input.replace('\n', ' ')
  var test2 = test1.replace('\t',' ')
  test1 = test2.replace('  ', ' ')
  test2 = test1.trim()

  var newString = test2.split(' ')

  newString.sort()

  for(var j = 0; j < newString.length; j++){
    newString[j] = newString[j].toLowerCase()
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
