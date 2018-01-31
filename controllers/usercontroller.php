<?php
	//require_once '../model/UserDAOImpl.php';
	//require_once '../model/UserDTO.php';
	//require_once '../model/userdto.php';
	//require_once '../model/userdao.php';

	if((isset($_GET['act']))&&($_GET['act']=="login")){
		$email = $_GET['umail'];
		$pass = $_GET['upass'];

		//DTO Construct
		$tempUserDto = new UserDTO();
		$tempUserDto = $tempUserDto->tempConstruct($email,$pass);

		//DAO Function call
		$userDao = new UserDAO();
		$result = $userDao->findByMailAndPassword($tempUserDto);

		header('Content-type: application/json');
		echo json_encode($result);
	}
?>
