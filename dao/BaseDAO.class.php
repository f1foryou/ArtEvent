<?php

/**
 *
 */
interface BaseDAO {

  public function read($id);

  public function readAll();

  public function readAllOrderBy($colName);

  public function delete($id);

  public function insert($sqlQuery);

  public function update($sqlQuery);

  public function clearAllRows();

  public function numRows($where);

}

?>
