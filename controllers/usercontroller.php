<?php
	require_once '../dao/UserDAOImpl.class.php';
	require_once '../dao/UserDTO.class.php';

	if((isset($_GET['act']))&&($_GET['act']=="login")){
		$email = $_GET['umail'];
		$pass = $_GET['upass'];

		//DTO Construct
		$tempUserDto = new UserDTO();
		$tempUserDto = $tempUserDto->tempConstruct($email,$pass);

		//DAO Function call
		$userDao = new UserDAOImpl();
		$result = $userDao->findByMailAndPassword($tempUserDto);

		header('Content-type: application/json');
		echo json_encode($result);
	}

	if((isset($_POST['act']))&&($_POST['act']=="register")){
		$email = $_POST['umail'];
		$pass = $_POST['upass'];
		$uname = $_POST['uname'];
		
		//DTO Construct
		$tempUserDto = new UserDTO();
		$tempUserDto = $tempUserDto->tempConstruct($email, $pass, $uname);

		//DAO Function call
		$userDao = new UserDAOImpl();
		$result = $userDao->insert($tempUserDto);

		header('Content-type: application/json');
		echo json_encode($result);
	}
?>
