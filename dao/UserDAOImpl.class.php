<?php
require_once('BaseDAOImpl.class.php');
require_once('UserDAO.class.php');
require_once('SqlQuery.class.php');
require_once('QueryExecutor.class.php');
require_once('UserDTO.class.php');
/**
 *
 */
class UserDAOImpl extends BaseDAOImpl implements UserDAO {

  function __construct(){
    parent::__construct('users');
  }

  public function insertIntoUsers(UserDTO $tempUserDTO) {
    $sql = 'INSERT INTO users(user_name, user_email, user_password, user_active) values(?, ?, ?, ?)';
    $sqlQuery = new SqlQuery($sql);
    $sqlQuery->setString($tempUserDTO->name);
    $sqlQuery->setString($tempUserDTO->email);
    $sqlQuery->setString($tempUserDTO->password);
    $sqlQuery->setNumber(1);
    $id = parent::insert($sqlQuery);
    return $id;
  }

  public function findByMailAndPassword(UserDTO $tempUserDTO){

    $email = $tempUserDTO->email;
    $password = $tempUserDTO->password;

    $sql="SELECT * FROM users where user_email='".$email."' and user_password='".$password."'";
    $sqlQuery = new SqlQuery($sql);
    $row = QueryExecutor::execute($sqlQuery);
    if(($row[0]['user_email']==$email)&&($row[0]['user_password']==$password))
    {
      $userDetails = new UserDTO();
      $userDetails = $userDetails->resultConstruct($row[0]['user_id'],$row[0]['user_name'],$row[0]['user_email'],$row[0]['user_active'],$row[0]['created_date'],$row[0]['last_mod_date']);
      return array('result' =>'success','data' => $userDetails);
    }else{
      return array('result' => "error");
    }
  }

}

?>
