<?php

//
// This is only a SKELETON file for the "Hamming" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function distance($a, $b)
{
  if (strlen($a) != strlen($b)) {
    throw new InvalidArgumentException('DNA strands must be of equal length.');
  }
  $count = 0;
  $arr1 = str_split($a);
  $arr2 = str_split($b);
  for ($i=0; $i <= count($arr1); $i++) {
    if ($arr1{$i} != $arr2{$i}) {
      $count++;
    };
  };
  return $count;
}
