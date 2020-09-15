<?php
    class Comunicado extends Conectar{
        public function get_comunicado(){
            $conectar=parent::conexion();
            parent::set_names();
            $sql="SELECT * FROM comunicados where estado='1' and fec_fin>=CURDATE()";
            $sql=$conectar->prepare($sql);
            $sql->execute();
            return $resultado=$sql->fetchAll(PDO::FETCH_ASSOC);
        }
    }
?>