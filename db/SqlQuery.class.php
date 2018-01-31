<?php

require_once('Transaction.class.php');
require_once('Connection.class.php');

class SqlQuery{
	var $txt;
	var $params = array();
	var $idx = 0;

	function __construct($txt){
		$this->txt = $txt;
	}

  private function getConnection(){
      $transaction = Transaction::getCurrentTransaction();
      if(!$transaction){
          $connection = new Connection();
      }else{
          $connection = $transaction->getConnection();
      }
      return $connection;
  }

	public function setString($value){
    $conn = $this->getConnection();
		$value = $conn->escape ($value);
		$this->params[$this->idx++] = "'".$value."'";
	}

	public function set($value){
    $conn = $this->getConnection();
		$value = $conn->escape($value);
		$this->params[$this->idx++] = "'".$value."'";
	}

	public function setNumber($value){
		if($value===null){
			$this->params[$this->idx++] = "null";
			return;
		}
		if(!is_numeric($value)){
			throw new Exception($value.' is not a number');
		}
		$this->params[$this->idx++] = "'".$value."'";
	}

	public function getQuery(){
		if($this->idx==0){
			return $this->txt;
		}
		$p = explode("?", $this->txt);
		$sql = '';
		for($i=0;$i<=$this->idx;$i++){
			if($i>=count($this->params)){
				$sql .= $p[$i];
			}else{
				$sql .= $p[$i].$this->params[$i];
			}
		}
		return $sql;
	}

	private function replaceFirst($str, $old, $new){
		$len = strlen($str);
		for ($i=0;$i<$len;$i++){
			if($str[$i]==$old){
				$str = substr($str,0,$i).$new.substr($str,$i+1);
				return $str;
			}
		}
		return $str;
	}
}
?>
