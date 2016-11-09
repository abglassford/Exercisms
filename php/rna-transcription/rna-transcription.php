<?php
function toRna ($dna) {
  $rna = '';
  for ($i=0; $i < strlen($dna); $i++) {
    $rna .= convert($dna[$i]);
  }
  return $rna;
}
function convert($strand) {
  switch ($strand) {
    case 'G':
    return 'C';
    case 'C':
    return 'G';
    case 'T':
    return 'A';
    case 'A':
    return 'U';
  }
}
