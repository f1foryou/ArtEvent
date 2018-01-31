<?php

require_once('BaseDAO.php');

interface UserDAO extends BaseDAO {

  public function findByMailAndPassword(UserDTO $userDTO);

}

?>
