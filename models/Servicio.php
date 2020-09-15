<?php
    //require_once("../config/conexion.php");
    class Servicio extends Conectar{
        public function get_documento_por_id($id_docuc){
            $conectar= parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM `documentosd` WHERE id_docuC = ?";
            $sql=$conectar->prepare($sql);
            $sql->bindValue(1, $id_docuc);
            $sql->execute();
            return $resultado=$sql->fetchAll();
        } 

        public function get_mostrar_documentacion(){
            $conectar= parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM facturacionypagos where tipo_serv = 1 and estado_fyp = 1";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchAll();
        } 


        public function get_mostrar_rectificación(){
            $conectar= parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM facturacionypagos where tipo_serv = 2 and estado_fyp = 1";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchAll();
        } 


        public function get_mostrar_DocumentosC_por_id(){
            $conectar= parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM documentosC where catdocuC = 1";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchAll();
        } 


        public function get_mostrar_DocumentosC_contenedor(){
            $conectar= parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM documentosC where catdocuC = 2";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchAll();
        } 

        public function get_mostrar_DocumentosWH(){
            $conectar= parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM documentosC where catdocuC = 3";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchAll();
        } 

        public function get_mostrar_ContenedorWH(){
            $conectar= parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM documentosC where catdocuC = 4";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchAll();
        } 

/** Muestra registros cargados en excel  */
        public function get_Listar_por_cat($cat_tarif){
        /*public function get_Listar_por_cat(){*/
            $conectar= parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM `tarifario` WHERE cat_tarif = ?";
            $sql=$conectar->prepare($sql);
            $sql->bindValue(1, $cat_tarif);
            $sql->execute();
            return $resultado=$sql->fetchAll();
        } 


       
            
        public function get_mostrar_itinerarioExpo(){
            $conectar= parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM `intinerario` where cat_inti = 1 ";
            $sql=$conectar->prepare($sql);
            //$sql->bindValue(1, $cat_inti);
            $sql->execute();
            return $resultado=$sql->fetchAll();
        } 

        public function get_ListaritinerarioplazosImpo(){
            /*public function get_Listar_por_cat(){*/
                $conectar= parent::conexion();
                parent::set_names();
                $sql="SELECT * FROM `intinerario` WHERE cat_inti = 2";
                $sql=$conectar->prepare($sql);
                //$sql->bindValue(1, $cat_inti);
                $sql->execute();
                return $resultado=$sql->fetchAll();
            
            }
            
            

        public function get_mostrar_itinerarioWHExpo(){
            $conectar= parent::conexion();
            parent::set_names();
            //$sql="SELECT * FROM `intinerario` where cat_inti = 7";
            $sql="SELECT id_itinerario,Motonave,Itinerario,DATE_FORMAT(ETA, '%d/%m/%Y') as ETA,DATE_FORMAT(ETD, '%d/%m/%Y') as ETD,
            DATE_FORMAT(EnvMatrizPlazoMax, '%d/%m/%Y %H:%i:%S') as EnvMatrizPlazoMax,DATE_FORMAT(VGMCartaTempPlazoMax, '%d/%m/%Y %H:%i:%S') as VGMCartaTempPlazoMax,
            --DATE_FORMAT(PlazoBLSMex, '%d/%m/%Y %H:%i:%S') as PlazoBLSMex,DATE_FORMAT(PlazoBLSOtrosAsia, '%d/%m/%Y %H:%i:%S') as PlazoBLSOtrosAsia,
            --DATE_FORMAT(PlazoCanBookixContenedor, '%d/%m/%Y %H:%i:%S') as PlazoCanBookixContenedor,
            DATE_FORMAT(PlazoBLSChiJap, '%d/%m/%Y %H:%i:%S') as PlazoBLSChiJap,DATE_FORMAT(PlazoBLSOtrosAsia, '%d/%m/%Y %H:%i:%S') as PlazoBLSOtrosAsia,
            DATE_FORMAT(PlazoBLSMex, '%d/%m/%Y %H:%i:%S') as PlazoBLSMex,
            cat_inti,terminal,linea,PlazoDirecCancVBSada,transporte,agente,manifiesto FROM `intinerario` where cat_inti = 7";
			$sql=$conectar->prepare($sql);
            //$sql->bindValue(1, $cat_inti);
            $sql->execute();
            return $resultado=$sql->fetchAll();
        }    
        
        public function get_mostrar_itinerarioWHImpo(){
            $conectar= parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM `intinerario` where cat_inti = 8";
            $sql=$conectar->prepare($sql);
            //$sql->bindValue(1, $cat_inti);
            $sql->execute();
            return $resultado=$sql->fetchAll();
        }  



        public function get_listar_comunicados_venc(){
            $conectar= parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM comunicados where estado='0' and fec_fin<=CURDATE() order by fec_ini desc";
            $sql=$conectar->prepare($sql);
            //$sql->bindValue(1, $cat_inti);
            $sql->execute();
            return $resultado=$sql->fetchAll();
        }  

        public function get_listar_comunicados_activos(){
            $conectar= parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM comunicados where estado = '1'";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchAll();
        } 

        public function get_img_por_cat($cat_img){
                $conectar= parent::conexion();
                parent::set_names();
                $sql="SELECT * FROM `servicios` WHERE cat_img = ?";
                $sql=$conectar->prepare($sql);
                $sql->bindValue(1, $cat_img);
                $sql->execute();
                return $resultado=$sql->fetchAll();
            } 

        

    }
?>