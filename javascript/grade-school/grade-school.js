function School() {
  this.rosterObj = {}
}

School.prototype.roster = function () {
  return this.rosterObj
}
School.prototype.add = function (name, grade) {
  if(this.rosterObj.hasOwnProperty(grade)){
    this.rosterObj[grade].push(name)
    this.rosterObj[grade].sort()
  } else {
    this.rosterObj[grade] = [name]
  }
}
School.prototype.grade = function (grade) {
  if(this.rosterObj[grade] === undefined){
    return []
  } else {
    this.rosterObj[grade].sort()
    return this.rosterObj[grade]
  }
}


module.exports = School
