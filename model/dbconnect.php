<?php
class dbconnect{
	public function connect(){
		$host = 'localhost';
		$user = 'root';
		$pass = '';
		$db = 'contest';
		$connection = mysqli_connect($host,$user,$pass,$db);
		return $connection;
	}
}
