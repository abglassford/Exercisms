var BeerSong = function(){}

BeerSong.prototype.verse = function(input){
  if(input === 1){
    return input + ' bottle of beer on the wall, ' + input + ' bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n';
  }else if(input === 0){
    return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
  }else{
    return input + ' bottles of beer on the wall, ' + input + ' bottles of beer.\nTake one down and pass it around, ' + (input - 1) + ' bottles of beer on the wall.\n';
}
}
BeerSong.prototype.sing = function(first, last){
    var bottle = first;
    while(bottle >= last){
      this.verse(bottle);
      bottle--;
    }
}


module.exports = BeerSong
