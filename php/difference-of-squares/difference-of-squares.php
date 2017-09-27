<?php
function squareOfSums($num) {
    $sum = 0;
    for ($i = 1; $i <= $num; $i++) {
       $sum += $i;
    }
    return $sum**2;
}

function sumOfSquares($num) {
    $sum = 0;
    for ($i = 1; $i <= $num; $i++) {
        $sum += $i**2;
    }
    return $sum;
}

function difference($num) {
    return squareOfSums($num) - sumOfSquares($num);
}
