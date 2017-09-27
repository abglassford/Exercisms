var Hamming = function(){
};

Hamming.prototype.compute = function(a, b){
  var count = 0;
  if(a.length !== b.length){
    throw new Error('DNA strands must be of equal length.');
  }else{
  for(var i = 0; i < a.length; i++){
    if(a.charAt(i) !== b.charAt(i)){
      count++;
    };
  };
  return count;
};
};

module.exports = Hamming;
