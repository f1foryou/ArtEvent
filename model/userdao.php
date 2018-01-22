<?php
	require_once 'dbconnect.php';
	require_once 'userdto.php';

	class userDAO{
		private $dbcon;
		private $conn;
		public function __construct() {
			$this->dbcon = new dbconnect();
			$this->conn = $this->dbcon->connect();
		}
		public function findByMailAndPassword(userDTO $tempUserDTO){
			$userDTO = $tempUserDTO;

			$email = $userDTO->email;
			$password = $userDTO->password;

			$sql="SELECT * FROM users where users_email=".$email."and users_password=".$password;
			$query=mysqli_query($conn,$sql);
			
		}
	}
?>