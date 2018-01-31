<?php

require_once('ConnectionFactory.class.php');

class Connection{

		private $connection;

		public function __construct(){
			$this->connection = ConnectionFactory::getConnection();
		}

		public function close(){
			ConnectionFactory::close($this->connection);
		}

    public function getError() {
        return $this->connection->error;
    }
    public function getAffectedRows() {
        return $this->connection->affected_rows;
    }
    public function getInsertedId()
    {
        return $this->connection->insert_id;
    }

    public function escape($value) {
        return $this->connection->real_escape_string($value);
    }

		public function executeQuery($sql){
			return $this->connection->query($sql);
		}
}
?>
