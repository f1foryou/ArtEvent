<?php
require_once('BaseDAO.class.php');
require_once('UserDTO.class.php');

interface UserDAO extends BaseDAO {

  public function findByMailAndPassword(UserDTO $userDTO);

}

?>
