class BinarySearch {
  constructor (array) {
    const isArray = array.every((el, i, arr) => {
      if (arr[i - 1] === undefined) {
        return el
      } else {
        return el >= arr[i - 1]
      }
    })
    if (isArray) this.array = array;
  }

  indexOf (element) {
    let i = Math.floor((this.array.length - 1) / 2);
    if (this.array[i] === element) {
      return i;
    } else {
      if (this.array[i] < element) {
        this.array = this.array.slice(0, i)
        this.indexOf(element)
      }
      if (this.array[i] > element) {
        this.array = this.array.slice(i, this.array.length - 1)
        this.indexOf(element)
      }
    }
  }




}

module.exports = BinarySearch;
