<?php
	require_once '../dao/UserDAOImpl.class.php';
	require_once '../dao/DAOFactory.class.php';
	require_once '../dao/Transaction.class.php';
	require_once '../dao/UserDTO.class.php';

	if((isset($_GET['act']))&&($_GET['act']=="login")){
		$email = $_GET['umail'];
		$pass = $_GET['upass'];

		$transaction = new Transaction();

		//DTO Construct
		$tempUserDto = new UserDTO();
		$tempUserDto = $tempUserDto->tempConstruct($email,$pass);

		//DAO Function call
		//$userDao = new UserDAOImpl();
		//$result = $userDao->findByMailAndPassword($tempUserDto);

		$result = DAOFactory::getUserDAO()->findByMailAndPassword($tempUserDto);

		header('Content-type: application/json');
		echo json_encode($result);
		$transaction->commit();
	}

	if((isset($_GET['act']))&&($_GET['act']=="register")){
		$email = $_GET['umail'];
		$pass = $_GET['upass'];
		$uname = $_GET['uname'];

		$transaction = new Transaction();

		//DTO Construct
		$tempUserDto = new UserDTO();
		$tempUserDto = $tempUserDto->tempConstruct($email, $pass, $uname);

		//DAO Function call
		//$userDao = new UserDAOImpl();
		//$result = $userDao->insertIntoUsers($tempUserDto);

		$result = DAOFactory::getUserDAO()->insertIntoUsers($tempUserDto);

		header('Content-type: application/json');
		echo json_encode($result);
		$transaction->commit();
	}
?>
