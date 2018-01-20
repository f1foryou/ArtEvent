<?php
	require_once 'dbconnect.php';
	class userdao extends dbconnect {
		private $conn; 
		public function __construct() { 
			$this->conn = $this->connect();
		}
		public function select( $table , $where='' , $other='' ){
			if($where != '' ){  // condition was wrong
				$where = 'where ' . $where; // Added space 
			}
			$sql = "SELECT * FROM  ".$table." " .$where. " " .$other;
			$sele = mysqli_query($this->conn, $sql) or die(mysqli_error($this->conn));
			return $sele;
		}
	}
?>