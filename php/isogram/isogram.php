<?php

  function isIsogram ($word) {
    $lowerWord = strtoupper($word);
    $compare = [];
    for ($i=0; $i < strlen($word); $i++) {
      if (in_array($lowerWord[$i], $compare)) {
        return false;
      } else if ($lowerWord[$i] !== strtolower($lowerWord[$i])){
        array_push($compare, $lowerWord[$i]);
      }
    }
    return true;
  }

isIsogram('eleven');
