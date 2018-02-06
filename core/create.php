<?php

include("../config/connection.php");

$title = $_POST['title'];
$op_a = $_POST['op_a'];
$op_b = $_POST['op_b'];
$description = $_POST['description'];

	$sql = "INSERT INTO encuestas (title, op_a, op_b, description) VALUES ('$title', '$op_a', '$op_b', '$description')";
	$insert = mysqli_query($connection_link, $sql);

	if($insert){
		echo "true";
	}else{
		echo "false";
	}

?>