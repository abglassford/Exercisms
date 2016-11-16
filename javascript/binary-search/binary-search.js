function BinarySearch (array) {
  var count = 0;
  array.forEach((el, i) => {
    if (array.sort()[i] === el) {
      count++
    }
  })
  if (count === array.length) {
    this.array = array;
  }

}




module.exports = BinarySearch;
