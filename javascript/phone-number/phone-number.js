var PhoneNumber = function(input){
  this.numbers = 1234567890
  this.numArray1 = input.replace(')', '').replace('(', '').replace('-', '').replace(' ', '').replace(/\./g, '')
}

PhoneNumber.prototype.number = function(){

  if(this.numArray1.length > 10 && this.numArray1[0] === '1'){
    this.numArray1 = this.numArray1.slice(1)
  }else if(this.numArray1.length > 10 && this.numArray1[0] !== '1'){
    return '0000000000'
  }else if(this.numArray1.length < 10){
    return '0000000000'
  }
return this.numArray1
}

PhoneNumber.prototype.areaCode = function(){
  var code = this.numArray1.substring(0, 3)
  return code
}

PhoneNumber.prototype.toString = function(){
  var area = this.numArray1.substring(0, 3)
  var mid = this.numArray1.substring(3, 6)
  var end = this.numArray1.substring(6, 10)


  return '(' + area + ') ' + mid + '-' + end

}

module.exports = PhoneNumber
