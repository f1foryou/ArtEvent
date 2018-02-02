<?php

require_once('BaseDAOImpl.class.php');
require_once('UserDAOImpl.class.php');

class DAOFactory {

  public static function getBaseDAO(){
  		return new BaseDAOImpl();
  }

  public static function getUserDAO(){
  		return new UserDAOImpl();
  }

}

?>
