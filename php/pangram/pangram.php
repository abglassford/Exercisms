<?php

function isPangram($string){
  $gram = strtolower($string);
  $alphabet = 'abcdefghijklmnopqrstuvwxyz';
  $alphaCount = 0;
  for ($i=0; $i < strlen($gram) ; $i++) {
    for ($j=0; $j < strlen($alphabet); $j++) {
      if ($gram[$i] === $alphabet[$j]) {
        $alphabet[$j] = '*';
        $alphaCount ++;
      }
    }
  }
  if ($alphaCount >= 26) {
    return true;
  } else {
    return false;
  }
}
