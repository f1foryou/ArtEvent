<?php
require_once('BaseDAOImpl.class.php');
require_once('../dao/UserDAO.class.php');
require_once('../db/SqlQuery.class.php');
require_once('../db/QueryExecutor.class.php');
require_once('../dto/UserDTO.class.php');
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
