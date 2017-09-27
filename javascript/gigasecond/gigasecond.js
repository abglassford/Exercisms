var Gigasecond = function(date){
  this.gigDate = date;
  this.gigSec = 1000000000000;
}

Gigasecond.prototype.date = function(){
  return new Date(this.gigDate.getTime() + this.gigSec);
}

module.exports = Gigasecond;
