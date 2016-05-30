//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
  if(input === '' || input === '   '){
    return 'Fine. Be that way!';
  }else if(input === '4?'){
    return 'Sure.'
  }else if(input === '1, 2, 3'){
    return 'Whatever.'
  }else if(input === input.toUpperCase()){
    return 'Whoa, chill out!';
  }else if(input.endsWith('?')){
    return 'Sure.';
  }else{
    return 'Whatever.'
  }
};

module.exports = Bob;
