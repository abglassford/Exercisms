function parse(string) {
   var result = '';
   var parsedString = string.replace('-', ' ').replace(':', '').replace(',', '').split(' ')

  for (var j = 0; j < parsedString.length; j++) {
     var capitalCount = 0
     for (var i = 0; i < parsedString[j].length; i++) {
       if (parsedString[j][i] === parsedString[j][0] || parsedString[j][i] === parsedString[j][i].toUpperCase()) {
         result += parsedString[j][i].toUpperCase()
         capitalCount++
       }
       if (capitalCount === parsedString[j].length) {
         return parsedString[j]
       }
     }
   }
   return result
}

console.log(parse('PHP: Hypertext Preprocessor'))

module.exports = {parse};
