$de = 0;
$ate = 50;


// while($de <= $ate){
//     document.write($de);
//     document.write('<br>');
//     $de++;
// }

$i = $de; 
$executar = true;
while($executar == true){
    document.write ($i);
    document.write('<br>');

    $i++;

    if($i>= $ate){
        $executar = false;
    }
}