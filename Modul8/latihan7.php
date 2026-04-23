<?php

$namaBuah = array("Nanas", "Mangga", "jeruk", "Apel", "Melon", "Manggis");
echo "saya suka " . $namaBuah[0] . ", " . " dan " . $namaBuah[1] . " dan " . $namaBuah[2] . ".";


echo "saya suka " . $namaBuah[1] ;

echo "saya suka " . $namaBuah[2] ;

echo "saya suka " . $namaBuah[3] ;

echo "saya suka " . $namaBuah[4] ;


$umur = array("Andi"=>"35 Tahun", "Ben"=>"37 Tahun", "Joe"=>"Tahun");
$umur['ahmad']="50 Tahun";
echo "Umur Andi adalah " . $umur['Andi'] ;

foreach ($umur as $nama => $nilai) {
    echo "<br>$nama umurnya adalah $nilai";
}
?>
