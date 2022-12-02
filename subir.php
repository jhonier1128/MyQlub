<?php 

$nombre_temporal = $_FILES['img']['tmp_name'];
$nombre = $_FILES['img']['name'];
move_uploaded_file($nombre_temporal, 'imagesCOMERCIOS/'.$nombre);

?>