<?php

/**
 *
 */
interface BaseDAO {

  public function read($id);

  public function readAll();

  public function readAllOrderBy($colName);

  public function delete($id);

  public function insert($genericDTO);

  public function update($genericDTO);

  public function clearAllRows();

  public function numRows($where);

}

?>
