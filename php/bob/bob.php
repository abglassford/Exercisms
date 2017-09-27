<?php

class Bob {
  public function respondTo($statement)
  {
    $noSpec = preg_replace('/[^a-zA-Z]+/', '', $statement);
    $noSpace = rtrim($statement, ' ');
    if (strlen($statement) === 0) {
      return 'Fine. Be that way!';
    }
    if (ctype_upper($noSpec)) {
      return 'Whoa, chill out!';
    }
    if (substr($noSpace, -1) === '?') {
      return 'Sure.';
    }
    if (ctype_space($statement)) {
      return 'Fine. Be that way!';
    }
    return 'Whatever.';
  }
}
