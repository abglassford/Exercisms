<?php

function from($date) {
    $gs = clone $date;
    $gs->add(new DateInterval('PT1000000000S'));
    print $gs;
    return $gs;
}
