<?php
	session_start();
	$connection = mysqli_connect("localhost","root","root","contest") or die(mysqli_error());
	date_default_timezone_set('Asia/Kolkata');
?>
