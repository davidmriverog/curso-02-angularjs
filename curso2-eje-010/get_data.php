<?php
  require_once("conexion.php");

  $query="select * from tareas";

  $result = mysqli_query(Conectar::con(),$query);

  $arr = array(); 

  if($result->num_rows > 0){

    while($row = $result->fetch_assoc()) { $arr[] = $row; }
  }

  echo $json_response = json_encode($arr);

?>