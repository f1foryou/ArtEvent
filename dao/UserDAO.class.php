<?php
require_once('BaseDAO.class.php');

interface UserDAO extends BaseDAO {

  public function findByMailAndPassword(UserDTO $userDTO);

}

?>
