<?php

  /*
  * Nombre: Conexion a la base de datos
  * Fecha de creacion: 26-01-2016
  * Descripcion: 
  *  parametros de conexion para la base de datos mysql
  */
  class Conectar{
    public static function con(){
      
      $mysqli= new mysqli("localhost","root","root");
      $mysqli->select_db("prueba");
      $mysqli->query("SET NAMES 'UTF8'");
      return $mysqli;
    }
  }

?>