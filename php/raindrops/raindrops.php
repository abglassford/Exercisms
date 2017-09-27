<?php

function raindrops($drops) {
  $value = '';
  if ($drops % 3 === 0) {
    $value .= 'Pling';
  }
  if ($drops % 5 === 0) {
    $value .= 'Plang';
  }
  if ($drops % 7 === 0) {
    $value .= 'Plong';
  }
  if ($value === '') {
    return strval($drops);
  }

  return $value;
}
