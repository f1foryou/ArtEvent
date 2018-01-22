<?php
	require_once '../model/userdto.php';
	require_once '../model/userdao.php';

	if(isset($_GET['act'])){
		$result;
		$email = $_GET['umail'];
		$pass = $_GET['upass'];

		//DTO Construct
		$tempUserDto = new userDTO();
		$tempUserDto = $tempUserDto->tempConstruct($email,$pass);

		//DAO Function call
		$userDao = new userDAO();
		$result = $userDao->findByMailAndPassword($tempUserDto);

		header('Content-type: application/json');
		echo json_encode($result);
	}
?>