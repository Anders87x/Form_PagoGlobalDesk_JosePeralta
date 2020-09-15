<?php
	require_once("config/conexion.php");
	require_once("models/hmm-documentacion.modelo.php");
    
class ControladorHMMDocumentacion{

	/*=============================================
	MOSTRAR DOCUMENTACION
	=============================================*/
	static public function ctrMostrarDocumentacion($item1,$valor1){
		$tabla = "documentosc";
		$respuesta = ModeloDocumentacion::MdlMostrarDocumentacion($tabla, $item1, $valor1);
		return $respuesta;
	}

	/*=============================================
	MOSTRAR DETALLE
	=============================================*/
	static public function ctrMostrarDetalleDoc($item1,$valor1){
		if(isset($_POST["mostrarDetalleDoc"])){
			$nombre = $_GET['idlpp'];
			var_dump ($nombre);
		}
		$tabla = "documentosd";
		$respuesta = ModeloDocumentacion::MdlMostrarDetalleDoc($tabla, $item1, $valor1);
		return $respuesta;
	}

	
}
	


