<?php

require_once('QueryExecutor.php');
require_once('SqlQuery.php');
require_once('BaseDAOImpl.php');
require_once('UserDAO.php');
require_once('UserDTO.php');

/**
 *
 */
class UserDAOImpl extends BaseDAOImpl implements UserDAO {

  function __construct(){
    parent::__construct('users');
  }

  public function findByMailAndPassword(UserDTO $tempUserDTO){

    $email = $tempUserDTO->email;
    $password = $tempUserDTO->password;

    $sql="SELECT * FROM users where users_email='".$email."' and users_password='".$password."'";
    $sqlQuery = new SqlQuery($sql);
    $row = QueryExecutor::execute($sqlQuery);
    if(($row[0]['users_email']==$email)&&($row[0]['users_password']==$password))
    {
      $userDetails = new UserDTO();
      $userDetails = $userDetails->resultConstruct($row[0]['users_id'],$row[0]['users_name'],$row[0]['users_email'],$row[0]['users_active'],$row[0]['created_date'],$row[0]['last_mod_date']);
      return array('result' =>'success','data' => $userDetails);
    }else{
      return array('result' => "error");
    }
  }

}

?>
