<?php

require "raindrops.php";

class RaindropsTest extends PHPUnit_Framework_TestCase
{
    public function test1()
    {
        $this->assertSame("1", raindrops(1));
    }

    public function test3()
    {
        $this->markTestSkipped();
        $this->assertSame("Pling", raindrops(3));
    }

    public function test5()
    {
        $this->markTestSkipped();
        $this->assertSame("Plang", raindrops(5));
    }

    public function test7()
    {
        $this->markTestSkipped();
        $this->assertSame("Plong", raindrops(7));
    }

    public function test6()
    {
        $this->markTestSkipped();
        $this->assertSame("Pling", raindrops(6));
    }

    public function test9()
    {
        $this->markTestSkipped();
        $this->assertSame("Pling", raindrops(9));
    }

    public function test10()
    {
        $this->markTestSkipped();
        $this->assertSame("Plang", raindrops(10));
    }

    public function test14()
    {
        $this->markTestSkipped();
        $this->assertSame("Plong", raindrops(14));
    }

    public function test15()
    {
        $this->markTestSkipped();
        $this->assertSame("PlingPlang", raindrops(15));
    }

    public function test21()
    {
        $this->markTestSkipped();
        $this->assertSame("PlingPlong", raindrops(21));
    }

    public function test25()
    {
        $this->markTestSkipped();
        $this->assertSame("Plang", raindrops(25));
    }

    public function test35()
    {
        $this->markTestSkipped();
        $this->assertSame("PlangPlong", raindrops(35));
    }

    public function test49()
    {
        $this->markTestSkipped();
        $this->assertSame("Plong", raindrops(49));
    }

    public function test52()
    {
        $this->markTestSkipped();
        $this->assertSame("52", raindrops(52));
    }

    public function test105()
    {
        $this->markTestSkipped();
        $this->assertSame("PlingPlangPlong", raindrops(105));
    }

    public function test12121()
    {
        $this->markTestSkipped();
        $this->assertSame("12121", raindrops(12121));
    }
}
