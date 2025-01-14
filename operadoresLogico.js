/*
++
=
==
===
!=
+=
&&
||
*/

$i = 0;
$i++;  // $i = 1;
$i=2; // $i =2;
$i == 2; // true ou false
$i === 2; //$i fosse "2" false
$i != 2; // true ou false ao contrario ==
$i += 10; // $i =2? == 12

//$i = 2;
$i == 2 && $i >= 0; // true ou false
//true && true = true;
// $i =0;
$i == 2 && $i >= 0; // true ou false
//false && true = false;
// $i = 2;
$i == 2 && $i >= 100; // true ou false
//true && false = false;


//$i = 2;
$i == 2 || $i >= 0; // true ou false
//true || true = true;
// $i =0;
$i == 2 || $i >= 0; // true ou false
//false || true = true;
// $i = 2;
$i == 2 || $i >= 100; // true ou false
//true || false = true;
