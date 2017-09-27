function Robot () {
  let letter1 = randChar()
  let letter2 = randChar()
  let num1 = randNum()
  let num2 = randNum()
  let num3 = randNum()
  this.name = `${letter1}${letter2}${num1}${num2}${num3}`
}
function randChar ()l {
    let possible = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`
    let randomChar = possible.charAt(Math.floor(Math.random() * possible.length));
    return randomChar;
}
function randNum () {
  let possible = '0123456789'
  let randomNum = (Math.floor(Math.random() *  10))
  return randomNum
}
function createName() {

}


module.exports = Robot
