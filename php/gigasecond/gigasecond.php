<?php
function from($date) {
  $timeStamp = $date->getTimestamp() + 1000000000;
  $newDate = date('Y-m-d H:i:s', $timeStamp);
  return new DateTime($newDate);
}
