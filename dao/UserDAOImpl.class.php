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

  public function insert(UserDTO $tempUserDTO) {
    $sql = 'INSERT INTO users(users_name, users_email, users_password, users_active) values(?, ?, ?, ?)'
    $sqlQuery = new SqlQuery($sql);
    $sqlQuery->setString($tempUserDTO->name);
    $sqlQuery->setString($tempUserDTO->email);
    $sqlQuery->setString($tempUserDTO->password);
    $sqlQuery->setNumber(1);
    $id = parent::insert($sqlQuery);
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
