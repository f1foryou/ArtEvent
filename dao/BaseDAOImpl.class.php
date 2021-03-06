<?php
require_once('BaseDAO.class.php');
require_once('SqlQuery.class.php');
require_once('QueryExecutor.class.php');
/**
 *
 */
class BaseDAOImpl implements BaseDAO {

  private $tableName;

  function __construct($tblName) {
    $this->setTableName($tblName);
  }

  public function setTableName($tblName) {
    $this->tableName = '`'.$tblName.'`';
  }

  public function getTableName() {
    return $this->tableName;
  }

  public function read($id) {
    $sql = 'SELECT * FROM' . $this->tableName .' WHERE '. $this->tableName .'_id = ?';
		$sqlQuery = new SqlQuery($sql);
		$sqlQuery->setNumber($id);
		return $this->getRow($sqlQuery);
  }

  public function readAll() {
    $sql = 'SELECT * FROM '. $this->tableName;
		$sqlQuery = new SqlQuery($sql);
		return $this->getList($sqlQuery);
  }

  public function readAllOrderBy($colName) {
    $sql = 'SELECT * FROM '. $this->tableName . ' ORDER BY '. $colName;
		$sqlQuery = new SqlQuery($sql);
		return $this->getList($sqlQuery);
  }

  public function delete($id) {
    $sql = 'DELETE FROM '.$this->tableName .' WHERE '. $this->tableName .'_id = ?';
		$sqlQuery = new SqlQuery($sql);
		return $this->executeUpdate($sqlQuery);
  }

	public function clearAllRows(){
		$sql = 'DELETE FROM '.$this->tableName;
		$sqlQuery = new SqlQuery($sql);
		return $this->executeUpdate($sqlQuery);
	}

  public function insert(SqlQuery $sqlQuery) {
    $id = $this->executeInsert($sqlQuery);
    return $id;
  }

  public function update(SqlQuery $sqlQuery) {
    return $this->executeUpdate($sqlQuery);
  }

  public function numRows($where=false) {
		$sql = 'SELECT COUNT(*) AS total FROM '.$this->tableName;

		if ($where !== false){
			$sql.=' where ';
			$whereArr = array();
			foreach($where as $clause => $val) {
				$whereArr[] = $clause.'=\''.$val.'\'';
			}
			$sql.=' where '.implode(',',$whereArr);
		}
		$sqlQuery = new SqlQuery($sql);
		return $this->querySingleResult($sqlQuery);
	 }

  protected function getList($sqlQuery){
		$tab = QueryExecutor::execute($sqlQuery);
    if(count($tab)==0){
			return null;
		}
		$ret = array();
		for($i=0;$i<count($tab);$i++) {
			$ret[$i] = $tab[$i];
		}
		return $ret;
	}

  protected function getRow($sqlQuery){
		$tab = QueryExecutor::execute($sqlQuery);
		if(count($tab)==0){
			return null;
		}
		return $tab[0];
	}

	protected function execute($sqlQuery){
		return QueryExecutor::execute($sqlQuery);
	}

	protected function executeUpdate($sqlQuery){
		return QueryExecutor::executeUpdate($sqlQuery);
	}

	protected function querySingleResult($sqlQuery){
		return QueryExecutor::queryForString($sqlQuery);
	}

	protected function executeInsert($sqlQuery){
		return QueryExecutor::executeInsert($sqlQuery);
	}

}

?>
