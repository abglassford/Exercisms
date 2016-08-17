function School() {
  this.rosterObj = {}
  this.students = []
}

School.prototype.roster = function () {
  return this.rosterObj
}
School.prototype.add = function (studentArg, gradeArg) {
  this.rosterObj[gradeArg] = new Array
  this.rosterObj[gradeArg].push(studentArg)

}


module.exports = School
