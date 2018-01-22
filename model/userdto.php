<?php
	class userDTO{
		
		public $id;
		public $name;
		public $email;
		public $password;
		public $isActive;
		public $createdDate;
		public $lastModifiedDate;

		public function __construct() {
        }

		public function tempConstruct($email,$password){
			$instance = new self();
			$instance->email = $email;
			$instance->password = $password;
			return $instance;
		}
	}
?>