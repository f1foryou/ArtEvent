<?php
	class UserDTO{

		public $id;
		public $name;
		public $email;
		public $password;
		public $isActive;
		public $createdDate;
		public $lastModifiedDate;

		public function __construct() {
        }

		public function tempConstruct($email, $password, $name=''){
			$instance = new self();
			$instance->email = $email;
			$instance->password = $password;
			$instance->name = $name;
			return $instance;
		}

		public function resultConstruct($id,$name,$email,$isActive,$createdDate,$lastModifiedDate){
			$instance = new self();
			$instance->id = $id;
			$instance->name = $name;
			$instance->email = $email;
			$instance->isActive = $isActive;
			$instance->createdDate = $createdDate;
			$instance->lastModifiedDate=$lastModifiedDate;
			return $instance;
		}
	}
?>
