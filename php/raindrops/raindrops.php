<?php

function raindrops($drops) {
  $value = '';
  if ($drops % 3 !== 0 &&
      $drops % 5 !== 0 &&
      $drops % 7 !== 0){
    $value = strval($drops);
  }
  if ($drops % 3 === 0) {
    $value .= 'Pling';
  }
  if ($drops % 5 === 0) {
    $value .= 'Plang';
  }
  if ($drops % 7 === 0) {
    $value .= 'Plong';
  }

  return $value;
}
