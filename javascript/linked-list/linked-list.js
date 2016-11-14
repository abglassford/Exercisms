function LinkedList() {
  this.data = [];
}

LinkedList.prototype.push = function (num) {
  this.data.push(num)
}

LinkedList.prototype.pop = function (num) {
  return this.data.pop()
}

LinkedList.prototype.shift = function () {
  return this.data.shift();
}

LinkedList.prototype.unshift = function (num) {
  return this.data.unshift(num);
}

LinkedList.prototype.count = function () {
  return this.data.length;
}

LinkedList.prototype.delete = function (num) {
  return this.data.splice(this.data.indexOf(num), 1)
}
module.exports = LinkedList;
