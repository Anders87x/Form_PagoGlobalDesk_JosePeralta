<?php
session_start();
class Conectar {
	protected $dbh;
	protected function Conexion(){
		try {
			$conectar = $this->dbh = new PDO("mysql:local=localhost;dbname=portalglobaldesk","root","");
			$conectar->query("SET NAMES 'utf8'");
			return $conectar;	
 		} catch (Exception $e) {
 			print "¡Error!: " . $e->getMessage() . "<br/>";
            die();	
 			}
		}
	
		public function set_names(){	
			return $this->dbh->query("SET NAMES 'utf8'");
		}

		public function ruta(){
			/*RUTA DEL PORTAL*/
			//return "http://localhost:8080/web_globaldesk/";
			return "http://localhost/web_globaldesk/";
		}
}
?>