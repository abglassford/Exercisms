function HelloWorld(){};
HelloWorld.prototype.hello = function(input) {
 if(input === ''){
   return 'Hello, World!'
 }else{
   return 'Hello, ' + input + '!'
 }
};































// HelloWorld.prototype.hello = function(input) {
// if(input === ''){
//   return 'Hello, World!'
// }else{
//   return 'Hello, ' + input + '!'
// }
// };

module.exports = HelloWorld;
