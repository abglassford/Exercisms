var Year = function(number){
  this.number = number;
};

Year.prototype.isLeap = function(){
  if(this.number % 400 === 0){
    return true;
  };
  if(this.number % 100 === 0){
    return false;
  };
  if(this.number % 4 === 0){
    return true;
  }else{
    return false;
  };
};


module.exports = Year;
