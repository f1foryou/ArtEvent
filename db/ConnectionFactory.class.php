<?php

require_once('ConnectionProperty.php');

class ConnectionFactory{

	static public function getConnection(){
		$conn = new mysqli(ConnectionProperty::getHost(), ConnectionProperty::getUser(), ConnectionProperty::getPassword(), ConnectionProperty::getDatabase());
		if(mysqli_connect_errno()){
			throw new Exception('could not connect to database ('.mysqli_connect_error().')');
		}
		return $conn;
	}

	static public function close($connection){
		$connection->close();
	}
}
?>
