<?php
	require_once '../model/userdao.php';
	$d = new userdao();

	$loginResult=array();
	class UserController{
		public $username;
		public $password;
		public $result;
		function __construct($user,$pass,$result){
			$this->username=$user;
			$this->password=$pass;
			$this->result=$result;
		}
	}

	if(isset($_GET['uname'])){
		$username = $_GET['uname'];
		$pswd = $_GET['upass'];
		$result = "error";
		$userLogin = null;

		$sel = $d->select("contacts" , "email = '" . $username . "' AND phone='" . $pswd . "'" ) or die('error from here');
		$result = mysqli_fetch_array($sel) ;

		if($result['email'] == $username && $result['phone'] == $pswd){
			SESSION_START();
			$_SESSION['user_name'] = $result['email'];
			$result="sucess";
			$userLogin = new UserController($username,$pswd,$result);
		}
		else{
			$result="error";
			$userLogin = new UserController($username,$pswd,$result);
		}
		header('Content-type: application/json');
		echo json_encode($userLogin);
	}
?>