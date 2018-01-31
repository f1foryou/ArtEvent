<?php
class dbconnect{
	public function connect(){
		$host = 'localhost';
		$user = 'root';
		$pass = 'root';
		$db = 'contest';
		$connection = mysqli_connect($host,$user,$pass,$db);
		return $connection;
	}
}
