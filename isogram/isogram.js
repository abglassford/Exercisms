var Isogram = function(input){
  this.word = input
}

Isogram.prototype.isIsogram = function(){
  var newString = this.word.toLowerCase().replace(/-/g, '').replace(' ', '').split('')
  newString.sort()



  for(var i = 0; i < newString.length; i ++){
    for(var j = 0; j < i; j++){
      if(newString[i] === newString[j]){
        return false
      }else{
        return true
      }
    }
  }



}
module.exports = Isogram
