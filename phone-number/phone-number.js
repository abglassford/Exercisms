var PhoneNumber = function(input){
  this.ph = input
}

PhoneNumber.prototype.number = function(){
  var numArray1 = this.ph.replace(/\)/g, '', /\(/g, '', /\-/,'', / /, '')

  numArray2 = numArray1.replace(/\./g, '')

return numArray1
}



module.exports = PhoneNumber
