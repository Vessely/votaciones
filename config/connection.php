<?php
/*

Este archivo contiene: la conexión a la base de datos.

*/

define("host", "localhost");
define("user", "root");
define("pass", "");
define("data", "votaciones");


//Objeto de conexión a la base de datos.
$connection_link = new mysqli(host, user, pass, data);

?>