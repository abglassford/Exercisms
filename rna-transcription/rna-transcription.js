var DnaTranscriber = function(){
};

DnaTranscriber.prototype.toRna = function(dna){
  var rna = '';
  for(var i = 0; i < dna.length; i++){
  if(dna.charAt(i) === 'C'){
    rna += dna.charAt(i).replace('C', 'G');
  }else if(dna.charAt(i) === 'G'){
    rna += dna.charAt(i).replace('G', 'C')
  }else if(dna.charAt(i) === 'A'){
    rna += dna.charAt(i).replace('A', 'U')
  }else if(dna.charAt(i) === 'T'){
    rna += dna.charAt(i).replace('T', 'A');
  }
}
return rna;
};

module.exports = DnaTranscriber;
