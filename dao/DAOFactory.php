<?php

class DAOFactory {

  public static function getBaseDAO(){
  		return new BaseDAO();
  }

  public static function getUserDAO(){
  		return new UserDAO();
  }

}

?>
