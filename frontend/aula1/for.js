$de = 100;
$ate = 20;
$auxiliar = 0;


if($de > $ate){
    $auxiliar = $ate; // 20
    $ate = $de; //100 
    $de = $auxiliar; // 20
}







// for($inicio ; $ate quando ; $o q fazer na repeticao)
for($i=$de;$i<=$ate;$i++){
    document.write($i);
    document.write('<br>');
}