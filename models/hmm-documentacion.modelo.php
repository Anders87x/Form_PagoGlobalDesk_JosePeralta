<?php

//require_once("config/conexion.php");

class ModeloDocumentacion {
	public function get_mostrar_documentacion(){
		$conectar= parent::conexion();
		parent::set_names();
		$sql="SELECT * FROM facturacionypagosSELECT * FROM facturacionypagos";
		$sql=$conectar->prepare($sql);
		$sql->execute();
		return $resultado=$sql->fetchAll();
	} 

	/*=============================================
	MOSTRAR Documentacion
	=============================================*/

/* 	static public function MdlMostrarDocumentacion($tabla, $item1, $valor1){
		if($item1 != null){
			$stmt = Conectar::Conexion()->prepare("SELECT * FROM facturacionypagos WHERE $valor1 = :$valor1");
			$stmt -> bindParam(":".$valor1, $item1, PDO::PARAM_STR);
			$stmt -> execute();
			return $stmt -> fetchAll();
		}else{
			$stmt = Conectar::Conexion()->prepare("SELECT * FROM facturacionypagos");
			$stmt -> execute();
			return $stmt -> fetchAll();
		}
		$stmt -> close();
		$stmt = null;
	} */


/*

        public function MdlMostrarDocumentacion($tabla, $item1, $valor1){
            $conectar= parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM `documentosd` WHERE id_docuC = ?";
            $sql=$conectar->prepare($sql);
            $sql->bindValue(1, $id_docuc);
            $sql->execute();
            return $resultado=$sql->fetchAll();
        } 
    }
*/
/*=============================================
	MOSTRAR DETALLE DE DOCUMENTACION
	=============================================

	static public function MdlMostrarDetalleDoc($tabla, $item1, $valor1){
		if($item1 != null){
			$stmt = Conectar::Conexion()->prepare("SELECT * FROM $tabla WHERE $item1 = :$item1");
			$stmt -> bindParam(":".$item1, $valor1, PDO::PARAM_STR);
			$stmt -> execute();
			return $stmt -> fetchAll();
		}else{
			$stmt = Conectar::Conexion()->prepare("SELECT * FROM $tabla");
			$stmt -> execute();
			return $stmt -> fetchAll();
		}
		$stmt -> close();
		$stmt = null;
	}
*/



}
