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

			$email = $tempUserDTO->email;
			$password = $tempUserDTO->password;

			$sql="SELECT * FROM users where users_email='".$email."' and users_password='".$password."'";
			$query=mysqli_query($this->conn,$sql);
			$row=mysqli_fetch_array($query);
			if(($row['users_email']==$email)&&($row['users_password']==$password))
			{
				$userDetails = new userDTO();
				$userDetails = $userDetails->resultConstruct($row['users_id'],$row['users_name'],$row['users_email'],$row['users_active'],$row['created_date'],$row['last_mod_date']);
				return array('result' =>'success','data' => $userDetails);
			}else{
				return array('result' => "error");
			}
		}
		public function selectAll(){
			$sql="SELECT * FROM users";
			$query=mysqli_query($this->conn,$sql);
			$userDetails = new userDTO();
			$usersDetails=array();
			while ($row=mysqli_fetch_array($query)) {
				$userDetails = $userDetails->resultConstruct($row['users_id'],$row['users_name'],$row['users_email'],$row['users_active'],$row['created_date'],$row['last_mod_date']);
				array_push($usersDetails, $userDetails);
			}
			return array('result' =>'success','data' => $usersDetails);
		}
	}
?>